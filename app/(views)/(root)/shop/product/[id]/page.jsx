import ProductDetails from "@/app/components/productPageComponents/ProductDetails";
import allProducts, {
	getProductById,
	getProductsByCategory,
} from "@/app/data/products";
import CategoryCards from "@/app/components/CategoryCards";
import Product from "@/models/Product";
import ProductGrid from "@/app/components/ProductGrid";
import { map } from "mathjs";

function normalizeProduct(p) {
	if (!p) return null;
	const price =
		typeof p.price === "number" ? p.price : parseFloat(p.price ?? 0);
	const salePrice =
		typeof p.salePrice === "number"
			? p.salePrice
			: p.salePrice
			? parseFloat(p.salePrice)
			: undefined;
	return {
		...p,
		price,
		salePrice,
		priceDisplay:
			p.priceDisplay ||
			(Number.isFinite(price) ? `$${price}` : undefined),
		salePriceDisplay:
			p.salePriceDisplay ||
			(Number.isFinite(salePrice) ? `$${salePrice}` : undefined),
		name: p.name || "Unnamed Product",
		image: p.image || "/landing/images/coffee.jpg",
		inStock: typeof p.inStock === "boolean" ? p.inStock : true,
	};
}

export default async function ProductPage({ params }) {
	const { id } = params || {};
	let product = null;
	let availableSizes = [];
	let availableColors = [];

	// Try static dataset for numeric IDs first (backward compatibility)
	const numericId = Number(id);
	if (Number.isFinite(numericId)) {
		const staticProduct = getProductById(numericId);
		if (staticProduct) {
			product = normalizeProduct(staticProduct);
			availableSizes = staticProduct.sizes || [];
			availableColors = staticProduct.colors || [];
		}
	}

	// If not found in static, fetch from DB and match by _id or productId
	if (!product) {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products`,
				{ cache: "no-store" }
			);
			if (res.ok) {
				const { products = [] } = await res.json();
				const found = products.find(
					(p) =>
						String(p._id) === String(id) ||
						String(p.productId) === String(id)
				);
				if (found) {
					product = normalizeProduct(found);
					availableSizes = found.sizes || [];
					availableColors = found.colors || [];
				}
			}
		} catch (e) {
			console.warn("Failed to load product from DB", e);
		}
	}

	if (!product) {
		return (
			<div className="max-w-5xl mx-auto px-4 py-10">
				<h1 className="text-2xl font-bold">Product not found</h1>
				<p className="text-gray-600 mt-2">
					We couldn’t locate this product. It may have been removed or
					the link is invalid.
				</p>
			</div>
		);
	}

	// Build thumbnail data for the row below the main image
	const imagesList =
		Array.isArray(product.images) && product.images.length > 0
			? product.images
			: [product.image, product.image, product.image, product.image];
	const thumbnailCards = imagesList.map((img, idx) => ({
		id: idx + 1,
		title: "",
		image: img,
		href: "#",
	}));

	// Related products by category (fallback to general slice)
	let relatedProducts = [];
	try {
		if (product?.category != null) {
			relatedProducts = (getProductsByCategory(product.category) || [])
				.filter((p) => p.id !== product.id)
				.slice(0, 8);
		}
	} catch (_) {
		// ignore errors, fallback below
	}
	if (!relatedProducts || relatedProducts.length === 0) {
		relatedProducts = (allProducts || [])
			.filter((p) => p.id !== product.id)
			.slice(0, 8);
	}

	return (
		<div className="max-w-6xl mx-auto px-4 py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Column: Main thumbnail and row of images */}
				<div>
					{/* Main Image */}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-auto md:h-[700px] object-cover rounded-lg border"
					/>
					{/* Row of images using CategoryCards */}
					<CategoryCards
						containerClassName="mt-4"
						data={thumbnailCards}
						hideText={true}
						forceHorizontal={true}
						cardWidthClass="w-24"
						cardMinWidth="6rem"
						imageClassName="aspect-square"
					/>
				</div>
				{/* Right Column: Details component */}
				<div className="text-left">
					<ProductDetails
						product={product}
						productFeatures={product?.features}
						id={id}
						availableColors={availableColors}
					/>
				</div>
			</div>

			{/* Related Products Grid */}
			<div className="mt-12">
				<ProductGrid
					products={relatedProducts}
					title="Similar Items"
					showTitle={true}
					titleAlign="left"
					maxProducts={4}
				/>
			</div>
		</div>
	);
}
