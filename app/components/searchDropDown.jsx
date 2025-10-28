"use client";

import { useState } from "react";
import HeroModular from "./HeroModular";

const SearchDropDown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const categoryImages = [
		{
			image: "/test.png",
			title: "Women's Sweaters",
			description: "Cozy and stylish sweaters for every season",
		},
		{
			image: "/hero.png",
			title: "Women's Bottom",
			description: "Comfortable pants and skirts",
		},
		{
			image: "/section4.png",
			title: "Women's Boots",
			description: "Trendy footwear for all occasions",
		},
		{
			image: "/test.png",
			title: "Men's Best Sellers",
			description: "Top-rated men's fashion items",
		},
	];

	const openSearch = () => {
		setIsOpen(true);
	};

	const closeSearch = () => {
		setIsOpen(false);
	};

	return (
		<>
			{/* Search Icon Trigger */}
			<div
				className="cursor-pointer p-2 hover:bg-base-200 rounded-lg transition-colors"
				onClick={openSearch}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						openSearch();
					}
				}}
				aria-label="Open search"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>

			{/* Search Overlay - Positioned under bottom navbar */}
			{isOpen && (
				<div
					className="fixed left-0 right-0 bg-base-100 z-50 flex flex-col"
					style={{ top: "142px", bottom: "0" }}
				>
					{/* Header */}
					<div className="w-full px-6 py-4 border-b border-gray-200 bg-base-100">
						{/* Search Input with Cancel Button */}
						<div className="flex justify-center">
							<div className="flex gap-3 items-center w-2/5">
								<input
									type="text"
									placeholder="Search for products..."
									className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
									autoFocus
								/>
								<button
									className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeSearch}
									aria-label="Cancel search"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>

					{/* Image Grid Section */}
					<div>
						<p className="text-xs   justify-self-start pl-12 pb-5 pt-5">
							Popular Categories
						</p>
						<div className="grid grid-cols-4 gap-4 max-h-[371px] pr-10 pl-10">
							{categoryImages.map((item, index) => (
								<div
									key={index}
									className="group cursor-pointer"
								>
									<div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2 ">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ss"
										/>
									</div>
									<div className="text-left underline">
										<p className="text-sm font-medium">
											{item.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SearchDropDown;
