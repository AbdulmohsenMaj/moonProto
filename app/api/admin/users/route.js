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
		if (!payload || payload.role !== "admin") {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		await connectMongoose();

		const users = await User.find({}).select("-password -__v");

		return NextResponse.json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

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
		if (!payload || payload.role !== "admin") {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		const { userId, role } = await request.json();

		if (!userId || !role) {
			return NextResponse.json(
				{ error: "User ID and role are required" },
				{ status: 400 }
			);
		}

		await connectMongoose();

		const user = await User.findByIdAndUpdate(
			userId,
			{ role },
			{ new: true }
		).select("-password -__v");

		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(user);
	} catch (error) {
		console.error("Error updating user role:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const token = request.cookies.get("auth_token")?.value;

		if (!token) {
			return NextResponse.json(
				{ error: "Not authenticated" },
				{ status: 401 }
			);
		}

		const payload = await verifyJwt(token);
		if (!payload || payload.role !== "admin") {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		const { userId } = await request.json();
		if (!userId) {
			return NextResponse.json(
				{ error: "User ID required" },
				{ status: 400 }
			);
		}

		await connectMongoose();
		const user = await User.findByIdAndDelete(userId);

		if (!user) {
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ message: "User deleted successfully" });
	} catch (error) {
		console.error("Error deleting user:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
