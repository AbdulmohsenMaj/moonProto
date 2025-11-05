const ReviewsList = ({ reviews, renderStars, formatDate, compact = false }) => {
    return (
        <div className={compact ? "space-y-4" : "space-y-6"}>
            {reviews.map((review, index) => (
                <div
                    key={review.id}
                    className={compact ? "grid grid-cols-1 gap-3 border-b border-gray-200 pb-4" : "grid gap-4 border-b border-gray-200 pb-6 md:grid-cols-[300px_1fr] grid-cols-1"}
                >
					{/*user details section left grid*/}
                    <div className={compact ? "w-full" : "md:w-[300px] w-full"}>
                        {/* User name */}
                        <h3 className={compact ? "font-['Maison_Neue'] font-medium text-sm text-black mb-2 text-left" : "font-['Maison_Neue'] font-medium text-base text-black mb-2 text-left"}>
                            {review.userName}
                        </h3>

						{/* Verification badge */}
						{review.verified && (
                            <div className={compact ? "flex items-center mb-2" : "flex items-center mb-4"}>
                                <span className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2">
                                    ✓
                                </span>
                                <span className={compact ? "text-xs text-black" : "text-sm text-black"}>
                                    Verified
                                </span>
                            </div>
                        )}

                        {/* User details */}
                        <div className={compact ? "space-y-1 text-xs text-black text-left" : "space-y-1 text-sm text-black text-left"}>
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
                        <div className={compact ? "flex items-center justify-between mb-2" : "flex items-center justify-between mb-3"}>
                            <div className="flex items-center">
                                <div className="flex mr-2">
                                    {renderStars(review.rating, compact ? "rating-xs" : "rating-sm", true, `review-${review.id}`)}
                                </div>
                            </div>
                            <span className={compact ? "text-xs text-gray-500" : "text-sm text-gray-500"}>
                                {formatDate(review.date)}
                            </span>
                        </div>

                        {/* Review title */}
                        <h4 className={compact ? "font-['Maison_Neue'] font-medium text-sm mb-2 text-black text-left" : "font-['Maison_Neue'] font-medium text-base mb-3 text-black text-left"}>
                            {review.title}
                        </h4>

                        {/* Review comment */}
                        <p className={compact ? "text-gray-700 leading-relaxed text-sm text-left" : "text-gray-700 leading-relaxed text-sm text-left"}>
                            {review.comment}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewsList;
