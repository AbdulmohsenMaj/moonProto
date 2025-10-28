"use client";

import { useState } from "react";
import { availableColors } from "@/app/data/products.js";

const ColorFilter = ({
	title = "Color",
	colors = [],
	showViewMore = true,
	viewMoreText = "View More +",
	onColorToggle = () => {},
	selectedColors = [],
}) => {
	const handleColorChange = (colorName) => {
		onColorToggle(colorName);
	};

	// Transform availableColors from products data to match expected format
	const transformedColors = availableColors.map((color) => ({
		name: color.name,
		value: color.hex,
		bgClass: "",
	}));

	//  to get color options
	const getColorOptions = () => {
		if (colors.length > 0) {
			return colors;
		} else {
			return transformedColors;
		}
	};

	//  to get border class for color selection
	const getColorBorderClass = (colorName) => {
		if (selectedColors.includes(colorName)) {
			return "border-black";
		} else {
			return "border-gray-300";
		}
	};

	// Use provided colors prop, or fall back to dynamic colors from products
	const colorOptions = getColorOptions();
	const mainColors = colorOptions.slice(0, 6);
	const additionalColors = colorOptions.slice(6);

	return (
		<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-xl font-medium">
				<p className="text-lg font-bold">{title}</p>
			</div>
			<div className="collapse-content text-sm text-left">
				<div className="flex flex-col gap-3">
					{/* Main Colors Grid */}
					<div className="grid grid-cols-3 gap-4">
						{mainColors.map((color, index) => (
							<div
								key={`main-${index}`}
								className="flex flex-col items-center gap-2 min-h-[70px]"
							>
								<label className="cursor-pointer flex flex-col items-center gap-2 w-full">
									<div className="relative flex-shrink-0">
										<input
											type="checkbox"
											checked={selectedColors.includes(
												color.name
											)}
											onChange={() =>
												handleColorChange(color.name)
											}
											className="checkbox checkbox-sm absolute opacity-0"
										/>
										<div
											className={`w-8 h-8 rounded-full border-2 ${getColorBorderClass(
												color.name
											)} hover:border-gray-400 transition-colors`}
											style={{
												backgroundColor: color.value,
											}}
										></div>
									</div>
									<span
										className="text-xs font-maisonNeue font-book text-center leading-tight line-clamp-2 w-full px-1 overflow-hidden text-ellipsis"
										title={color.name}
									>
										{color.name}
									</span>
								</label>
							</div>
						))}
					</div>

					{/* View More Section */}
					{showViewMore && additionalColors.length > 0 && (
						<div className="collapse">
							<input type="checkbox" className="peer" />
							<div className="collapse-title text-sm font-medium p-0 min-h-0">
								<span className="cursor-pointer font-maisonNeue font-book text-xs leading-4 tracking-[0.2px] text-[#4C4C4B]">
									{viewMoreText}
								</span>
							</div>
							<div className="collapse-content p-0 pt-3">
								<div className="grid grid-cols-3 gap-4">
									{additionalColors.map((color, index) => (
										<div
											key={`additional-${index}`}
											className="flex flex-col items-center gap-2 min-h-[70px]"
										>
											<label className="cursor-pointer flex flex-col items-center gap-2 w-full">
												<div className="relative flex-shrink-0">
													<input
														type="checkbox"
														checked={selectedColors.includes(
															color.name
														)}
														onChange={() =>
															handleColorChange(
																color.name
															)
														}
														className="checkbox checkbox-sm absolute opacity-0"
													/>
													<div
														className={`w-8 h-8 rounded-full border-2 ${getColorBorderClass(
															color.name
														)} hover:border-gray-400 transition-colors`}
														style={{
															backgroundColor:
																color.value,
														}}
													></div>
												</div>
												<span
													className="text-xs font-maisonNeue font-book text-center leading-tight line-clamp-2 w-full px-1 overflow-hidden text-ellipsis"
													title={color.name}
												>
													{color.name}
												</span>
											</label>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ColorFilter;
