"use client";

import { useCart } from "../context/CartContext";

const CartItem = ({
	item,
	mode = "cart", // "cart" or "recommendation"
	onAddToCart = null, // Custom add to cart handler for recommendation mode
}) => {
	const { updateQuantity, removeFromCart, addToCart } = useCart();

	// Helper function to render price display based on mode and sale conditions
	const renderPriceDisplay = () => {
		if (mode === "recommendation" && item.salePrice) {
			return (
				<>
					<span className="text-sm font-bold">${item.salePrice}</span>
					<span className="text-xs text-gray-500 line-through">
						${item.price}
					</span>
				</>
			);
		}

		if (
			item.salePrice &&
			item.originalPrice &&
			item.salePrice < item.originalPrice
		) {
			return (
				<>
					<span className="text-xs text-gray-500 line-through">
						${item.originalPrice}
					</span>
					<span className="text-sm font-semibold">
						${item.salePrice}
					</span>
				</>
			);
		}

		// Default price display
		const priceClassName =
			mode === "recommendation"
				? "font-bold text-gray-900"
				: "font-semibold";

		return (
			<span className={`text-sm ${priceClassName}`}>${item.price}</span>
		);
	};

	// Handle add to cart for recommendation mode
	const handleAddToCart = () => {
		if (onAddToCart) {
			onAddToCart(item);
		} else {
			// Default behavior - add with first available options
			const defaultColor = item.colors?.[0]?.name || null;
			const defaultSize = item.sizes?.[0] || "One Size";
			addToCart(item, 1, defaultSize, defaultColor);
		}
	};

	return (
		<div
			key={item.itemKey}
			className="flex items-center space-x-3 p-3 border rounded-lg"
		>
			<img
				src={item.image || "/test.png"}
				alt={item.name}
				className="w-16 h-16 object-cover rounded"
			/>
			<div className="flex-1 text-left relative">
				{/* Remove button - only in cart mode */}
				{mode === "cart" && (
					<button
						onClick={() => removeFromCart(item.itemKey)}
						className="absolute top-0 right-0 btn btn-xs btn-circle btn-ghost "
					>
						✕
					</button>
				)}

				<h3
					className={`font-medium text-sm ${
						mode === "cart" ? "pr-8" : ""
					}`}
				>
					{item.name}
				</h3>

				{/* Show size/color info for both modes */}
				{mode === "cart" ? (
					// Cart mode - show selected size/color
					(item.size || item.color) && (
						<p className="text-xs text-gray-500">
							{item.size}
							{item.size && item.color && " | "}
							{item.color}
						</p>
					)
				) : (
					// Recommendation mode - show available options
					<p className="text-xs text-gray-600 mb-2">
						{item.colors?.[0]?.name && `${item.colors[0].name}`}
						{item.sizes?.[0] && ` | ${item.sizes[0]}`}
						{!item.colors?.[0]?.name &&
							!item.sizes?.[0] &&
							"One Size"}
					</p>
				)}

				<div className="flex flex-col">
					<div className="flex items-center space-x-2">
						{/* Price display - handle both cart and recommendation modes */}
						{renderPriceDisplay()}
					</div>
					{item.salePrice &&
						item.originalPrice &&
						item.salePrice < item.originalPrice &&
						mode === "cart" && (
							<span className="text-xs text-red-600 font-medium">
								(
								{Math.round(
									((item.originalPrice - item.salePrice) /
										item.originalPrice) *
										100
								)}
								% off)
							</span>
						)}
				</div>

				{/* Bottom controls - quantity controls for cart, add button for recommendations */}
				<div className="flex items-center mt-2 justify-end">
					{mode === "cart" ? (
						// Cart mode - quantity controls
						<div className="flex items-center border border-gray-300 rounded w-20">
							<button
								onClick={() =>
									updateQuantity(
										item.itemKey,
										item.quantity - 1
									)
								}
								className="btn btn-ghost btn-xs px-1 py-1 rounded-none border-none hover:bg-gray-100 flex-1 min-h-0 h-6"
							>
								−
							</button>
							<span className="text-xs px-1 py-1 border-l border-r border-gray-300 flex-1 text-center">
								{item.quantity}
							</span>
							<button
								onClick={() =>
									updateQuantity(
										item.itemKey,
										item.quantity + 1
									)
								}
								className="btn btn-ghost btn-xs px-1 py-1 rounded-none border-none hover:bg-gray-100 flex-1 min-h-0 h-6"
							>
								+
							</button>
						</div>
					) : (
						// Recommendation mode - add to cart button
						<button
							onClick={handleAddToCart}
							className="btn text-xs px-3 py-1 bg-[#262626] max-w-[80px] text-white hover:bg-gray-800"
						>
							Add
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartItem;
