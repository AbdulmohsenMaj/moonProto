"use client";

import { useState } from "react";

export default function AddProductForm({ onProductAdded }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    inStock: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [otherCategory, setOtherCategory] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const categoryOptions = [
    "Dinnerware",
    "Ceramic",
    "Furniture",
    "Decor Art",
    "Gifts sets",
    "Home Decor",
    "Holiday",
    "Collection",
    "Accessories",
    "Basics",
    "Other",
  ];

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      setSubmitting(true);
      const fd = new FormData();
      fd.append("name", newProduct.name);
      fd.append("price", String(newProduct.price));
      fd.append("inStock", newProduct.inStock ? "true" : "false");
      const resolvedCategory =
        newProduct.category === "Other" ? otherCategory || "" : newProduct.category;
      if (resolvedCategory) fd.append("category", resolvedCategory);
      if (newProduct.description) {
        fd.append("description", newProduct.description);
      }
      if (imageFile) {
        fd.append("image", imageFile);
      } else if (newProduct.image) {
        fd.append("imageUrl", newProduct.image);
      }

      const res = await fetch("/api/admin/products", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Failed to add product");
      const data = await res.json();
      onProductAdded?.(data.product);
      setNewProduct({ name: "", price: "", image: "", category: "", description: "", inStock: true });
      setImageFile(null);
      setOtherCategory("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="border rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-2">Add Product</h2>
      {error && (<div className="bg-red-100 text-red-700 p-2 mb-2 rounded">{error}</div>)}
      <form onSubmit={handleAddProduct} className="space-y-3">
        <input
          value={newProduct.name}
          onChange={(e) => setNewProduct((p) => ({ ...p, name: e.target.value }))}
          placeholder="Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          step="0.01"
          value={newProduct.price}
          onChange={(e) => setNewProduct((p) => ({ ...p, price: e.target.value }))}
          placeholder="Price"
          className="w-full border rounded px-3 py-2"
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct((p) => ({ ...p, description: e.target.value }))}
            placeholder="Short description shown in listing"
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-xs text-gray-500">Alternatively, provide an image URL:</p>
          <input
            value={newProduct.image}
            onChange={(e) => setNewProduct((p) => ({ ...p, image: e.target.value }))}
            placeholder="Image URL (optional)"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Category</label>
          <select
            value={newProduct.category}
            onChange={(e) => setNewProduct((p) => ({ ...p, category: e.target.value }))}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select category</option>
            {categoryOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {newProduct.category === "Other" && (
            <input
              value={otherCategory}
              onChange={(e) => setOtherCategory(e.target.value)}
              placeholder="Custom category"
              className="w-full border rounded px-3 py-2"
            />
          )}
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={newProduct.inStock}
            onChange={(e) => setNewProduct((p) => ({ ...p, inStock: e.target.checked }))}
          />
          In Stock
        </label>

        <button type="submit" disabled={submitting} className="bg-black text-white px-4 py-2 rounded">
          {submitting ? "Adding…" : "Add"}
        </button>
      </form>
    </section>
  );
}