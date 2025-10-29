import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";

export async function GET(request) {
	try {
		const token = request.cookies.get("auth_token")?.value;

		if (!token) {
			return NextResponse.json(
				{ error: "Not authenticated" },
				{ status: 401 }
			);
		}

		const payload = await verifyJwt(token);
		if (!payload) {
			return NextResponse.json(
				{ error: "Invalid token" },
				{ status: 401 }
			);
		}

		await connectMongoose();
		const user = await User.findById(payload.sub).select("-__v");

		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({
			id: user._id,
			email: user.email,
			name: user.name,
			image: user.image,
			role: user.role,
			provider: user.provider,
		});
	} catch (error) {
		console.error("Error fetching user:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
