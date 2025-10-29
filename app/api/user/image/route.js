import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/nextAuthOptions";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";

export async function GET() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json(
			{ error: "Not authenticated" },
			{ status: 401 }
		);
	}

	await connectMongoose();
	const user = await User.findById(session.user.id).select("image");

	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}

	return NextResponse.json({ image: user.image });
}
