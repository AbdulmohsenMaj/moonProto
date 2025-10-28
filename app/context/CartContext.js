"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	// Load cart from localStorage on mount
	useEffect(() => {
		const savedCart = localStorage.getItem("shopping-cart");
		if (savedCart) {
			try {
				const parsedCart = JSON.parse(savedCart);
				// Ensure we always have an array
				setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
			} catch (error) {
				console.error("Error loading cart:", error);
				setCartItems([]);
			}
		}
	}, []);

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (product, quantity = 1, size = null, color = null) => {
		const itemKey = `${product.id}-${size || "default"}-${
			color || "default"
		}`;
		const effectivePrice = product.salePrice || product.price;

		setCartItems((prev) => {
			const existingItem = prev.find((item) => item.itemKey === itemKey);

			if (existingItem) {
				return prev.map((item) =>
					item.itemKey === itemKey
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			}

			return [
				...prev,
				{
					...product,
					price: effectivePrice,
					originalPrice: product.price,
					quantity,
					size,
					color,
					itemKey,
				},
			];
		});
	};

	const removeFromCart = (itemKey) => {
		setCartItems((prev) => prev.filter((item) => item.itemKey !== itemKey));
	};

	const updateQuantity = (itemKey, quantity) => {
		if (quantity <= 0) {
			removeFromCart(itemKey);
			return;
		}

		setCartItems((prev) =>
			prev.map((item) =>
				item.itemKey === itemKey ? { ...item, quantity } : item
			)
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	// Calculate totals
	const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
	const totalItems = safeCartItems.reduce((sum, item) => sum + item.quantity, 0);
	const totalPrice = safeCartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const getCartTotal = () => totalPrice.toFixed(2);
	const getCartItemCount = () => totalItems;

	const isInCart = (productId, size = null, color = null) => {
		const itemKey = `${productId}-${size || "default"}-${
			color || "default"
		}`;
		return safeCartItems.some((item) => item.itemKey === itemKey);
	};

	const value = {
		cartItems: safeCartItems,
		totalItems,
		totalPrice,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getCartTotal,
		getCartItemCount,
		isInCart,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

export default CartContext;
