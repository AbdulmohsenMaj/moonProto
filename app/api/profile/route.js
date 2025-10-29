import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";

export async function PUT(request) {
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

		const formData = await request.formData();
		const name = formData.get("name");
		const image = formData.get("image");

		await connectMongoose();

		const updateData = {};
		if (name) updateData.name = name;

		// Handle image upload (base64 for now, could be extended to file storage)
		if (image && image.size > 0) {
			// Convert image to base64 for simple storage
			const bytes = await image.arrayBuffer();
			const buffer = Buffer.from(bytes);
			const base64Image = `data:${image.type};base64,${buffer.toString(
				"base64"
			)}`;
			updateData.image = base64Image;
		}

		const user = await User.findByIdAndUpdate(payload.sub, updateData, {
			new: true,
		}).select("-__v");

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
		console.error("Error updating profile:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
