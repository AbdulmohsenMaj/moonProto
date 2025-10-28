import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect("/");
  res.cookies.set("auth_token", "", { 
    path: "/", 
    maxAge: 0,
  });
  return res;
}

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );

    // Clear the auth_token cookie
    response.cookies.set('auth_token', '', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 0, // Expire immediately
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}