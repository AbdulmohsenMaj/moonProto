import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

function getSecretKey() {
	const secret = process.env.JWT_SECRET;
	return new TextEncoder().encode(secret || "");
}

export async function middleware(request) {
	const { pathname, search } = request.nextUrl;

	// Public paths that should bypass auth
	const isPublic = [
		"/",
		"/login",
		"/signup",
		"/men",
		"/women",
		"/stores",
		"/about",
	].some((p) => pathname === p || pathname.startsWith(`${p}/`));

	if (isPublic) return NextResponse.next();

	const token = request.cookies.get("auth_token")?.value;

	// Special handling for /admin path
	if (pathname.startsWith("/admin")) {
		if (!token) {
			// If no token, redirect to 404 for admin path
			const url = request.nextUrl.clone();
			url.pathname = "/not-found";
			return NextResponse.redirect(url);
		}

		try {
			const { payload } = await jwtVerify(token, getSecretKey(), {
				algorithms: ["HS256"],
			});
			if (payload.role !== "admin") {
				const url = request.nextUrl.clone();
				url.pathname = "/not-found";
				return NextResponse.redirect(url);
			}
			return NextResponse.next(); // Admin user, proceed
		} catch (e) {
			// Token invalid or expired for admin path, redirect to 404
			const url = request.nextUrl.clone();
			url.pathname = "/not-found";
			return NextResponse.redirect(url);
		}
	}

	// General authentication for other protected paths
	if (!token) {
		const url = request.nextUrl.clone();
		url.pathname = "/login";
		url.search = `from=${encodeURIComponent(pathname + (search || ""))}`;
		return NextResponse.redirect(url);
	}

	try {
		await jwtVerify(token, getSecretKey(), { algorithms: ["HS256"] });
		return NextResponse.next();
	} catch (e) {
		const url = request.nextUrl.clone();
		url.pathname = "/login";
		url.search = `from=${encodeURIComponent(pathname + (search || ""))}`;
		return NextResponse.redirect(url);
	}
}

export const config = {
	matcher: ["/profile/:path*", "/admin/:path*"],
};
