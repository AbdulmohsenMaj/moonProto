import React, { useState } from "react";

const Carousel = ({
	items = [],
	itemsPerPage = 5,
	title = "",
	subtitle = "",
	showHeader = true,
	showDots = true,
	showArrows = true,
	arrowPosition = "outside", // "outside" or "inside"
	gridCols = {
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	renderItem,
	className = "",
	containerClassName = "",
	itemClassName = "",
}) => {
	const [currentPage, setCurrentPage] = useState(0);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	// Tailwind translate classes for page offsets (0–9 pages)
	const translateClasses = [
		"translate-x-0",
		"-translate-x-full",
		"-translate-x-[200%]",
		"-translate-x-[300%]",
		"-translate-x-[400%]",
		"-translate-x-[500%]",
		"-translate-x-[600%]",
		"-translate-x-[700%]",
		"-translate-x-[800%]",
		"-translate-x-[900%]",
	];

	// Group items into pages
	const pages = [];
	for (let i = 0; i < items.length; i += itemsPerPage) {
		pages.push(items.slice(i, i + itemsPerPage));
	}

	const goToPage = (pageIndex, e) => {
		e?.preventDefault();
		setCurrentPage(pageIndex);
	};

	const nextPage = (e) => {
		e?.preventDefault();
		const newPage = Math.min(currentPage + 1, totalPages - 1);
		goToPage(newPage);
	};

	const prevPage = (e) => {
		e?.preventDefault();
		const newPage = Math.max(currentPage - 1, 0);
		goToPage(newPage);
	};

	// Default item renderer if none provided
	const defaultRenderItem = (item, index) => (
		<div key={index} className={`group cursor-pointer ${itemClassName}`}>
			<div className="aspect-[4/5] bg-gray-50 overflow-hidden mb-4 relative">
				<img
					src={item.image || item.src}
					alt={item.name || item.title || `Item ${index + 1}`}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			<div className="space-y-1">
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
						<p className="font-['Maison_Neue'] text-[12px] leading-[16px] tracking-[0.2px] font-bold text-gray-900 flex-shrink-0 text-right">
							{item.price}
						</p>
					)}
				</div>
			</div>
		</div>
	);

	const itemRenderer = renderItem || defaultRenderItem;

	// Arrow component
	const ArrowButton = ({
		direction,
		onClick,
		disabled,
		className: arrowClassName = "",
	}) => (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-full ${arrowClassName}`}
			aria-label={`${direction === "left" ? "Previous" : "Next"} page`}
			type="button"
		>
			<svg
				className="w-5 h-5 text-gray-700"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
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
		<div className={`w-full ${className}`}>
			{/* Header */}
			{showHeader && (title || subtitle) && (
				<div className="text-center mb-8">
					{title && (
						<h2 className="text-3xl font-light text-gray-900 mb-2">
							{title}
						</h2>
					)}
					{subtitle && (
						<p className="text-gray-600 text-lg">{subtitle}</p>
					)}
				</div>
			)}

			{/* Carousel Container */}
			<div className={`relative flex items-center ${containerClassName}`}>
				{/* Left Arrow - Outside */}
				{showArrows && arrowPosition === "outside" && (
					<ArrowButton
						direction="left"
						onClick={prevPage}
						disabled={currentPage === 0}
						className="absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 z-10"
					/>
				)}

				{/* Carousel Content */}
				<div className="w-full overflow-hidden relative">
					{/* Left Arrow - Inside */}
					{showArrows && arrowPosition === "inside" && (
						<ArrowButton
							direction="left"
							onClick={prevPage}
							disabled={currentPage === 0}
							className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
						/>
					)}

					{/* Pages */}
					<div
						className={`flex transition-transform duration-300 ease-in-out ${
							translateClasses[currentPage] || ""
						}`}
					>
						{pages.map((page, pageIndex) => (
							<div
								key={pageIndex}
								id={`carousel-page${pageIndex}`}
								className="w-full flex-shrink-0"
							>
								<div
									className={`grid grid-cols-1 sm:grid-cols-${gridCols.sm} md:grid-cols-${gridCols.md} lg:grid-cols-${gridCols.lg} xl:grid-cols-${gridCols.xl} gap-6 w-full`}
								>
									{page.map((item, itemIndex) => {
										const element = itemRenderer(
											item,
											itemIndex
										);
										return React.cloneElement(element, {
											key: item?.id ?? itemIndex,
										});
									})}
								</div>
							</div>
						))}
					</div>

					{/* Right Arrow - Inside */}
					{showArrows && arrowPosition === "inside" && (
						<ArrowButton
							direction="right"
							onClick={nextPage}
							disabled={currentPage === totalPages - 1}
							className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
						/>
					)}
				</div>

				{/* Right Arrow - Outside */}
				{showArrows && arrowPosition === "outside" && (
					<ArrowButton
						direction="right"
						onClick={nextPage}
						disabled={currentPage === totalPages - 1}
						className="absolute -right-4 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 z-10"
					/>
				)}
			</div>

			{/* Dot Navigation */}
			{showDots && totalPages > 1 && (
				<div className="flex justify-center gap-2 mt-8">
					{pages.map((_, pageIndex) => (
						<button
							key={pageIndex}
							onClick={(e) => goToPage(pageIndex, e)}
							className={`w-2 h-2 rounded-full transition-all duration-200 ${
								currentPage === pageIndex
									? "bg-gray-900"
									: "bg-gray-300 hover:bg-gray-400"
							}`}
							aria-label={`Go to page ${pageIndex + 1}`}
							type="button"
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;
