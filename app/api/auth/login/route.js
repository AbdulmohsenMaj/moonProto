import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";
import { signJwt } from "@/lib/jwt";

export async function POST(request) {
	try {
		const { email, password } = await request.json();

		// Validation
		if (!email || !password) {
			return NextResponse.json(
				{ error: "Email and password are required" },
				{ status: 400 }
			);
		}

		await connectMongoose();

		// Find user by email and authType
		const user = await User.findOne({
			email,
			authType: "email",
		}).select("+password");

		if (!user) {
			return NextResponse.json(
				{ error: "Invalid email or password" },
				{ status: 401 }
			);
		}

		// Verify password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return NextResponse.json(
				{ error: "Invalid email or password" },
				{ status: 401 }
			);
		}

		// Create JWT token
		const jwt = await signJwt({
			sub: user._id.toString(),
			name: user.name,
			email: user.email,
			provider: "email",
			role: user.role, // Add user's role to the JWT payload
		});

		// Create response with cookie
		const response = NextResponse.json(
			{
				message: "Login successful",
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
					role: user.role,
					authType: user.authType,
				},
			},
			{ status: 200 }
		);

		response.cookies.set("auth_token", jwt, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

		return response;
	} catch (error) {
		console.error("Login error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
