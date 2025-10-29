import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";
import { signJwt } from "@/lib/jwt";

export async function POST(request) {
	try {
		const { name, email, password } = await request.json();

		// Validation
		if (!name || !email || !password) {
			return NextResponse.json(
				{ error: "Name, email, and password are required" },
				{ status: 400 }
			);
		}

		if (password.length < 6) {
			return NextResponse.json(
				{ error: "Password must be at least 6 characters long" },
				{ status: 400 }
			);
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Please enter a valid email address" },
				{ status: 400 }
			);
		}

		await connectMongoose();

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ error: "User with this email already exists" },
				{ status: 409 }
			);
		}

		// Hash password
		const saltRounds = 12;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Create user
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			authType: "email",
			role: "client", // Default role
		});

		// Create JWT token
		const jwt = await signJwt({
			sub: user._id.toString(),
			name: user.name,
			email: user.email,
			provider: "none",
		});

		// Create response with cookie
		const response = NextResponse.json(
			{
				message: "User registered successfully",
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
					role: user.role,
					authType: user.authType,
				},
			},
			{ status: 201 }
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
		console.error("Registration error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
