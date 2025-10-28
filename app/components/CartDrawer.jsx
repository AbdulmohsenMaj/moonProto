"use client";

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import RecommendationCarousel from "./RecommendationCarousel";

const CartDrawer = () => {
	const { totalItems, cartItems, getCartTotal } = useCart();

	return (
		<div className="drawer drawer-end">
			<input id="cart-drawer" type="checkbox" className="drawer-toggle" />

			{/* Cart Icon */}
			<motion.label
				htmlFor="cart-drawer"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				transition={{
					type: "spring",
					stiffness: 600,
					damping: 25,
				}}
				className="btn btn-ghost btn-circle drawer-button cursor-pointer relative"
			>
				<img
					src="/cart.svg"
					alt="Cart"
					width="20"
					height="20"
					className="w-5 h-5"
				/>
				{totalItems > 0 && (
					<span className="absolute -top-1 -right-1 bg-gray-100 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
						{totalItems > 99 ? "99+" : totalItems}
					</span>
				)}
			</motion.label>

			{/* Cart Drawer Slideout */}
			<div className="drawer-side">
				<label
					htmlFor="cart-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="menu bg-base-200 min-h-full max-w-[400px] p-0 flex flex-col">
					{/* Cart header */}
					<div className="flex items-center justify-between mb-4 p-4 pb-0">
						<h2 className="text-lg font-semibold">Your Cart</h2>
						<label
							htmlFor="cart-drawer"
							className="btn btn-sm btn-circle btn-ghost"
						>
							✕
						</label>
					</div>

					{/* Cart items */}
					<div className="flex-1 overflow-y-auto px-4">
						{cartItems.length === 0 ? (
							<div className="text-center text-gray-500 mt-8">
								<p>Your cart is empty</p>
								<p className="text-sm mt-2">
									Add some items to get started!
								</p>
							</div>
						) : (
							<div className="space-y-4">
								{cartItems.map((item) => (
									<CartItem key={item.itemKey} item={item} />
								))}
							</div>
						)}

						{/* Recommendation Carousel */}
						<div className="mt-6 pt-6 border-t border-gray-200">
							<h3 className="text-lg font-semibold mb-4 text-left">
								Before You Go
							</h3>
							<RecommendationCarousel
								excludeIds={cartItems.map((item) => item.id)}
							/>
						</div>
					</div>

					{/* Cart footer */}
					{cartItems.length > 0 && (
						<div className="border-t pt-6 mt-4 max-h-[200px] flex-shrink-0 p-4 bg-white">
							<div className="flex justify-between items-center mb-6">
								<span className="text-lg font-bold text-black">
									Subtotal ({totalItems} item
									{totalItems !== 1 ? "s" : ""})
								</span>
								<span className="text-lg font-bold text-black">
									${getCartTotal()}
								</span>
							</div>
							<button
								className="w-full py-4 px-4 text-white font-bold text-sm tracking-wider rounded-none hover:opacity-90 transition-opacity mb-4"
								style={{ backgroundColor: "#262626" }}
							>
								CONTINUE TO CHECKOUT
							</button>
							<p className="text-center text-sm text-gray-700">
								Psst, get it now before it sells out.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartDrawer;
