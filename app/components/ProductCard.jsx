"use client";

import { useState } from "react";
import Link from "next/link";

const ProductCard = ({
	product,
	// Fallback props for backward compatibility
	id,
	title,
	originalPrice,
	salePrice,
	discountPercentage,
	image,
	colors,
	isOnSale,
	className = "",
	sourceCategory = null, // Track where the user came from (e.g., "men", "women")
}) => {
	// Use product data if provided, otherwise fall back to individual props
	const productData = product || {
		id,
		name: title,
		price: originalPrice,
		salePrice,
		discountPercentage,
		image,
		colors,
		isOnSale,
	};

	// Extract data from product object
	const {
		name: productName = "Product Name",
		price: productPrice = 0,
		priceDisplay,
		salePriceDisplay,
		image: productImage = "/test.png",
		colors: productColors = [],
		salePrice: productSalePrice,
		discountPercentage: productDiscountPercentage,
	} = productData;

	// Determine if product is on sale and calculate discount
	const hasDiscount = productSalePrice && productSalePrice < productPrice;
	const calculatedDiscount = hasDiscount
		? Math.round(((productPrice - productSalePrice) / productPrice) * 100)
		: productDiscountPercentage;

	// Convert colors to the expected format (handle both hex and value properties)
	const formattedColors = productColors.map((color) => ({
		name: color.name,
		value: color.hex || color.value || "#000000",
	}));

	// Generate quality badges based on product attributes
	const generateQualityBadges = () => {
		const badges = [];
		const material = productData.material || "";
		const care = productData.care || "";

		// Check for organic materials
		if (material.toLowerCase().includes("organic")) {
			badges.push("ORGANIC MATERIALS");
		}

		// Check for recycled materials
		if (material.toLowerCase().includes("recycled")) {
			badges.push("RECYCLED MATERIALS");
		}

		// Check for premium materials
		if (
			material.toLowerCase().includes("cashmere") ||
			material.toLowerCase().includes("silk") ||
			material.toLowerCase().includes("wool")
		) {
			badges.push("REFINED MATERIALS");
		}

		// Check for eco-friendly care
		if (
			care.toLowerCase().includes("machine wash cold") ||
			care.toLowerCase().includes("tumble dry low")
		) {
			badges.push("CLEANER CHEMISTRY");
		}

		// Check for special materials
		if (
			material.toLowerCase().includes("grade-a") ||
			material.toLowerCase().includes("full grain")
		) {
			badges.push("PREMIUM QUALITY");
		}

		return badges.slice(0, 2); // Limit to 2 badges to match the design
	};

	const qualityBadges = generateQualityBadges();

	const [selectedColor, setSelectedColor] = useState(
		formattedColors[0] || { name: "Default", value: "#000000" }
	);
	const [isHovered, setIsHovered] = useState(false);

	// Build the URL with query parameter if sourceCategory is provided
	let productUrl;
	if (sourceCategory) {
		productUrl = `/product/${productData.id}?from=${sourceCategory}`;
	} else {
		productUrl = `/product/${productData.id}`;
	}

	return (
		<Link href={productUrl}>
			<div
				className={`bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg max-h-[450px] cursor-pointer ${className}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Product Image Container */}
				<div className="relative bg-gray-100 h-[280px] ">
					{/* Discount Badge */}
					{hasDiscount && calculatedDiscount && (
						<div className="absolute top-3 left-3 z-10">
							<span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
								{calculatedDiscount}% off
							</span>
						</div>
					)}

					{/* Product Image */}
					<img
						src={productImage}
						alt={productName}
						className={`w-full h-full object-cover transition-transform duration-300 ${
							isHovered ? "scale-105" : "scale-100"
						}`}
					/>
				</div>

				{/* Product Details */}
				<div className="px-4 py-3">
					{/* Product Title and Pricing */}
					<div className="flex text-left justify-between gap-2 mb-3">
						<h3 className="font-maisonNeue font-book text-sm leading-5 text-black line-clamp-2 flex-1">
							{productName}
						</h3>
						<div className="flex items-center gap-2 flex-shrink-0">
							{hasDiscount ? (
								<>
									<span className="font-maisonNeue font-book text-sm text-gray-500 line-through">
										{priceDisplay || `$${productPrice}`}
									</span>
									<span className="font-maisonNeue font-demi text-sm text-black">
										{salePriceDisplay ||
											`$${productSalePrice}`}
									</span>
								</>
							) : (
								<span className="font-maisonNeue font-demi text-sm text-black">
									{priceDisplay || `$${productPrice}`}
								</span>
							)}
						</div>
					</div>

					{/* Color Variants */}
					{formattedColors.length > 0 && (
						<div
							className={`flex items-center gap-2 ${
								qualityBadges.length > 0 ? "mb-3" : "mb-0"
							}`}
						>
							{formattedColors.map((color, index) => (
								<button
									key={index}
									onClick={() => setSelectedColor(color)}
									className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
										selectedColor.value === color.value
											? "border-black scale-110"
											: "border-gray-300 hover:border-gray-400"
									}`}
									style={{ backgroundColor: color.value }}
									title={color.name}
								>
									{/* Inner ring for light colors */}
									{color.value === "#FFFFFF" ||
									color.value === "#F5F5DC" ||
									color.value === "#FFFFF0" ? (
										<div className="w-full h-full rounded-full border border-gray-200"></div>
									) : null}
								</button>
							))}
						</div>
					)}

					{/* Quality Badges */}
					{qualityBadges.length > 0 && (
						<div className="flex flex-wrap gap-1 ">
							{qualityBadges.map((badge, index) => (
								<span
									key={index}
									className="text-xs font-maisonNeue font-book text-gray-600 bg-gray-100 px-2 py-2 rounded-sm uppercase tracking-wide"
								>
									{badge}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
