"use client";

import { useState, useEffect } from "react";
import CategoryFilter from "@/app/components/filterComponents/CategoryFilter.jsx";
import ColorFilter from "@/app/components/filterComponents/ColorFilter.jsx";
import SizeFilter from "@/app/components/filterComponents/SizeFilter.jsx";
import PriceRangeFilter from "@/app/components/filterComponents/PriceRangeFilter.jsx";
import ProductGrid from "@/app/components/ProductGrid.jsx";
import { useFilters } from "@/app/hooks/useFilters.js";
import { useProductFilter } from "@/app/hooks/useProductFilter.js";

const ShopPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        async function load() {
            try {
                setLoading(true);
                const res = await fetch('/api/products', { cache: 'no-store' });
                if (!res.ok) throw new Error('Failed to load products');
                const data = await res.json();
                const items = Array.isArray(data.products) ? data.products : [];
                const normalized = items.map(p => ({ ...p, id: p.productId || p._id }));
                if (!cancelled) setAllProducts(normalized);
            } catch (err) {
                if (!cancelled) setError(err.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        load();
        return () => { cancelled = true; };
    }, []);

	// Use custom hooks for filter management
	const filters = useFilters();
	const {
		selectedCategories,
		selectedColors,
		selectedSizes,
		selectedPriceRanges,
		toggleCategory,
		toggleColor,
		toggleSize,
		togglePriceRange,
		clearAllFilters,
		hasActiveFilters,
	} = filters;

	// Use custom hook for product filtering
    const filteredProducts = useProductFilter(allProducts, filters);

	const menProductsCount = filteredProducts.length;

	// Pagination: 8 items per page
	const ITEMS_PER_PAGE = 8;
	const [currentPage, setCurrentPage] = useState(1);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [sortOption, setSortOption] = useState("name"); // name | price_asc | price_desc
	const sortOptionLabel =
		sortOption === "name"
			? "Name"
			: sortOption === "price_asc"
			? "Price: Low-High"
			: "Price: High-Low";

	// Sort filtered products before paginating
	const sortedProducts = [...filteredProducts].sort((a, b) => {
		const priceA = a.salePrice || a.price || 0;
		const priceB = b.salePrice || b.price || 0;
		switch (sortOption) {
			case "price_asc":
				return priceA - priceB;
			case "price_desc":
				return priceB - priceA;
			case "name":
			default:
				return (a.name || "").localeCompare(b.name || "");
		}
	});
	const totalPages = Math.ceil(menProductsCount / ITEMS_PER_PAGE) || 1;
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

	// Mobile-only: scroll to top when changing pages
	const goToPage = (page) => {
		setCurrentPage(page);
		if (typeof window !== "undefined" && window.innerWidth < 768) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	// Reset to first page when filters change
	useEffect(() => {
		setCurrentPage(1);
	}, [
		selectedCategories,
		selectedColors,
		selectedSizes,
		selectedPriceRanges,
	]);

	// Define categories based on the image
	const mainCategories = ["Dinnerware", "Ceramic", "Furniture"];

	const additionalCategories = ["Decor Art", "Gifts sets"];

	return (
		<div className="w-full">
			{/* Main Content Grid */}
			<div className="w-full grid grid-cols-1 md:grid-cols-[270px_1fr] gap-4 items-start">
				<div className="hidden md:flex ml-[20px] flex-col justify-between">
					<div className="flex flex-col gap-3  border-b-[2px] border-b-[#E0E0E0] border-thick pb-[10px]">
						<p className="text-lg font-bold">
							Showing {menProductsCount} items
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
						<PriceRangeFilter
							title="Price Range"
							onPriceRangeToggle={togglePriceRange}
							selectedPriceRanges={selectedPriceRanges}
						/>
						<ColorFilter
							title="Color"
							showViewMore={true}
							viewMoreText="View More +"
							onColorToggle={toggleColor}
							selectedColors={selectedColors}
						/>
					</div>
				</div>
				{/* Breadcrumb and Header Section */}
				<div className="px-4 py-6 ">
					{/* Mobile Breadcrumb */}
					<div className="block md:hidden text-sm text-gray-600 mb-2 text-left">
						<span>Home</span>
						<span className="mx-2">/</span>
						<span>Shop</span>
					</div>

					{/* Mobile Filters + Sort Header */}
					<div className="md:hidden mb-4">
						<div className="flex items-center justify-between">
							<button
								className="btn btn-ghost gap-2"
								onClick={() => setMobileFiltersOpen((v) => !v)}
								aria-label="Toggle filters"
							>
								{/* Three-line filter icon (decreasing lengths) */}
								<svg
									className="w-6 h-6 text-gray-700"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="3"
										y1="6"
										x2="21"
										y2="6"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<line
										x1="3"
										y1="12"
										x2="17"
										y2="12"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<line
										x1="3"
										y1="18"
										x2="13"
										y2="18"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
								<span className="font-semibold tracking-wide text-gray-800">
									FILTER
								</span>
							</button>
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="btn btn-ghost">
									<span className="mr-2 text-sm text-gray-600">
										Sort by:
									</span>
									<span className="font-medium">
										{sortOptionLabel}
									</span>
									<span className="ml-1">▾</span>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
								>
									<li>
										<button
											onClick={() =>
												setSortOption("name")
											}
										>
											Name
										</button>
									</li>
									<li>
										<button
											onClick={() =>
												setSortOption("price_asc")
											}
										>
											Price: Low-High
										</button>
									</li>
									<li>
										<button
											onClick={() =>
												setSortOption("price_desc")
											}
										>
											Price: High-Low
										</button>
									</li>
								</ul>
							</div>
						</div>
						{mobileFiltersOpen && (
							<div className="mt-2 p-4 border rounded-lg bg-white shadow-sm space-y-4">
								<CategoryFilter
									title="Category"
									mainCategories={mainCategories}
									additionalCategories={additionalCategories}
									seeMoreText="View More +"
									itemCount={menProductsCount}
									onCategoryToggle={toggleCategory}
									selectedCategories={selectedCategories}
								/>
								<PriceRangeFilter
									title="Price Range"
									onPriceRangeToggle={togglePriceRange}
									selectedPriceRanges={selectedPriceRanges}
								/>
								<ColorFilter
									title="Color"
									showViewMore={true}
									viewMoreText="View More +"
									onColorToggle={toggleColor}
									selectedColors={selectedColors}
								/>
							</div>
						)}
					</div>

					{/* Breadcrumb (Desktop only) */}
					<div className="hidden md:block text-sm text-gray-600 mb-4 text-left">
						<span>Home</span>
						<span className="mx-2">/</span>
						<span>Shop</span>
					</div>

					{/* Page Header */}
					<h1 className="text-3xl font-bold text-black mb-2 text-left">
						Shop - New Arrivals
					</h1>

					{/* Featured Label */}
					<p className="text-lg text-gray-700 text-left">Featured</p>

                    {error && <div className="text-sm text-red-600">{error}</div>}
                    <ProductGrid
                        products={paginatedProducts}
                        title=""
                        showTitle={false}
                        className="mt-6"
                        maxProducts={8}
                    />

					{/* Pagination Controls */}
					{/* Mobile style (like screenshot) */}
					<div className="mt-6 md:hidden flex justify-center items-center gap-3">
						{/* Prev */}
						<button
							className={`px-2 text-gray-700 ${
								currentPage === 1
									? "opacity-40 cursor-not-allowed"
									: ""
							}`}
							aria-label="Previous page"
							onClick={() =>
								currentPage > 1 && goToPage(currentPage - 1)
							}
						>
							&lt;
						</button>

						{(() => {
							const windowSize = 4;
							let start = Math.max(1, currentPage - 1);
							let end = Math.min(
								totalPages,
								start + windowSize - 1
							);
							if (end - start < windowSize - 1) {
								start = Math.max(1, end - (windowSize - 1));
							}
							const pages = Array.from(
								{ length: end - start + 1 },
								(_, i) => start + i
							);
							const currentIndex = pages.indexOf(currentPage);
							return pages.map((page, idx) => {
								const isCurrent = page === currentPage;
								const isNext = idx === currentIndex + 1;
								if (isCurrent) {
									return (
										<button
											key={page}
											className="w-8 h-8 rounded-md bg-gray-800 text-white flex items-center justify-center"
											aria-current="page"
											onClick={() => goToPage(page)}
										>
											{page}
										</button>
									);
								}
								if (isNext) {
									return (
										<button
											key={page}
											className="w-8 h-8 rounded-md border border-gray-400 text-gray-700 flex items-center justify-center"
											onClick={() => goToPage(page)}
										>
											{page}
										</button>
									);
								}
								return (
									<button
										key={page}
										className="px-2 text-gray-700"
										onClick={() => goToPage(page)}
									>
										{page}
									</button>
								);
							});
						})()}

						{/* Next */}
						<button
							className={`px-2 text-gray-700 ${
								currentPage === totalPages
									? "opacity-40 cursor-not-allowed"
									: ""
							}`}
							aria-label="Next page"
							onClick={() =>
								currentPage < totalPages &&
								goToPage(currentPage + 1)
							}
						>
							&gt;
						</button>
					</div>

					{/* Desktop style (match mobile + right aligned) */}
					<div className="mt-6 hidden md:flex justify-end items-center gap-3">
						{/* Prev */}
						<button
							className={`px-2 text-gray-700 ${
								currentPage === 1
									? "opacity-40 cursor-not-allowed"
									: ""
							}`}
							aria-label="Previous page"
							onClick={() =>
								currentPage > 1 && goToPage(currentPage - 1)
							}
						>
							&lt;
						</button>

						{(() => {
							const windowSize = 4;
							let start = Math.max(1, currentPage - 1);
							let end = Math.min(
								totalPages,
								start + windowSize - 1
							);
							if (end - start < windowSize - 1) {
								start = Math.max(1, end - (windowSize - 1));
							}
							const pages = Array.from(
								{ length: end - start + 1 },
								(_, i) => start + i
							);
							const currentIndex = pages.indexOf(currentPage);
							return pages.map((page, idx) => {
								const isCurrent = page === currentPage;
								const isNext = idx === currentIndex + 1;
								if (isCurrent) {
									return (
										<button
											key={page}
											className="w-8 h-8 rounded-md bg-gray-800 text-white flex items-center justify-center"
											aria-current="page"
											onClick={() => goToPage(page)}
										>
											{page}
										</button>
									);
								}
								if (isNext) {
									return (
										<button
											key={page}
											className="w-8 h-8 rounded-md border border-gray-400 text-gray-700 flex items-center justify-center"
											onClick={() => goToPage(page)}
										>
											{page}
										</button>
									);
								}
								return (
									<button
										key={page}
										className="px-2 text-gray-700"
										onClick={() => goToPage(page)}
									>
										{page}
									</button>
								);
							});
						})()}

						{/* Next */}
						<button
							className={`px-2 text-gray-700 ${
								currentPage === totalPages
									? "opacity-40 cursor-not-allowed"
									: ""
							}`}
							aria-label="Next page"
							onClick={() =>
								currentPage < totalPages &&
								goToPage(currentPage + 1)
							}
						>
							&gt;
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopPage;
