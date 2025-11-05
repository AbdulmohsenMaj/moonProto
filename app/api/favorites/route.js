import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { connectMongoose } from "@/lib/mongoose";
import User from "@/models/User";

export async function GET(request) {
  try {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    let payload;
    try {
      payload = await verifyJwt(token);
    } catch (e) {
      console.error("JWT verify error in /api/favorites GET:", e?.message || e);
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

    await connectMongoose();
    const user = await User.findById(payload.sub).select("favorites");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({ favorites: user.favorites || [] });
  } catch (error) {
    console.error("GET /api/favorites error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    let payload;
    try {
      payload = await verifyJwt(token);
    } catch (e) {
      console.error("JWT verify error in /api/favorites PUT:", e?.message || e);
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

    const body = await request.json();
    const { productId, action, name, image, price } = body || {};
    if (!productId || !["add", "remove"].includes(action)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    await connectMongoose();
    // Add/remove favorites as rich objects keyed by productId
    if (action === "add") {
      // Require metadata when storing as objects
      const favDoc = {
        productId: String(productId),
        name: name ?? undefined,
        image: image ?? undefined,
        price: typeof price === 'number' ? price : undefined,
        addedAt: new Date(),
      };

      // Only push if an entry with the same productId does not exist
      await User.updateOne(
        { _id: payload.sub, "favorites.productId": { $ne: String(productId) } },
        { $push: { favorites: favDoc } }
      );
    } else {
      // Pull by productId from favorites subdocuments; also support legacy string arrays
      await User.updateOne(
        { _id: payload.sub },
        { $pull: { favorites: { productId: String(productId) } } }
      );
      // In case of legacy string entries, also try pulling plain string
      await User.updateOne(
        { _id: payload.sub },
        { $pull: { favorites: String(productId) } }
      );
    }

    const updated = await User.findById(payload.sub).select("favorites");
    if (!updated) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({ favorites: updated.favorites || [] });
  } catch (error) {
    console.error("PUT /api/favorites error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}