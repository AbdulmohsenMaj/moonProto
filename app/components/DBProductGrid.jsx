"use client";

import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";

export default function DBProductGrid({
  title = "Featured Products",
  showTitle = true,
  className = "",
  maxProducts = 8,
  mobileGrid = false,
  titleAlign = "center",
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/products", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        const items = Array.isArray(data.products) ? data.products : [];
        // Normalize id for ProductGrid
        const normalized = items.map((p) => ({
          ...p,
          id: p.productId || p._id,
        }));
        if (!cancelled) setProducts(normalized);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (error) {
    return <div className="text-sm text-red-600">{error}</div>;
  }

  return (
    <ProductGrid
      products={products}
      title={title}
      showTitle={showTitle}
      className={className}
      maxProducts={maxProducts}
      mobileGrid={mobileGrid}
      titleAlign={titleAlign}
    />
  );
}