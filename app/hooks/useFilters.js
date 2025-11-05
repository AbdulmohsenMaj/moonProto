'use client';

import { useState } from 'react';

/**
 * Custom hook for managing filter state with built-in toggle logic
 * @returns {Object} Filter state and toggle functions
 */
export const useFilters = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // Toggle functions that handle the add/remove logic
  const toggleCategory = (category) => {
    const isCurrentlySelected = selectedCategories.includes(category);
    let updatedCategories;
    
    if (isCurrentlySelected) {
      // Remove category
      updatedCategories = selectedCategories.filter(function(existingCategory) {
        return existingCategory !== category;
      });
    } else {
      // Add category
      updatedCategories = [...selectedCategories, category];
    }
    
    setSelectedCategories(updatedCategories);
  };

  const toggleColor = (color) => {
    const isCurrentlySelected = selectedColors.includes(color);
    let updatedColors;
    
    if (isCurrentlySelected) {
      // Remove color
      updatedColors = selectedColors.filter(function(existingColor) {
        return existingColor !== color;
      });
    } else {
      // Add color
      updatedColors = [...selectedColors, color];
    }
    
    setSelectedColors(updatedColors);
  };

  const toggleSize = (size) => {
    const isCurrentlySelected = selectedSizes.includes(size);
    let updatedSizes;
    
    if (isCurrentlySelected) {
      // Remove size
      updatedSizes = selectedSizes.filter(function(existingSize) {
        return existingSize !== size;
      });
    } else {
      // Add size
      updatedSizes = [...selectedSizes, size];
    }
    
    setSelectedSizes(updatedSizes);
  };

  const togglePriceRange = (priceRange) => {
    const isCurrentlySelected = selectedPriceRanges.some(
      selected => selected.min === priceRange.min && selected.max === priceRange.max
    );
    let updatedPriceRanges;
    
    if (isCurrentlySelected) {
      // Remove price range
      updatedPriceRanges = selectedPriceRanges.filter(function(existingRange) {
        return !(existingRange.min === priceRange.min && existingRange.max === priceRange.max);
      });
    } else {
      // Add price range
      updatedPriceRanges = [...selectedPriceRanges, priceRange];
    }
    
    setSelectedPriceRanges(updatedPriceRanges);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedPriceRanges([]);
  };

  const hasActiveFilters = () => {
    return selectedCategories.length > 0 || selectedColors.length > 0 || selectedSizes.length > 0 || selectedPriceRanges.length > 0;
  };

  return {
    // State
    selectedCategories,
    selectedColors,
    selectedSizes,
    selectedPriceRanges,
    
    // Toggle functions (replaces redundant setters)
    toggleCategory,
    toggleColor,
    toggleSize,
    togglePriceRange,
    
    // Direct setters (for cases where you need to set the entire array)
    setSelectedCategories,
    setSelectedColors,
    setSelectedSizes,
    setSelectedPriceRanges,
    
    // Utility functions
    clearAllFilters,
    hasActiveFilters,
  };
};