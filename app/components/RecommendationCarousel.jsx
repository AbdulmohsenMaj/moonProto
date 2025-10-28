"use client";

import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Carousel from "./Carousel";
import CartItem from "./CartItem";

const RecommendationCarousel = ({ excludeIds = [] }) => {
	const [allRandomProducts, setAllRandomProducts] = useState([]);
	const { addToCart } = useCart();

	// Get random products only on initial load
	useEffect(() => {
		const shuffled = [...products].sort(() => 0.5 - Math.random());
		setAllRandomProducts(shuffled.slice(0, 10)); // Get 10 random products to have extras
	}, []); // Empty dependency array - only runs on mount

	// Filter out cart items from the pre-selected random products
	const recommendedProducts = allRandomProducts
		.filter((product) => !excludeIds.includes(product.id))
		.slice(0, 6); // Show up to 6 products

	const handleAddToCart = (product) => {
		// Use the first available color and size, or defaults
		const defaultColor = product.colors?.[0]?.name || null;
		const defaultSize = product.sizes?.[0] || "One Size";

		addToCart(product, 1, defaultSize, defaultColor);
	};

	// Custom render function for recommendation items using CartItem component
	const renderRecommendationItem = (product, index) => (
		<CartItem
			key={product.id}
			item={product}
			mode="recommendation"
			onAddToCart={handleAddToCart}
		/>
	);

	if (recommendedProducts.length === 0) return null;

	return (
		<Carousel
			items={recommendedProducts}
			itemsPerPage={1}
			showHeader={true}
			showDots={true}
			showArrows={false}
			showButton={false}
			gridCols={{
				sm: 1,
				md: 1,
				lg: 1,
				xl: 1,
			}}
			renderItem={renderRecommendationItem}
			className="text-left"
			containerClassName="px-0"
		/>
	);
};

export default RecommendationCarousel;
