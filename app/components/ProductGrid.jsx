"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import MobileCarousel from "./MobileCarousel";

const ProductGrid = ({
	products = [],
	title = "Featured Products",
	showTitle = true,
	className = "",
	maxProducts = 8,
	// Toggle: when false (default) render a slider on mobile; when true, use grid on mobile
	mobileGrid = false,
	// Control title alignment: 'left' | 'center' | 'right'
	titleAlign = "center",
}) => {
	const { addToCart } = useCart();
	const [hoveredProduct, setHoveredProduct] = useState(null);

	// Limit products to display
	const displayProducts = products.slice(0, maxProducts);

	const handleAddToCart = (product, e) => {
		e.preventDefault();
		e.stopPropagation();

		const productKey = product?.id ?? product?._id ?? product?.productId;
		const cartItem = {
			id: productKey,
			name: product.name,
			price: product.salePrice || product.price,
			image: product.image,
			quantity: 1,
			selectedColor: product.colors?.[0] || {
				name: "Default",
				hex: "#000000",
			},
			selectedSize: "M", // Default size
		};

		addToCart(cartItem);
	};

	// Product card renderer reused for grid and mobile slider
	const renderProductCard = (product, index) => (
		<motion.div
			key={product?.id ?? product?._id ?? index}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
			viewport={{ once: true }}
			className="group cursor-pointer"
			onMouseEnter={() =>
				setHoveredProduct(product?.id ?? product?._id ?? null)
			}
			onMouseLeave={() => setHoveredProduct(null)}
		>
			<Link href={`/product/${product?.id ?? product?.productId ?? "#"}`}>
				<div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
					{/* Product Image */}
					<div className="relative bg-gray-50 aspect-square overflow-hidden">
						{/* Discount Badge */}
						{product.salePrice &&
							product.salePrice < product.price && (
								<div className="absolute top-3 left-3 z-10">
									<span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
										{Math.round(
											((product.price -
												product.salePrice) /
												product.price) *
												100
										)}
										% off
									</span>
								</div>
							)}

						<motion.img
							src={product.image}
							alt={product.name}
							className="w-full h-full object-cover"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						/>
					</div>

					{/* Product Details */}
					<div className="p-4 space-y-3 ">
						{/* Product Name (Inter 600, 14px, 20px, 6% letter-spacing, left, uppercase) */}
						<h3 className="font-inter font-semibold text-[14px] leading-5 tracking-[0.06em] text-left uppercase text-black">
							{product.name}
						</h3>

						{/* Price */}
						<div className="flex items-center gap-2">
							{product.salePrice &&
							product.salePrice < product.price ? (
								<>
									<span className="font-maisonNeue font-book text-sm text-gray-500 line-through">
										{product.priceDisplay ||
											`$${product.price}`}
									</span>
									<span className="font-maisonNeue font-demi text-sm text-black">
										{product.salePriceDisplay ||
											`$${product.salePrice}`}
									</span>
								</>
							) : (
								<span className="font-maisonNeue font-demi text-sm text-black">
									{product.priceDisplay ||
										`$${product.price}`}
								</span>
							)}
						</div>

						{/* Description (Inter 400, 14px, 22px, 0% letter-spacing, left) */}
						{(() => {
							const desc =
								product.description ||
								product.detailedDescription ||
								product.category ||
								null;
							return desc ? (
								<p className="font-inter font-normal text-[14px] leading-[22px] tracking-[0] text-gray-600 text-left line-clamp-2">
									{desc}
								</p>
							) : null;
						})()}

						{/* Add to Cart Button */}
						<motion.button
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.96 }}
							transition={{
								type: "spring",
								stiffness: 600,
								damping: 25,
							}}
							onClick={(e) => handleAddToCart(product, e)}
							className="w-full mt-4 py-2 px-4 bg-black text-white text-xs font-maisonNeue font-book uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
						>
							Add to Cart
						</motion.button>
					</div>
				</div>
			</Link>
		</motion.div>
	);

	return (
		<div className={`w-full ${className} `}>
			{showTitle && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className={`${
						titleAlign === "left"
							? "text-left"
							: titleAlign === "right"
							? "text-right"
							: "text-center"
					} mb-12`}
				>
					<h2 className="text-3xl md:text-4xl font-maisonNeue font-book text-black">
						{title}
					</h2>
				</motion.div>
			)}

			{mobileGrid ? (
				<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
					{displayProducts.map((product, index) =>
						renderProductCard(product, index)
					)}
				</div>
			) : (
				<>
					{/* Mobile: Slider */}
					<div className="block md:hidden">
						<MobileCarousel
							items={displayProducts}
							showHeader={false}
							showDots={true}
							renderItem={(item, index) =>
								renderProductCard(item, index)
							}
						/>
					</div>

					{/* Desktop: Grid */}
					<div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
						{displayProducts.map((product, index) =>
							renderProductCard(product, index)
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default ProductGrid;
