import { NextResponse } from "next/server";
import { connectMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectMongoose();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ products });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}