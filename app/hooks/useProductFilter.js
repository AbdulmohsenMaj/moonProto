'use client';

import { useMemo } from 'react';

/**
 * Custom hook for filtering products based on selected criteria
 * @param {Array} products - Array of products to filter
 * @param {Object} filters - Filter state object from useFilters
 * @returns {Array} Filtered products
 */
export const useProductFilter = (products, filters) => {
  const { selectedCategories, selectedColors, selectedSizes, selectedPriceRanges } = filters;
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Filter by color
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors && product.colors.some(color => 
          selectedColors.includes(color.name)
        )
      );
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes && product.sizes.some(size => 
          selectedSizes.includes(size)
        )
      );
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(product => {
        const productPrice = product.salePrice || product.price;
        return selectedPriceRanges.some(range => 
          productPrice >= range.min && (range.max === Infinity ? true : productPrice <= range.max)
        );
      });
    }

    return filtered;
  }, [products, selectedCategories, selectedColors, selectedSizes, selectedPriceRanges]);

  return filteredProducts;
};