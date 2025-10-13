import React, { useState } from "react";

const MobileCarousel = ({
	items = [],
	title = "",
	subtitle = "",
	showHeader = true,
	showDots = true,
	className = "",
	containerClassName = "",
	itemClassName = "",
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalItems = items.length;

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % totalItems);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
	};

	// Default item renderer for mobile
	const renderItem = (item, index) => (
		<div key={index} className={`w-full ${itemClassName}`}>
			<div className="aspect-[4/5] bg-[#262626] overflow-hidden mb-4 relative">
				<img
					src={item.image || item.src}
					alt={item.name || item.title || `Item ${index + 1}`}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="space-y-1 px-4">
				<div className="flex justify-between items-start">
					<div className="flex-1 pr-2 text-left">
						<h3 className="font-['Maison_Neue'] text-[12px] leading-[16px] tracking-[0.2px] font-normal text-gray-900 text-left">
							{item.name || item.title}
						</h3>
						{item.description && (
							<p className="font-['Maison_Neue'] text-[12px] leading-[16px] tracking-[0.2px] font-normal text-gray-500 mt-1 text-left">
								{item.description}
							</p>
						)}
					</div>
					{item.price && (
						<p className="font-['Maison_Neue'] text-[12px] leading-[16px] tracking-[0.2px] font-normal text-gray-900 flex-shrink-0 text-right">
							{item.price}
						</p>
					)}
				</div>
			</div>
		</div>
	);

	// Arrow component
	const ArrowButton = ({ direction, onClick, disabled }) => (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 ${
				disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
			} ${direction === "left" ? "left-4" : "right-4"}`}
		>
			<svg
				className="w-5 h-5 text-gray-800"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d={
						direction === "left"
							? "M15 19l-7-7 7-7"
							: "M9 5l7 7-7 7"
					}
				/>
			</svg>
		</button>
	);

	return (
		<div className={`w-full ${containerClassName}`}>
			{/* Header */}
			{showHeader && (title || subtitle) && (
				<div className="text-center mb-8">
					{title && (
						<h2 className="text-2xl font-bold text-gray-900 mb-2">
							{title}
						</h2>
					)}
					{subtitle && (
						<p className="text-gray-600 max-w-2xl mx-auto">
							{subtitle}
						</p>
					)}
				</div>
			)}

			{/* Mobile Carousel */}
			<div className="relative">
				{/* Carousel Container */}
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-300 ease-in-out"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						{items.map((item, index) => (
							<div key={index} className="w-full flex-shrink-0">
								{renderItem(item, index)}
							</div>
						))}
					</div>
				</div>

				{/* Navigation Arrows */}
				<ArrowButton
					direction="left"
					onClick={prevSlide}
					disabled={currentIndex === 0}
				/>
				<ArrowButton
					direction="right"
					onClick={nextSlide}
					disabled={currentIndex === totalItems - 1}
				/>
			</div>

			{/* Dots Navigation */}
			{showDots && totalItems > 1 && (
				<div className="flex justify-center space-x-2 mt-6">
					{Array.from({ length: totalItems }).map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-2 h-2 rounded-full transition-all duration-200 ${
								index === currentIndex
									? "bg-gray-800 w-6"
									: "bg-gray-300 hover:bg-gray-400"
							}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default MobileCarousel;