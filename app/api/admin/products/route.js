import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { connectMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request) {
  try {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    const payload = await verifyJwt(token);
    if (!payload || payload.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectMongoose();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ products });
  } catch (error) {
    console.error("GET /api/admin/products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    const payload = await verifyJwt(token);
    if (!payload || payload.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const contentType = request.headers.get("content-type") || "";
    let name, price, category, inStock = true, productId, image, description;

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      name = form.get("name");
      const priceStr = form.get("price");
      inStock = (form.get("inStock") ?? "true") === "true";
      category = form.get("category") || undefined;
      description = form.get("description") || undefined;
      productId = form.get("productId") || undefined;

      const file = form.get("image");
      const imageUrl = form.get("imageUrl");
      if (file && typeof file === "object" && typeof file.arrayBuffer === "function") {
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        await fs.mkdir(uploadDir, { recursive: true });
        const originalName = file.name || "upload";
        const safeName = `${Date.now()}_${originalName}`.replace(/[^a-zA-Z0-9._-]/g, "_");
        const filePath = path.join(uploadDir, safeName);
        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.writeFile(filePath, buffer);
        image = `/uploads/${safeName}`;
      } else if (typeof imageUrl === "string" && imageUrl) {
        image = imageUrl;
      }

      price = parseFloat(priceStr);
    } else {
      const body = await request.json();
      ({ name, price, image, category, description, inStock = true, productId } = body || {});
    }

    if (!name || Number.isNaN(price)) {
      return NextResponse.json({ error: "name and numeric price required" }, { status: 400 });
    }

    await connectMongoose();
    const created = await Product.create({ name, price, image, category, description, inStock, productId });
    return NextResponse.json({ product: created }, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    const payload = await verifyJwt(token);
    if (!payload || payload.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    let id;
    const url = new URL(request.url);
    id = url.searchParams.get("id");
    if (!id) {
      // Try reading from JSON body
      try {
        const body = await request.json();
        id = body?.id || body?._id || body?.productId;
      } catch (_) {
        // ignore parse errors
      }
    }

    if (!id) {
      return NextResponse.json({ error: "Product id required" }, { status: 400 });
    }

    await connectMongoose();
    const doc = await Product.findById(id);
    if (!doc) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Attempt to remove local uploaded image if applicable
    try {
      if (doc.image && typeof doc.image === "string" && doc.image.startsWith("/uploads/")) {
        const filePath = path.join(process.cwd(), "public", doc.image.replace(/^\//, ""));
        await fs.unlink(filePath).catch(() => {});
      }
    } catch (_) {
      // non-blocking; ignore file deletion errors
    }

    await Product.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}