const RatingSummary = ({ 
	averageRating, 
	reviews, 
	ratingDistribution, 
	renderStars 
}) => {
	return (
		<div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gray-50 rounded-lg p-6">
			{/* Overall Rating */}
			<div className="text-center">
				<div className="text-4xl font-bold mb-2">
					{averageRating}
				</div>
				<div className="text-lg font-medium mb-2">
					Overall Rating
				</div>
				<div className="flex justify-center mb-2">
					{renderStars(averageRating, "rating-lg")}
				</div>
				<div className="text-sm text-gray-600">
					Based on {reviews.length} reviews
				</div>
			</div>

			{/* Rating Distribution */}
			<div className="space-y-3">
				{[5, 4, 3, 2, 1].map((rating) => (
					<div key={rating} className="flex items-center">
						<span className="w-6 text-sm font-medium">
							{rating}
						</span>
						<div className="mask mask-star-2 bg-black w-4 h-4 mr-2"></div>
						<div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
							<div
								className="bg-black h-2 rounded-full transition-all duration-300"
								style={{
									width: `${
										reviews.length > 0
											? (ratingDistribution[rating] / reviews.length) * 100
											: 0
									}%`,
								}}
							></div>
						</div>
						<span className="w-6 text-sm text-gray-600 text-right">
							{ratingDistribution[rating]}
						</span>
					</div>
				))}
			</div>

			{/* Fit Information */}
			<div className="text-center">
				<div className="text-lg font-medium mb-4">
					Runs slightly large
				</div>
				<div className="flex items-center justify-between text-sm text-gray-600 mb-2">
					<span>Run small</span>
					<span>Run large</span>
				</div>
				<div className="relative bg-gray-200 rounded-full h-2 mb-4">
					<div className="absolute right-1/4 w-1/2 bg-black h-2 rounded-full"></div>
				</div>
				<div className="text-xs text-gray-500">
					Based on customer feedback
				</div>
			</div>
		</div>
	);
};

export default RatingSummary;