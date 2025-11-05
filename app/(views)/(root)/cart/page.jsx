"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import RecommendationCarousel from "@/app/components/RecommendationCarousel";
import CartItem from "@/app/components/CartItem";

function currency(value, opts = { decimals: 2 }) {
	const n = Number(value || 0);
	const fixed = opts.decimals === 0 ? n.toFixed(0) : n.toFixed(opts.decimals);
	return `$${fixed}`;
}

export default function CartPage() {
	const {
		cartItems,
		totalItems,
		getCartTotal,
		clearCart,
		removeFromCart,
		updateQuantity,
	} = useCart();

	return (
		<div className="w-full">
			<div className="px-4 sm:px-8 md:px-16 lg:px-[200px] py-8 w-full sm:w-fit mx-auto overflow-x-hidden">
				{/* Empty state */}
				{cartItems.length === 0 ? (
					<div className="text-left">
						<p className="text-gray-700 mb-2">
							Your cart is empty.
						</p>
						<Link href="/shop" className="underline text-black">
							Continue shopping
						</Link>
					</div>
				) : (
					<>
						{/* Centered cart block (mobile matches drawer width) */}

						<div className="mx-auto w-full max-w-[calc(100vw-2rem)] sm:w-fit sm:max-w-none">
							{/* Breadcrumb */}
							<div className="text-xs text-gray-500 mb-4 text-left">
								<Link href="/">Home</Link>
								<span className="mx-2">/</span>
								<span>Shopping Cart</span>
							</div>

							{/* Header */}
							<div className="flex items-center justify-between mb-6">
								<h1 className="text-base md:text-lg font-maisonNeue font-book text-black text-left">
									Cart ({totalItems} item)
								</h1>
								{cartItems.length > 0 && (
									<button
										onClick={clearCart}
										className="text-sm text-black underline"
									>
										Clear Cart
									</button>
								)}
							</div>
							{/* Table header (hide on mobile) */}
							<div className="hidden sm:grid grid-cols-[40px_100px_300px_120px_140px_120px] items-center px-4 py-3 gap-x-8 bg-[#3b3840] text-white text-[11px] uppercase tracking-wide w-fit">
								<div />
								<div>Photo</div>
								<div>Product</div>
								<div>Price</div>
								<div>Quantity</div>
								<div>Subtotal</div>
							</div>

							{/* Mobile rows (stacked using CartItem) */}
							<div className="block sm:hidden space-y-3">
								{cartItems.map((item) => (
									<CartItem
										key={item.itemKey}
										item={item}
										mode="cart"
									/>
								))}
							</div>

							{/* Table rows (desktop) */}
							<div className="hidden sm:block divide-y w-fit">
								{cartItems.map((item) => (
									<div
										key={item.itemKey}
										className="grid grid-cols-[40px_100px_300px_120px_140px_120px] items-center py-4 px-4 gap-x-8"
									>
										{/* remove */}
										<button
											aria-label="Remove from cart"
											onClick={() =>
												removeFromCart(item.itemKey)
											}
											className="text-red-500 hover:text-red-600 text-sm"
										>
											✕
										</button>

										{/* photo */}
										<div className="w-16 h-16 overflow-hidden">
											<img
												src={item.image}
												alt={item.name}
												className="w-16 h-16 object-cover"
											/>
										</div>

										{/* product */}
										<div className="text-center">
											<div className="text-sm">
												{item.name}
											</div>
											{item.size || item.color ? (
												<div className="text-xs text-gray-500">
													{[item.size, item.color]
														.filter(Boolean)
														.join(" · ")}
												</div>
											) : null}
										</div>

										{/* price */}
										<div className="text-sm text-gray-800">
											{currency(item.price, {
												decimals: 0,
											})}
										</div>

										{/* quantity stepper */}
										<div>
											<div className="inline-flex items-center border border-gray-300 rounded-sm overflow-hidden">
												<button
													className="px-2 py-1 text-xs text-gray-700 hover:bg-gray-100"
													onClick={() =>
														updateQuantity(
															item.itemKey,
															Math.max(
																1,
																item.quantity -
																	1
															)
														)
													}
													aria-label="Decrease quantity"
												>
													—
												</button>
												<span className="px-3 py-1 text-xs bg-gray-50 border-x border-gray-300">
													{item.quantity}
												</span>
												<button
													className="px-2 py-1 text-xs text-gray-700 hover:bg-gray-100"
													onClick={() =>
														updateQuantity(
															item.itemKey,
															item.quantity + 1
														)
													}
													aria-label="Increase quantity"
												>
													+
												</button>
											</div>
										</div>

										{/* subtotal */}
										<div className="text-sm text-gray-800">
											{currency(
												Number(item.price) *
													Number(item.quantity),
												{ decimals: 0 }
											)}
										</div>
									</div>
								))}
							</div>

							{/* Actions and totals */}
							<div className="mt-6 w-full">
								{/* Coupons & update: stack on mobile, row on desktop */}
								<div className="flex flex-col sm:flex-row sm:items-center gap-3">
									<div className="grid grid-cols-1 sm:grid-cols-[240px_140px] gap-3 w-full sm:w-auto">
										<input
											placeholder="Coupon code"
											className="border px-3 py-2 text-sm w-full"
										/>
										<button className="px-4 py-2 text-xs uppercase bg-gray-900 text-white w-full sm:w-auto">
											Apply coupon
										</button>
									</div>
									<button className="px-4 py-2 text-xs uppercase bg-gray-900 text-white w-full sm:w-auto sm:ml-auto">
										Update cart
									</button>
								</div>

								{/* Totals panel (below; full width on mobile, right-aligned on desktop) */}
								<div className="mt-6 sm:ml-auto sm:w-[380px] w-full bg-[#3b3840] text-white p-6">
									<div className="text-xs uppercase tracking-wide mb-4">
										Cart totals
									</div>
									<div className="flex justify-between py-2 border-b border-[#3b3840]">
										<span className="text-sm">
											Subtotal
										</span>
										<span className="text-sm">
											{currency(getCartTotal())}
										</span>
									</div>
									<div className="flex justify-between py-2 border-b border-[#3b3840]">
										<span className="text-sm">
											Cart totals
										</span>
										<span className="text-sm">
											{currency(getCartTotal())}
										</span>
									</div>
									<Link
										href="/checkout"
										className="block mt-4"
									>
										<button className="w-full bg-black text-white py-3 text-xs uppercase tracking-wide">
											Proceed to checkout
										</button>
									</Link>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
