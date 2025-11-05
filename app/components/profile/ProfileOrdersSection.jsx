"use client";

import Link from "next/link";

export default function ProfileOrdersSection({ orders, loading }) {
	return (
		<div className="space-y-4">
			<div className="text-center">
				<h2 className="text-xl font-bold">Your Orders</h2>
				<p className="text-gray-600 mt-2">
					Track and review past purchases
				</p>
			</div>
			{loading ? (
				<div className="border rounded-lg p-4 text-gray-600">
					Loading orders…
				</div>
			) : orders.length === 0 ? (
				<div className="border rounded-lg p-4 text-gray-600">
					You have no orders yet.{" "}
					<Link
						href="/shop"
						className="text-black font-medium hover:underline"
					>
						Start shopping
					</Link>
					.
				</div>
			) : (
				<div className="space-y-4">
					{orders.map((order) => (
						<div
							key={order._id || order.id}
							className="border rounded-lg p-4"
						>
							<div className="flex items-center justify-between">
								<div className="text-sm text-gray-600">
									Status:{" "}
									<span className="font-medium text-black">
										{order.status}
									</span>
								</div>
								<div className="text-sm text-gray-600">
									Total:{" "}
									<span className="font-medium text-black">
										$
										{order.total?.toFixed
											? order.total.toFixed(2)
											: order.total}
									</span>
								</div>
							</div>
							<div className="mt-3 divide-y">
								{order.items?.map((it, idx) => (
									<div
										key={idx}
										className="py-2 flex items-center gap-3"
									>
										{it.image ? (
											// eslint-disable-next-line @next/next/no-img-element
											<img
												src={it.image}
												alt={it.name}
												className="h-12 w-12 object-cover rounded"
											/>
										) : (
											<div className="h-12 w-12 bg-gray-100 rounded" />
										)}
										<div className="flex-1">
											<div className="font-medium">
												{it.name}
											</div>
											<div className="text-sm text-gray-600">
												Qty: {it.quantity} · ${it.price}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}