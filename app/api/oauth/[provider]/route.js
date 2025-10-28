import { NextResponse } from "next/server";

const PROVIDERS = {
	google: {
		authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
		scope: "openid email profile",
		extraParams: {
			access_type: "offline",
			prompt: "consent",
		},
		clientIdEnv: "GOOGLE_CLIENT_ID",
	},
	github: {
		authUrl: "https://github.com/login/oauth/authorize",
		scope: "user:email",
		extraParams: {},
		clientIdEnv: "GITHUB_CLIENT_ID",
	},
};

function getOrigin(req) {
	const url = new URL(req.url);
	return url.origin;
}

function randomState() {
	return (
		Math.random().toString(36).slice(2) +
		Math.random().toString(36).slice(2)
	);
}

export async function GET(req, { params }) {
	const { provider } = params;
	const cfg = PROVIDERS[provider];
	if (!cfg)
		return NextResponse.json(
			{ error: "Unsupported provider" },
			{ status: 400 }
		);

	const origin = getOrigin(req);
	const redirectUri = `${origin}/api/oauth/${provider}/callback`;
	const clientId = process.env[cfg.clientIdEnv];
	if (!clientId) {
		return NextResponse.json(
			{ error: `${cfg.clientIdEnv} not set` },
			{ status: 500 }
		);
	}

	const url = new URL(cfg.authUrl);
	url.searchParams.set("client_id", clientId);
	url.searchParams.set("redirect_uri", redirectUri);
	url.searchParams.set("response_type", "code");
	url.searchParams.set("scope", cfg.scope);

	const from = new URL(req.url).searchParams.get("from") || "/account";
	const state = randomState();
	url.searchParams.set("state", state);

	for (const [k, v] of Object.entries(cfg.extraParams)) {
		url.searchParams.set(k, v);
	}

	const res = NextResponse.redirect(url.toString());
	// Persist state and return destination briefly
	res.cookies.set(`oauth_state_${provider}`, state, {
		httpOnly: true,
		sameSite: "lax",
		path: "/",
		maxAge: 600,
	});
	res.cookies.set("oauth_return_to", from, {
		httpOnly: true,
		sameSite: "lax",
		path: "/",
		maxAge: 600,
	});

	return res;
}
