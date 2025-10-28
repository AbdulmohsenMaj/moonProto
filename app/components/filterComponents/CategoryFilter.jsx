"use client";

import { useState } from "react";

const CategoryFilter = ({
	title = "Category",
	mainCategories = [],
	additionalCategories = [],
	seeMoreText = "See more categories",
	itemCount = null,
	onCategoryToggle = () => {},
	selectedCategories = [],
}) => {
	const handleCategoryChange = (category) => {
		onCategoryToggle(category);
	};
	return (
		<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-xl font-medium flex justify-between items-center">
				<p className="text-lg font-bold">{title}</p>
			</div>
			<div className="collapse-content text-sm text-left">
				<div className="flex flex-col gap-3">
					{/* Main Categories */}
					{mainCategories.map((category, index) => (
						<label
							key={`main-${index}`}
							className="flex items-start gap-3 cursor-pointer min-h-[32px]"
						>
							<input
								type="checkbox"
								checked={selectedCategories.includes(category)}
								onChange={() => handleCategoryChange(category)}
								className="w-8 h-8 rounded border-[0.5px] border-black bg-white opacity-100 appearance-none checked:bg-black checked:border-black relative checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer flex-shrink-0"
							/>
							<span className="text-sm leading-tight flex-1 break-words py-1">
								{category}
							</span>
						</label>
					))}

					{/* See More Collapse - only show if there are additional categories */}
					{additionalCategories.length > 0 && (
						<div className="collapse ">
							<input type="checkbox" className="peer" />
							<div className="collapse-title text-sm font-medium p-0 min-h-0">
								<span className="cursor-pointer font-maisonNeue font-book text-xs leading-4 tracking-[0.2px] text-[#4C4C4B]">
									{seeMoreText}
								</span>
							</div>
							<div className="collapse-content p-0 pt-3">
								<div className="flex flex-col gap-3">
									{additionalCategories.map(
										(category, index) => (
											<label
												key={`additional-${index}`}
												className="flex items-start gap-3 cursor-pointer min-h-[32px]"
											>
												<input
													type="checkbox"
													checked={selectedCategories.includes(
														category
													)}
													onChange={() =>
														handleCategoryChange(
															category
														)
													}
													className="w-8 h-8 rounded border-[0.5px] border-black bg-white opacity-100 appearance-none checked:bg-black checked:border-black relative checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer flex-shrink-0"
												/>
												<span className="text-sm leading-tight flex-1 break-words py-1">
													{category}
												</span>
											</label>
										)
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryFilter;
