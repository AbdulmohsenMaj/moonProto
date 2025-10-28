const ReviewsList = ({ reviews, renderStars, formatDate }) => {
	return (
		<div className="space-y-6">
			{reviews.map((review, index) => (
				<div
					key={review.id}
					className="grid gap-4 border-b border-gray-200 pb-6"
					style={{ gridTemplateColumns: "300px 1fr" }}
				>
					{/*user details section left grid*/}
					<div className="w-[300px]">
						{/* User name */}
						<h3 className="font-['Maison_Neue'] font-medium text-base text-black mb-2 text-left">
							{review.userName}
						</h3>

						{/* Verification badge */}
						{review.verified && (
							<div className="flex items-center mb-4">
								<span className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2">
									✓
								</span>
								<span className="text-sm text-black">
									Verified
								</span>
							</div>
						)}

						{/* User details */}
						<div className="space-y-1 text-sm text-black text-left">
							<div>
								<span className="font-medium">Height:</span>{" "}
								{review.height || "Not specified"}
							</div>
							<div>
								<span className="font-medium">
									Weight (lbs):
								</span>{" "}
								{review.weight || "Not specified"}
							</div>
							<div>
								<span className="font-medium">Body Type:</span>{" "}
								{review.bodyType || "Not specified"}
							</div>
							<div className="mt-3">
								<span className="font-medium">
									Size Purchased:
								</span>{" "}
								{review.size}
							</div>
							<div>
								<span className="font-medium">Usual Size:</span>{" "}
								{review.usualSize || review.size}
							</div>
						</div>
					</div>

					{/*review stars title and text section right grid*/}
					<div>
						{/* Rating and date */}
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<div className="flex mr-2">
									{renderStars(review.rating)}
								</div>
							</div>
							<span className="text-sm text-gray-500">
								{formatDate(review.date)}
							</span>
						</div>

						{/* Review title */}
						<h4 className="font-['Maison_Neue'] font-medium text-base mb-3 text-black text-left">
							{review.title}
						</h4>

						{/* Review comment */}
						<p className="text-gray-700 leading-relaxed text-sm text-left">
							{review.comment}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ReviewsList;
