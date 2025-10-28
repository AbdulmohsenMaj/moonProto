"use client";

import { getProductByGender } from "@/app/data/products.js";
import CategoryFilter from "@/app/components/filterComponents/CategoryFilter.jsx";
import ColorFilter from "@/app/components/filterComponents/ColorFilter.jsx";
import SizeFilter from "@/app/components/filterComponents/SizeFilter.jsx";
import ProductCard from "@/app/components/ProductCard.jsx";
import { useFilters } from "@/app/hooks/useFilters.js";
import { useProductFilter } from "@/app/hooks/useProductFilter.js";

const MenListing = () => {
	const allMenProducts = getProductByGender("male");

	// Use custom hooks for filter management
	const filters = useFilters();
	const {
		selectedCategories,
		selectedColors,
		selectedSizes,
		toggleCategory,
		toggleColor,
		toggleSize,
		clearAllFilters,
		hasActiveFilters,
	} = filters;

	// Use custom hook for product filtering
	const filteredProducts = useProductFilter(allMenProducts, filters);

	const menProductsCount = filteredProducts.length;

	// Define categories for the filter
	const mainCategories = [
		"Everyone - All Gender Collection",
		"Accessories & Gift Cards",
		"Backpacks, Weekenders & Duffle Bags",
		"Dress Shirts & Button Downs",
	];

	const additionalCategories = [
		"Hoodies & Sweatshirts",
		"Knitwear",
		"Bottoms",
		"Outerwear",
		"Basics",
	];

	return (
		<div className="w-full">
			{/* Main Content Grid */}
			<div className="w-full grid grid-cols-[270px_1fr] gap-4 items-start">
				<div className="ml-[20px] flex flex-col justify-between">
					<div className="flex flex-col gap-3  border-b-[2px] border-b-[#E0E0E0] border-thick pb-[10px]">
						<p className="text-lg font-bold">
							{menProductsCount} Men's Items
						</p>
						<CategoryFilter
							title="Category"
							mainCategories={mainCategories}
							additionalCategories={additionalCategories}
							seeMoreText="View More +"
							itemCount={menProductsCount}
							onCategoryToggle={toggleCategory}
							selectedCategories={selectedCategories}
						/>
						<ColorFilter
							title="Color"
							showViewMore={true}
							viewMoreText="View More +"
							onColorToggle={toggleColor}
							selectedColors={selectedColors}
						/>
						<SizeFilter
							title="Size"
							showWaist={true}
							showClothing={true}
							onSizeToggle={toggleSize}
							selectedSizes={selectedSizes}
						/>
					</div>
				</div>
				{/* Breadcrumb and Header Section */}
				<div className="px-4 py-6 ">
					{/* Breadcrumb */}
					<div className="text-sm text-gray-600 mb-4 text-left">
						<span>Home</span>
						<span className="mx-2">/</span>
						<span>Men</span>
					</div>

					{/* Page Header */}
					<h1 className="text-3xl font-bold text-black mb-2 text-left">
						Men's Clothing & Apparel - New Arrivals
					</h1>

					{/* Featured Label */}
					<p className="text-lg text-gray-700 text-left">Featured</p>

					<div className="grid grid-cols-4 gap-4 p-4 space-y-4">
						{filteredProducts.map((product) => (
							<ProductCard key={product.id} product={product} sourceCategory="men" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenListing;
