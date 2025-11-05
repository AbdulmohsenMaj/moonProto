"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import ReviewsComponent from "./reviews.jsx";

const ProductDetails = ({
	product,
	productFeatures,
	id,
	availableSizes,
	availableColors,
}) => {
	const { addToCart } = useCart();
	const { user } = useUser();
	const [selectedSize, setSelectedSize] = useState(
		availableSizes?.[0] || null
	);
	const [selectedColor, setSelectedColor] = useState(
		availableColors?.[0] || null
	);
	const [quantity, setQuantity] = useState(1);
	const [favorited, setFavorited] = useState(false);
	const [burst, setBurst] = useState(false);

	const handleAddToCart = () => {
		if (!selectedSize && availableSizes?.length > 0) {
			alert("Please select a size");
			return;
		}
		if (!selectedColor && availableColors?.length > 0) {
			alert("Please select a color");
			return;
		}

		addToCart(
			product,
			quantity,
			selectedSize?.name || selectedSize,
			selectedColor?.name || selectedColor
		);

		// Optional: Show success message
		alert(`Added ${product.name} to cart!`);
	};

	useEffect(() => {
		const checkFavorite = async () => {
			if (!user) {
				setFavorited(false);
				return;
			}
			try {
				const res = await fetch("/api/favorites", {
					credentials: "same-origin",
				});
				if (res.ok) {
					const json = await res.json();
					const pid = (product?.id ?? id)?.toString();
					if (Array.isArray(json.favorites) && pid) {
						const favIds = json.favorites
							.map((f) =>
								typeof f === "string" ? f : f?.productId
							)
							.filter(Boolean);
						setFavorited(favIds.includes(pid));
					} else {
						setFavorited(false);
					}
				} else if (res.status === 401) {
					// Not logged in on this origin/port
					setFavorited(false);
				}
			} catch (e) {
				console.warn("Failed to check favorites", e);
			}
		};
		checkFavorite();
	}, [user, product?.id, id]);

	const toggleFavorite = async () => {
		if (!user) {
			alert("Please login to save favorites.");
			return;
		}
		const pid = (product?.id ?? id)?.toString();
		if (!pid) {
			alert("Sorry, this product cannot be favorited right now.");
			return;
		}
		try {
			// Trigger a quick pop animation
			setBurst(true);
			setTimeout(() => setBurst(false), 200);
			const res = await fetch("/api/favorites", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: pid,
					action: favorited ? "remove" : "add",
					name: product?.name,
					image: product?.image,
					price:
						typeof product?.salePrice === "number"
							? product.salePrice
							: product?.price,
				}),
				credentials: "same-origin",
			});
			if (res.ok) {
				const json = await res.json();
				const has = Array.isArray(json.favorites)
					? json.favorites
							.map((f) =>
								typeof f === "string" ? f : f?.productId
							)
							.filter(Boolean)
							.includes(pid)
					: false;
				setFavorited(has);
			} else if (res.status === 401) {
				alert(
					"Your session isn’t active on this tab. Please login again."
				);
			} else {
				const err = await res.json().catch(() => ({}));
				alert(
					err?.error ||
						"Could not update favorites. Please try again."
				);
			}
		} catch (e) {
			console.error("toggleFavorite error", e);
			alert("Network error while updating favorites.");
		}
	};
	return (
		<>
			<div className="space-y-6">
				{/* Product Header */}
				<div>
					<h2 className="text-sm font-semibold tracking-[0.8px] uppercase text-black mb-2">
						{product.name}
					</h2>

					{/* Rating, Reviews and Stock */}
					<div className="flex items-center gap-3 mb-3">
						{/* Simple star display */}
						<div className="flex items-center">
							{Array.from({ length: 5 }).map((_, i) => (
								<svg
									key={i}
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill={i < 4 ? "currentColor" : "none"}
									className={`text-black ${
										i < 4 ? "" : "text-gray-300"
									}`}
								>
									<path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.002L12 18.896l-7.335 4.104 1.401-8.002L.132 9.211l8.2-1.193L12 .587z" />
								</svg>
							))}
						</div>
						<span className="text-sm text-gray-700">
							(1256 Reviews)
						</span>
						<span
							className={`text-sm ${
								product?.inStock
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							Stock:{" "}
							{product?.inStock ? "In stock" : "Out of stock"}
						</span>
					</div>

					{/* Price Row */}
					<div className="flex items-baseline gap-3 mb-2">
						<span className="text-2xl font-bold text-black">
							{product.salePrice
								? product.salePriceDisplay
								: product.priceDisplay}
						</span>
						{product.salePrice && (
							<span className="text-lg text-gray-500 line-through">
								{product.priceDisplay}
							</span>
						)}
					</div>
				</div>

				{/* Product Description */}
				<div className="text-left">
					{product.descriptionTitle && (
						<h2 className=" font-bold text-xl leading-6 tracking-[0.2px] text-black mb-3">
							{product.descriptionTitle}
						</h2>
					)}
					<p className="text-sm leading-[16.8px] tracking-[1.4px] text-black">
						{product.detailedDescription || product.description}
					</p>
				</div>

				{/* Size Selection */}
				{availableSizes?.length > 0 && (
					<div>
						<div className="flex justify-between items-center mb-3">
							<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
								Size
							</h3>
							<button className="font-['Maison_Neue'] text-sm text-black underline">
								Size Guide
							</button>
						</div>
						<div className="flex flex-wrap gap-2">
							{availableSizes.map((size) => (
								<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`px-4 py-2 border rounded-md transition-colors ${
										selectedSize === size
											? "border-black bg-black text-white"
											: "border-gray-300 hover:border-black"
									}`}
								>
									{size}
								</button>
							))}
						</div>
					</div>
				)}

				{/* Color Selection */}
				{availableColors?.length > 0 && (
					<div>
						<div className="flex items-center gap-2 mb-3">
							<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
								Color :
							</h3>
							<span className="text-sm text-gray-700">
								{selectedColor?.name ||
									availableColors[0]?.name}
							</span>
						</div>
						<div className="flex gap-2">
							{availableColors.map((color) => (
								<button
									key={color.name}
									onClick={() => setSelectedColor(color)}
									className={`w-8 h-8 rounded-sm border transition-colors ${
										selectedColor?.name === color.name
											? "border-black"
											: "border-gray-300 hover:border-black"
									}`}
									style={{ backgroundColor: color.hex }}
									title={color.name}
								/>
							))}
						</div>
					</div>
				)}

				{/* Quantity + Actions */}
				<div className="flex items-center gap-3 mt-4">
					{/* Quantity stepper */}
					<div className="flex items-center border border-gray-300">
						<button
							onClick={() =>
								setQuantity((q) => Math.max(1, q - 1))
							}
							className="w-10 h-10 flex items-center justify-center text-black"
							aria-label="Decrease quantity"
						>
							–
						</button>
						<input
							type="text"
							value={quantity}
							readOnly
							className="w-12 h-10 text-center border-l border-r border-gray-300"
							aria-label="Quantity"
						/>
						<button
							onClick={() => setQuantity((q) => q + 1)}
							className="w-10 h-10 flex items-center justify-center text-black"
							aria-label="Increase quantity"
						>
							+
						</button>
					</div>
					{/* Add to Cart Button */}
					<button
						onClick={handleAddToCart}
						className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium uppercase flex-1"
					>
						Add to Cart
					</button>
				</div>

				{/* Action Buttons */}
				<div className="grid grid-cols-[4fr_1fr] gap-3 mt-3">
					<button className="border border-black text-black py-3 px-6 rounded-md font-medium uppercase w-full">
						Buy Now
					</button>
					<motion.button
						whileHover={{ scale: 1.04 }}
						whileTap={{ scale: 0.98 }}
						transition={{
							type: "spring",
							stiffness: 600,
							damping: 25,
						}}
						onClick={toggleFavorite}
						className={`border border-black rounded-md w-full flex items-center justify-center ${
							favorited ? "text-red-600" : "text-black"
						}`}
						aria-label="Wishlist"
						aria-pressed={favorited}
						title={
							favorited
								? "Remove from favorites"
								: "Add to favorites"
						}
					>
						<motion.svg
							animate={burst ? { scale: 1.08 } : { scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 700,
								damping: 20,
							}}
							className="w-6 h-6"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M9.99413 4.41133C8.29472 2.50827 5.46079 1.99635 3.33149 3.73899C1.2022 5.48163 0.902424 8.3952 2.57457 10.4563L9.99413 17.3276L17.4137 10.4563C19.086 8.3952 18.8228 5.4633 16.6568 3.73899C14.4909 2.01469 11.6937 2.50827 9.99413 4.41133Z"
								stroke="currentColor"
								fill={favorited ? "currentColor" : "none"}
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</motion.svg>
					</motion.button>
				</div>

				{/* Share */}
				<div className="mt-3">
					<p className="text-sm text-black mb-2">Share this:</p>
					<div className="flex items-center gap-3">
						{(() => {
							const url = typeof window !== "undefined" ? window.location.href : "";
							const text = product?.name ? encodeURIComponent(product.name) : "";
							return (
								<>
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                transition={{ type: "spring", stiffness: 600, damping: 25 }}
                                onClick={() => {
                                    if (typeof navigator !== "undefined" && navigator.clipboard && url) {
                                        navigator.clipboard.writeText(url).catch(() => {});
                                    }
                                }}
                                aria-label="Copy link (Facebook)"
                                title="Copy link"
                                className="btn btn-ghost btn-circle"
                            >
                                <img src="/landing/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                transition={{ type: "spring", stiffness: 600, damping: 25 }}
                                onClick={() => {
                                    if (typeof navigator !== "undefined" && navigator.clipboard && url) {
                                        navigator.clipboard.writeText(url).catch(() => {});
                                    }
                                }}
                                aria-label="Copy link (Twitter)"
                                title="Copy link"
                                className="btn btn-ghost btn-circle"
                            >
                                <img src="/landing/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
                            </motion.button>

									<motion.button
										whileHover={{ scale: 1.08 }}
										whileTap={{ scale: 0.94 }}
										transition={{ type: "spring", stiffness: 600, damping: 25 }}
										onClick={() => {
											if (typeof navigator !== "undefined" && navigator.clipboard && url) {
												navigator.clipboard.writeText(url).catch(() => {});
											}
										}}
										aria-label="Copy link for Instagram"
										className="btn btn-ghost btn-circle"
										title="Copy link"
									>
										<img src="/landing/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
										</motion.button>

                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                transition={{ type: "spring", stiffness: 600, damping: 25 }}
                                onClick={() => {
                                    if (typeof navigator !== "undefined" && navigator.clipboard && url) {
                                        navigator.clipboard.writeText(url).catch(() => {});
                                    }
                                }}
                                aria-label="Copy link (LinkedIn)"
                                title="Copy link"
                                className="btn btn-ghost btn-circle"
                            >
                                <img src="/landing/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                            </motion.button>
								</>
							);
						})()}
					</div>
				</div>

				{/* Collapsible Dropdowns: Details, Dimensions, Reviews */}
				<div className="mt-6 border-t pt-4 space-y-2">
					{/* Details */}
					<div className="collapse collapse-plus border-b border-gray-200">
						<input type="checkbox" />
						<div className="collapse-title text-base font-medium text-black">
							Details
						</div>
						<div className="collapse-content text-sm text-gray-700">
							{(product?.descriptionTitle ||
								product?.description) && (
								<div>
									{product?.descriptionTitle && (
										<p className="font-semibold">
											{product.descriptionTitle}
										</p>
									)}
									<p className="mt-2">
										{product?.detailedDescription ||
											product?.description}
									</p>
								</div>
							)}
							<ul className="mt-3 list-disc pl-5 space-y-1">
								{product?.material && (
									<li>Material: {product.material}</li>
								)}
								{product?.care && <li>Care: {product.care}</li>}
								{product?.sku && <li>SKU: {product.sku}</li>}
							</ul>
						</div>
					</div>

					{/* Dimensions */}
					<div className="collapse collapse-plus border-b border-gray-200">
						<input type="checkbox" />
						<div className="collapse-title text-base font-medium text-black">
							Dimensions
						</div>
						<div className="collapse-content text-sm text-gray-700">
							{product?.modelInfo ? (
								<div className="grid grid-cols-2 gap-y-2">
									{product?.modelInfo?.height && (
										<div>
											Model Height:{" "}
											{product.modelInfo.height}
										</div>
									)}
									{product?.modelInfo?.bust && (
										<div>
											Bust: {product.modelInfo.bust}
										</div>
									)}
									{product?.modelInfo?.chest && (
										<div>
											Chest: {product.modelInfo.chest}
										</div>
									)}
									{product?.modelInfo?.waist && (
										<div>
											Waist: {product.modelInfo.waist}
										</div>
									)}
									{product?.modelInfo?.hips && (
										<div>
											Hips: {product.modelInfo.hips}
										</div>
									)}
									{product?.modelInfo?.wearingSize && (
										<div>
											Wearing Size:{" "}
											{product.modelInfo.wearingSize}
										</div>
									)}
									{product?.modelInfo?.fit && (
										<div>Fit: {product.modelInfo.fit}</div>
									)}
								</div>
							) : (
								<p>No dimensions info available.</p>
							)}
						</div>
					</div>

					{/* Reviews */}
					<div className="collapse collapse-plus">
						<input type="checkbox" />
						<div className="collapse-title text-base font-medium text-black">
							Reviews
						</div>
						<div className="collapse-content p-0">
							<ReviewsComponent
								productId={Number(id)}
								listOnly={true}
							/>
						</div>
					</div>
				</div>

				{/* Legacy block removed; details now in dropdowns above */}
				<div className="text-left"></div>
			</div>
		</>
	);
};

export default ProductDetails;
