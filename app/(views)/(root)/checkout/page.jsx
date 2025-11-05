"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

function currency(value, opts = { decimals: 2 }) {
	const n = Number(value || 0);
	const fixed = opts.decimals === 0 ? n.toFixed(0) : n.toFixed(opts.decimals);
	return `$${fixed}`;
}

export default function CheckoutPage() {
	const { cartItems, getCartTotal } = useCart();
	const router = useRouter();

	// Simple shipping rule for demo purposes
	const shipping = 15;
	const subtotal = useMemo(() => Number(getCartTotal() || 0), [getCartTotal]);
	const total = useMemo(() => subtotal + shipping, [subtotal]);

	// Billing form state (placeholder — no backend yet)
	const [billing, setBilling] = useState({
		firstName: "",
		lastName: "",
		company: "",
		country: "United States",
		address: "",
		city: "",
		phone: "",
		email: "",
		notes: "",
	});

	const [paymentMethod, setPaymentMethod] = useState("card");

	const handleBillingChange = (e) => {
		const { name, value } = e.target;
		setBilling((prev) => ({ ...prev, [name]: value }));
	};

	const handlePlaceOrder = async () => {
		if (!Array.isArray(cartItems) || cartItems.length === 0) {
			alert("Your cart is empty.");
			return;
		}
		const items = cartItems.map((ci) => ({
			productId: ci.id,
			name: ci.name,
			price: Number(ci.price || 0),
			quantity: Number(ci.quantity || 1),
			image: ci.image,
		}));
		try {
			const res = await fetch("/api/orders", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items, total }),
			});
			if (res.status === 401) {
				alert("Please login to place an order.");
				router.push("/login?from=/checkout");
				return;
			}
			if (!res.ok) {
				alert("Failed to place order. Please try again.");
				return;
			}
			// Success
			alert("Order placed successfully.");
			// Clear cart via CartContext if available on checkout page
			try {
				// We don't have clearCart here; redirect to profile orders
				router.push("/profile?tab=orders");
			} catch {}
		} catch (e) {
			console.error("Place order error", e);
			alert("An unexpected error occurred. Please try again.");
		}
	};

	return (
		<div className="w-full">
			<div className="px-4 sm:px-8 md:px-16 lg:px-[200px] py-8 w-full mx-auto">
				{/* Breadcrumb */}
				<div className="text-xs text-gray-500 mb-4 text-left">
					<Link href="/cart" className="underline">
						Cart
					</Link>
					<span className="mx-2">/</span>
					<span>Shipping</span>
					<span className="mx-2">/</span>
					<span className="font-medium">Payment</span>
				</div>

				{/* Page Title */}
				<h1 className="text-base md:text-lg font-maisonNeue font-book text-black text-left mb-6">
					Payment
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
					{/* Left: Billing Details */}
					<div>
						<h2 className="text-sm font-maisonNeue font-demi mb-4">
							Billing Details
						</h2>

						{/* Top section: two columns */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
							{/* First/Last Name */}
							<div>
								<label className="text-xs font-medium">
									First Name *
								</label>
								<input
									name="firstName"
									value={billing.firstName}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="First name"
								/>
							</div>
							<div>
								<label className="text-xs font-medium">
									Last Name *
								</label>
								<input
									name="lastName"
									value={billing.lastName}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="Last name"
								/>
							</div>

							{/* Company */}
							<div>
								<label className="text-xs font-medium">
									Company
								</label>
								<input
									name="company"
									value={billing.company}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="Company"
								/>
							</div>

							{/* Country */}
							<div>
								<label className="text-xs font-medium">
									Country / Region *
								</label>
								<select
									name="country"
									value={billing.country}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
								>
									<option>United States</option>
									<option>Canada</option>
									<option>United Kingdom</option>
									<option>Australia</option>
								</select>
							</div>
						</div>

						{/* Bottom section: single column from Street address downward */}
						<div className="grid grid-cols-1 gap-4 mt-4">
							{/* Address */}
							<div>
								<label className="text-xs font-medium">
									Street address *
								</label>
								<input
									name="address"
									value={billing.address}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="Address"
								/>
							</div>

							{/* City */}
							<div>
								<label className="text-xs font-medium">
									City *
								</label>
								<input
									name="city"
									value={billing.city}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="City"
								/>
							</div>

							{/* Phone */}
							<div>
								<label className="text-xs font-medium">
									Phone *
								</label>
								<input
									name="phone"
									value={billing.phone}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="(123) 456 - 7890"
								/>
							</div>

							{/* Email */}
							<div>
								<label className="text-xs font-medium">
									Email *
								</label>
								<input
									type="email"
									name="email"
									value={billing.email}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									placeholder="example@youremail.com"
								/>
							</div>

							{/* Order Notes */}
							<div>
								<label className="text-xs font-medium">
									Order notes
								</label>
								<textarea
									name="notes"
									value={billing.notes}
									onChange={handleBillingChange}
									className="mt-1 w-full border px-3 py-2 text-sm"
									rows={4}
									placeholder="Type your message here..."
								/>
							</div>
						</div>

						{/* Bottom navigation buttons (stack on mobile) */}
						<div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
							<Link href="/cart">
								<button className="flex items-center gap-2 text-xs uppercase tracking-[1.4px] text-gray-700">
									<svg
										viewBox="0 0 24 24"
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M15 18l-6-6 6-6" />
									</svg>
									<span>Return to cart</span>
								</button>
							</Link>
							<Link href="/shipping">
								<button
									className="w-full md:w-auto px-6 py-3 text-xs uppercase tracking-[1.4px] text-white hover:opacity-90 flex items-center justify-center"
									style={{ backgroundColor: "#3b3840" }}
								>
									<span>Continue to shipping</span>
									<svg
										viewBox="0 0 24 24"
										className="ml-2 h-4 w-4"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M9 6l6 6-6 6" />
									</svg>
								</button>
							</Link>
						</div>
					</div>

					{/* Right: Product Summary and Payment */}
					<div className="flex flex-col gap-6">
						{/* Product Summary */}
						<div>
							<div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200 md:border-[#3b3840]">
								<h2 className="text-sm font-maisonNeue font-demi">
									Product
								</h2>
								<span className="text-sm font-maisonNeue font-demi">
									Subtotal
								</span>
							</div>

							<div className="space-y-2">
								{cartItems.map((item) => (
									<div
										key={item.itemKey}
										className="flex items-start justify-between text-sm"
									>
										<span className="text-gray-800 leading-5">
											{item.name}
											{item.size || item.color ? (
												<span className="text-gray-500">
													{" "}
													{item.size && item.size}
													{item.size &&
														item.color &&
														" | "}
													{item.color && item.color}
												</span>
											) : null}
										</span>
										<span className="text-gray-800">
											{currency(item.price)}
										</span>
									</div>
								))}
							</div>

							<div className="mt-4 space-y-1">
								<div className="flex justify-between py-1">
									<span className="text-sm">Subtotal</span>
									<span className="text-sm">
										{currency(subtotal)}
									</span>
								</div>
								<div className="flex justify-between py-1">
									<span className="text-sm">Shipping</span>
									<span className="text-sm">
										{currency(shipping)}
									</span>
								</div>
								<div className="flex justify-between py-2 mt-1 border-t border-gray-200 md:border-[#3b3840]">
									<span className="text-base md:text-sm font-semibold">
										Total
									</span>
									<span className="text-base md:text-sm font-semibold">
										{currency(total)}
									</span>
								</div>
							</div>
						</div>

						{/* Payment Card */}
						<div className="bg-[#3b3840] text-white p-6">
							<h2 className="text-sm uppercase tracking-wide mb-3">
								Payment
							</h2>

							<div className="space-y-4">
								{/* Method selection */}
								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="payment"
										checked={paymentMethod === "card"}
										onChange={() =>
											setPaymentMethod("card")
										}
									/>
									<span className="text-sm">Credit card</span>
									<span className="ml-auto flex items-center gap-2">
										<img
											src="/landing/icons/visamaster.svg"
											alt="Visa & Mastercard"
											className="h-4 w-auto"
										/>
									</span>
								</label>

								{paymentMethod === "card" && (
									<div className="space-y-3">
										<input
											placeholder="Card number"
											className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-white/70"
										/>
										<input
											placeholder="Name on card"
											className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-white/70"
										/>
										<div className="grid grid-cols-2 gap-3">
											<input
												placeholder="Expiration date (MM/YY)"
												className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-white/70"
											/>
											<input
												placeholder="Security code"
												className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-white/70"
											/>
										</div>
									</div>
								)}

								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="payment"
										checked={paymentMethod === "paypal"}
										onChange={() =>
											setPaymentMethod("paypal")
										}
									/>

									<img
										src="/landing/icons/paypal.svg"
										alt="PayPal"
										className="h-4 w-auto"
									/>
								</label>

								<button
									onClick={handlePlaceOrder}
									className="mt-4 w-full bg-black text-white py-3 text-xs uppercase tracking-wide"
								>
									Place order
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
