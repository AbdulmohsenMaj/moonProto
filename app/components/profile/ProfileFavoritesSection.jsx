"use client";

import Link from "next/link";

export default function ProfileFavoritesSection({
	favorites,
	loading,
	onRemoveFavorite,
}) {
	return (
		<div className="space-y-4">
			<div className="text-center">
				<h2 className="text-xl font-bold">Favorites</h2>
				<p className="text-gray-600 mt-2">Items you’ve saved</p>
			</div>
			{loading ? (
				<div className="border rounded-lg p-4 text-gray-600">
					Loading favorites…
				</div>
			) : favorites.length === 0 ? (
				<div className="border rounded-lg p-4 text-gray-600">
					No favorites yet. Browse the{" "}
					<Link
						href="/shop"
						className="text-black font-medium hover:underline"
					>
						shop
					</Link>{" "}
					and add some.
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{favorites.map((fav, idx) => {
						const f =
							typeof fav === "string" ? { productId: fav } : fav;
						const pid = f.productId;
						return (
							<div
								key={pid || idx}
								className="border rounded-lg p-4 flex items-center justify-between"
							>
								<div className="flex items-center gap-3">
									{f.image ? (
										// eslint-disable-next-line @next/next/no-img-element
										<img
											src={f.image}
											alt={f.name || `Product ${pid}`}
											className="h-12 w-12 object-cover rounded"
										/>
									) : (
										<div className="h-12 w-12 bg-gray-100 rounded" />
									)}
									<div>
										<div className="font-medium">
											{f.name ||
												(pid
													? `Product #${pid}`
													: "Saved Item")}
										</div>
										<div className="text-sm text-gray-600">
											{typeof f.price === "number"
												? `$${f.price}`
												: "Saved to favorites"}
											{f.addedAt && (
												<span className="ml-2">
													·{" "}
													{new Date(
														f.addedAt
													).toLocaleDateString()}
												</span>
											)}
										</div>
									</div>
								</div>
								<div className="flex items-center gap-2">
									{pid && (
										<Link
											href={`/product/${pid}`}
											className="text-black text-sm hover:underline"
										>
											View
										</Link>
									)}
									{pid && (
										<button
											onClick={() =>
												onRemoveFavorite(pid)
											}
											className="text-sm text-red-600 hover:underline"
										>
											Remove
										</button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}