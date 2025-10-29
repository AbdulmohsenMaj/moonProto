import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";
import { signJwt } from "@/lib/jwt";

const PROVIDERS = {
	google: {
		tokenUrl: "https://oauth2.googleapis.com/token",
		userUrl: "https://openidconnect.googleapis.com/v1/userinfo",
		clientIdEnv: "GOOGLE_CLIENT_ID",
		clientSecretEnv: "GOOGLE_CLIENT_SECRET",
		buildTokenBody: ({ code, client_id, client_secret, redirect_uri }) =>
			new URLSearchParams({
				code,
				client_id,
				client_secret,
				redirect_uri,
				grant_type: "authorization_code",
			}),
		tokenHeaders: { "Content-Type": "application/x-www-form-urlencoded" },
	},
	github: {
		tokenUrl: "https://github.com/login/oauth/access_token",
		userUrl: "https://api.github.com/user",
		emailsUrl: "https://api.github.com/user/emails",
		clientIdEnv: "GITHUB_CLIENT_ID",
		clientSecretEnv: "GITHUB_CLIENT_SECRET",
		buildTokenBody: ({ code, client_id, client_secret, redirect_uri }) =>
			new URLSearchParams({
				code,
				client_id,
				client_secret,
				redirect_uri,
			}),
		tokenHeaders: { Accept: "application/json" },
	},
};

function getOrigin(req) {
	const url = new URL(req.url);
	return url.origin;
}

export async function GET(req, { params }) {
	const { provider } = params;
	const cfg = PROVIDERS[provider];
	if (!cfg)
		return NextResponse.json(
			{ error: "Unsupported provider" },
			{ status: 400 }
		);

	const url = new URL(req.url);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const cookieStore = await cookies();
	const expectedState = cookieStore.get(`oauth_state_${provider}`)?.value;
	const returnTo = cookieStore.get("oauth_return_to")?.value || "/account";

	if (!code || !state || !expectedState || state !== expectedState) {
		return NextResponse.redirect(
			`${getOrigin(req)}/login?error=oauth_state`
		);
	}

	const client_id = process.env[cfg.clientIdEnv];
	const client_secret = process.env[cfg.clientSecretEnv];
	if (!client_id || !client_secret) {
		return NextResponse.json(
			{ error: "Missing provider credentials" },
			{ status: 500 }
		);
	}

	const redirect_uri = `${getOrigin(req)}/api/oauth/${provider}/callback`;

	// Exchange code for tokens
	const tokenRes = await fetch(cfg.tokenUrl, {
		method: "POST",
		headers: cfg.tokenHeaders,
		body: cfg.buildTokenBody({
			code,
			client_id,
			client_secret,
			redirect_uri,
		}),
	});

	if (!tokenRes.ok) {
		return NextResponse.redirect(
			`${getOrigin(req)}/login?error=token_exchange`
		);
	}
	const tokenJson = await tokenRes.json();
	const access_token = tokenJson.access_token;
	if (!access_token) {
		return NextResponse.redirect(
			`${getOrigin(req)}/login?error=no_access_token`
		);
	}

	// Fetch user info
	let profile = null;
	if (provider === "google") {
		const userRes = await fetch(cfg.userUrl, {
			headers: { Authorization: `Bearer ${access_token}` },
		});
		profile = await userRes.json();
	} else if (provider === "github") {
		const userRes = await fetch(cfg.userUrl, {
			headers: {
				Authorization: `Bearer ${access_token}`,
				Accept: "application/json",
			},
		});
		const ghUser = await userRes.json();

		let email = ghUser.email;
		if (!email) {
			const emailsRes = await fetch(cfg.emailsUrl, {
				headers: {
					Authorization: `Bearer ${access_token}`,
					Accept: "application/json",
				},
			});
			const emails = await emailsRes.json();
			const primary = Array.isArray(emails)
				? emails.find((e) => e.primary && e.verified)
				: null;
			email = primary?.email || null;
		}
		profile = {
			sub: String(ghUser.id),
			email,
			name: ghUser.name || ghUser.login,
			picture: ghUser.avatar_url,
		};
	}

	if (!profile) {
		return NextResponse.redirect(
			`${getOrigin(req)}/login?error=userinfo_failed`
		);
	}

	// Upsert user in DB
	await connectMongoose();
	const user = await User.findOneAndUpdate(
		{ provider, providerId: String(profile.sub) },
		{
			provider,
			providerId: String(profile.sub),
			email: profile.email,
			name: profile.name,
			image: profile.picture,
			authType: "oauth",
		},
		{ new: true, upsert: true, setDefaultsOnInsert: true }
	);

	// Create session JWT cookie
	const jwt = await signJwt({
		sub: user._id.toString(),
		name: user.name,
		email: user.email,
		provider,
	});

	const res = NextResponse.redirect(`${getOrigin(req)}${returnTo}`);
	res.cookies.set("auth_token", jwt, {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 60 * 60 * 24 * 7, // 7 days
	});
	// Clean up state cookies
	res.cookies.set(`oauth_state_${provider}`, "", { path: "/", maxAge: 0 });
	res.cookies.set("oauth_return_to", "", { path: "/", maxAge: 0 });

	return res;
}
