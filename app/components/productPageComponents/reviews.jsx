"use client";
import { useState } from "react";
import {
	getReviewsByProductId,
	getAverageRating,
	getRatingDistribution,
} from "../../data/reviews";
import RatingSummary from "./RatingSummary";
import ReviewsList from "./ReviewsList";

const ReviewsComponent = ({ productId, listOnly = false }) => {
	const reviews = getReviewsByProductId(productId);
	const averageRating = getAverageRating(productId);
	const ratingDistribution = getRatingDistribution(productId);
	
	// State for dropdown selection
	const [selectedSort, setSelectedSort] = useState("highest-to-lowest");
	
	// Map of option values to display text
	const sortOptions = {
		"highest-to-lowest": "Highest to Lowest Rating",
		"lowest-to-highest": "Lowest to Highest Rating",
		"newest": "Newest First",
		"oldest": "Oldest First",
		"most-helpful": "Most Helpful"
	};

    // Helper function to render DaisyUI rating stars with half-star support
    // groupId ensures deterministic radio name per rating block to avoid hydration mismatches
    const renderStars = (rating, size = "rating-sm", readOnly = true, groupId = null) => {
        const uniqueId = `rating-${groupId ?? `product-${productId}`}`;

		if (readOnly) {
			// Read-only rating display with half stars using DaisyUI
			return (
				<div className={`rating rating-half ${size}`}>
                    <input
                        type="radio"
                        name={`${uniqueId}`}
                        className="rating-hidden"
                    />
					{Array.from({ length: 10 }, (_, index) => {
						const starValue = (index + 1) / 2;
						const isHalf = index % 2 === 0;
						const isFilled = starValue <= rating;

						return (
                            <input
                                key={index}
                                type="radio"
                                name={`${uniqueId}`}
                                className={`mask ${
                                    isHalf
                                        ? "mask-star-2 mask-half-1"
                                        : "mask-star-2 mask-half-2"
                                } ${isFilled ? "bg-black" : "bg-gray-300"}`}
                                aria-label={`${starValue} star`}
                                checked={isFilled}
                                readOnly
                            />
						);
					})}
				</div>
			);
		} else {
			// Interactive rating with half stars
			return (
				<div className={`rating rating-half ${size}`}>
                    <input
                        type="radio"
                        name={`${uniqueId}`}
                        className="rating-hidden"
                    />
					{Array.from({ length: 10 }, (_, index) => {
						const starValue = (index + 1) / 2;
						const isHalf = index % 2 === 0;

						return (
                            <input
                                key={index}
                                type="radio"
                                name={`${uniqueId}`}
                                className={`mask ${
                                    isHalf
                                        ? "mask-star-2 mask-half-1"
                                        : "mask-star-2 mask-half-2"
                                } bg-black`}
                                aria-label={`${starValue} star`}
                                defaultChecked={starValue === rating}
                            />
						);
					})}
				</div>
			);
		}
	};

	// Helper function to format date
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

    // List-only mode: render just the list (or empty message) with tight spacing
    if (listOnly) {
        if (reviews.length === 0) {
            return (
                <div className="px-0">
                    <p className="text-gray-600 text-sm">
                        No reviews yet. Be the first to review this product!
                    </p>
                </div>
            );
        }
        return (
            <div className="px-0">
                <ReviewsList
                    reviews={reviews}
                    renderStars={renderStars}
                    formatDate={formatDate}
                    compact={true}
                />
            </div>
        );
    }

    // Default rendering with header, summary and controls
    if (reviews.length === 0) {
        return (
            <div className="mt-16 px-4">
                <h2 className="font-['Maison_Neue'] font-semibold text-2xl leading-7 text-black mb-8">
                    Reviews
                </h2>
                <p className="text-gray-600">
                    No reviews yet. Be the first to review this product!
                </p>
            </div>
        );
    }

	return (
		<div className="mt-16 px-4">
			<h2 className="font-['Maison_Neue'] font-semibold text-2xl leading-7 text-black mb-8">
				Reviews
			</h2>

			{/* Rating Summary and Fit Information */}
			<RatingSummary
				averageRating={averageRating}
				reviews={reviews}
				ratingDistribution={ratingDistribution}
				renderStars={renderStars}
			/>

			{/* Filter and Sort Controls */}
			<div className="flex justify-between items-center mb-6 mt-8">
				{/* Filter Button */}
                <div 
                    className="bg-white hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                    style={{
                        width: "240px",
                        height: "82px",
                        gap: "10px",
                        opacity: 1,
                        padding: "16px",
                        borderWidth: "1px",
                        border: "1px solid #DDDBDC",
                        borderRadius: "8px",
                    }}
                >
                    <span className="font-['Maison_Neue'] font-semibold text-[24px] leading-[33.24px] tracking-[0px] text-black">
                        Filter
                    </span>
                    {/* Inline funnel icon to avoid missing external asset */}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                        aria-hidden="true"
                    >
                        <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z"/>
                    </svg>
				</div>

				{/* Sort By Dropdown */}
				<div className="relative">
					<div
					className="bg-white hover:bg-gray-50 cursor-pointer focus-within:ring-2 focus-within:ring-black focus-within:border-black"
					style={{
						width: "240px",
						height: "82px",
						gap: "10px",
						opacity: 1,
						padding: "16px",
						borderWidth: "1px",
						border: "1px solid #DDDBDC",
						borderRadius: "8px",
					}}
				>
					<div className="flex flex-col h-full justify-center pointer-events-none">
						<label className="font-['Maison_Neue'] font-semibold text-[24px] leading-[33.24px] tracking-[0px] text-black text-left">
							Sort by:
						</label>
						<div className="font-['Maison_Neue'] font-normal text-[12px] leading-[16px] tracking-[0.2px] text-gray-900">
							{sortOptions[selectedSort]}
						</div>
					</div>
					<select
						className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none"
						value={selectedSort}
						onChange={(e) => setSelectedSort(e.target.value)}
					>
						<option value="highest-to-lowest">
							Highest to Lowest Rating
						</option>
						<option value="lowest-to-highest">
							Lowest to Highest Rating
						</option>
						<option value="newest">Newest First</option>
						<option value="oldest">Oldest First</option>
						<option value="most-helpful">
							Most Helpful
						</option>
					</select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        {/* Inline chevron-down icon to avoid missing external asset */}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-black"
                            aria-hidden="true"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
				</div>
			</div>
		</div>

		{/* Individual Reviews */}
			<ReviewsList
				reviews={reviews}
				renderStars={renderStars}
				formatDate={formatDate}
			/>
		</div>
        
	);
};

export default ReviewsComponent;
