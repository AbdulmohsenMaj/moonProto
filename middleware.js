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
	matcher: ["/profile/:path*"],
};
