"use client";

const PriceRangeFilter = ({
	title = "Price Range",
	priceRanges = [
		{ label: "$0 - $10", min: 0, max: 10 },
		{ label: "$10 - $50", min: 10, max: 50 },
		{ label: "$50 - $100", min: 50, max: 100 },
		{ label: "$100 - $200", min: 100, max: 200 },
		{ label: "> $200", min: 200, max: Infinity }
	],
	onPriceRangeToggle = () => {},
	selectedPriceRanges = [],
}) => {
	const handlePriceRangeChange = (priceRange) => {
		onPriceRangeToggle(priceRange);
	};

	return (
		<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-xl font-medium flex justify-between items-center">
				<p className="text-lg font-bold">{title}</p>
			</div>
			<div className="collapse-content text-sm text-left">
				<div className="flex flex-col gap-3">
					{priceRanges.map((priceRange, index) => (
						<label
							key={`price-${index}`}
							className="flex items-start gap-3 cursor-pointer min-h-[32px]"
						>
							<input
								type="checkbox"
								checked={selectedPriceRanges.some(
									selected => selected.min === priceRange.min && selected.max === priceRange.max
								)}
								onChange={() => handlePriceRangeChange(priceRange)}
								className="w-8 h-8 rounded border-[0.5px] border-black bg-white opacity-100 appearance-none checked:bg-black checked:border-black relative checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer flex-shrink-0"
							/>
							<span className="text-sm leading-tight flex-1 break-words py-1">
								{priceRange.label}
							</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default PriceRangeFilter;