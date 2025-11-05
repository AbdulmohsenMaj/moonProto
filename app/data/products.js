// This file contains all product information used across the application

// Available sizes for all products
export const availableSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

// Product categories
export const productCategories = {
	EVERYONE: "Everyone - All Gender Collection",
	ACCESSORIES: "Accessories & Gift Cards",
	BACKPACKS: "Backpacks, Weekenders & Duffle Bags",
	DRESS_SHIRTS: "Dress Shirts & Button Downs",
	HOODIES: "Hoodies & Sweatshirts",
	KNITWEAR: "Knitwear",
	BOTTOMS: "Bottoms",
	OUTERWEAR: "Outerwear",
	DRESSES: "Dresses",
	FOOTWEAR: "Footwear",
	BASICS: "Basics",
};

const originalProducts = [
	// Products with actual images from everworld_images (1-6.png)
	{
		id: 1,
		name: "Cashmere White Sweater",
		price: 189,
		priceDisplay: "$189",
		description:
			"Luxurious cashmere sweater in pristine white, perfect for winter elegance. Made from 100% Grade-A cashmere for ultimate softness and warmth.",
		descriptionTitle: "Timeless Luxury in Premium Cashmere",
		detailedDescription:
			"Experience unparalleled luxury with our premium cashmere sweater crafted from the finest Grade-A cashmere fibers. This timeless piece features a classic crew neck design with ribbed cuffs and hem for a polished finish. The relaxed fit provides comfortable layering while maintaining an elegant silhouette. Perfect for both casual weekends and sophisticated office wear, this versatile sweater pairs beautifully with tailored trousers or flowing skirts. The pristine white color adds brightness to any wardrobe and complements every skin tone. Each sweater is carefully constructed with reinforced seams and expert finishing techniques to ensure lasting quality and shape retention.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.KNITWEAR,
		genre: "Winter Whites",
		gender: ["female"],
		colors: [
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Cream",
				hex: "#F5F5DC",
			},
			{
				name: "Light Gray",
				hex: "#D3D3D3",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		modelInfo: {
			height: "5'9\"",
			bust: '32"',
			waist: '24"',
			hips: '35"',
			wearingSize: "S",
			fit: "Relaxed fit with slight oversized silhouette",
		},
		material: "100% Grade-A Cashmere",
		care: "Dry clean only",
		sku: "CWS-001",
		inStock: true,
		reviewsCount: 5,
		variants: [
			{
				id: "1-white-s",
				colorName: "White",
				size: "S",
				sku: "CWS-001-WHT-S",
				stock: 15,
			},
			{
				id: "1-white-m",
				colorName: "White",
				size: "M",
				sku: "CWS-001-WHT-M",
				stock: 20,
			},
			{
				id: "1-cream-s",
				colorName: "Cream",
				size: "S",
				sku: "CWS-001-CRM-S",
				stock: 12,
			},
		],
	},
	{
		id: 2,
		name: "Wide-Leg Corduroy Pants",
		price: 129,
		priceDisplay: "$129",
		description:
			"Modern wide-legged corduroy pants in classic white. Features a high-waisted silhouette with a relaxed, flowing leg for contemporary comfort and style.",
		descriptionTitle: "Contemporary Comfort Meets Effortless Style",
		detailedDescription:
			"Embrace effortless sophistication with these contemporary wide-leg corduroy pants that redefine modern comfort. Crafted from premium organic cotton corduroy, these pants feature a flattering high-waisted design that elongates the silhouette while providing all-day comfort. The wide-leg cut creates a flowing, elegant movement that's perfect for both professional settings and weekend adventures. The classic white colorway offers endless styling possibilities, pairing beautifully with everything from fitted sweaters to flowing blouses. Thoughtful details include functional front and back pockets, a comfortable elastic waistband with drawstring, and a full-length inseam that works with both flats and heels.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BOTTOMS,
		genre: "Winter Whites",
		gender: ["female"],
		colors: [
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Cream",
				hex: "#F5F5DC",
			},
			{
				name: "Light Beige",
				hex: "#F5F5DC",
			},
		],
		sizes: ["XXS", "XS", "S", "M", "L", "XL"],
		modelInfo: {
			height: "5'8\"",
			waist: '26"',
			hips: '36"',
			wearingSize: "M",
			fit: "High-waisted with wide leg, true to size",
		},
		material: "100% Organic Cotton Corduroy",
		care: "Machine wash cold, tumble dry low",
		sku: "WCP-002",
		inStock: true,
		variants: [
			{
				id: "2-white-m",
				colorName: "White",
				size: "M",
				sku: "WCP-002-WHT-M",
				stock: 18,
			},
			{
				id: "2-white-l",
				colorName: "White",
				size: "L",
				sku: "WCP-002-WHT-L",
				stock: 22,
			},
			{
				id: "2-cream-m",
				colorName: "Cream",
				size: "M",
				sku: "WCP-002-CRM-M",
				stock: 14,
			},
		],
	},
	{
		id: 3,
		name: "Oxford White Shirt",
		price: 89,
		salePrice: 67,
		priceDisplay: "$89",
		salePriceDisplay: "$67",
		description:
			"Classic Oxford shirt in crisp white cotton. Features a tailored fit with button-down collar and chest pocket for timeless sophistication.",
		descriptionTitle: "The Perfect Foundation for Every Wardrobe",
		detailedDescription:
			"Discover the perfect foundation for any wardrobe with this impeccably crafted Oxford shirt that embodies timeless elegance and modern functionality. Made from premium 100% cotton Oxford cloth, this shirt features a crisp, structured feel that maintains its shape throughout the day. The tailored fit provides a polished silhouette without restricting movement, making it ideal for both business meetings and casual outings. Classic details include a button-down collar, single chest pocket with button closure, and barrel cuffs with adjustable buttons. The pristine white colorway serves as the ultimate versatile piece, effortlessly transitioning from office wear with a blazer to weekend casual with rolled sleeves.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.DRESS_SHIRTS,
		genre: "Winter Whites",
		gender: ["male"],
		colors: [
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Light Blue",
				hex: "#ADD8E6",
			},
			{
				name: "Pale Pink",
				hex: "#FFB6C1",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		modelInfo: {
			height: "5'10\"",
			chest: '38"',
			waist: '30"',
			wearingSize: "M",
			fit: "Tailored fit, slightly fitted through the body",
		},
		material: "100% Cotton Oxford",
		care: "Machine wash warm, tumble dry medium",
		sku: "OXS-003",
		inStock: true,
		variants: [
			{
				id: "3-white-m",
				colorName: "White",
				size: "M",
				sku: "OXS-003-WHT-M",
				stock: 25,
			},
			{
				id: "3-white-l",
				colorName: "White",
				size: "L",
				sku: "OXS-003-WHT-L",
				stock: 30,
			},
			{
				id: "3-blue-m",
				colorName: "Light Blue",
				size: "M",
				sku: "OXS-003-BLU-M",
				stock: 20,
			},
		],
	},
	{
		id: 4,
		name: "White Puffer Jacket",
		price: 249,
		priceDisplay: "$249",
		description:
			"Warm puffer jacket in clean white for winter protection. Features down insulation and water-resistant coating for ultimate comfort and style.",
		descriptionTitle: "Premium Winter Protection with Modern Style",
		detailedDescription:
			"Stay warm and stylish throughout the coldest months with this premium puffer jacket that combines cutting-edge insulation technology with contemporary design. Filled with responsibly sourced down insulation, this jacket provides exceptional warmth without bulk, allowing for easy layering and comfortable movement. The water-resistant outer shell protects against light rain and snow, while the breathable fabric prevents overheating during active wear. Thoughtful design features include a full-zip front with storm flap, adjustable hood with drawstring, zippered side pockets for secure storage, and ribbed cuffs to seal in warmth. The clean white colorway offers a fresh, modern aesthetic that pairs beautifully with any winter wardrobe.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.OUTERWEAR,
		genre: "Winter Whites",
		gender: ["female"],
		colors: [
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Cream",
				hex: "#F5F5DC",
			},
			{
				name: "Light Gray",
				hex: "#D3D3D3",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		modelInfo: {
			height: "5'8\"",
			bust: '34"',
			waist: '26"',
			hips: '36"',
			wearingSize: "M",
			fit: "Regular fit, hits at hip",
		},
		material: "100% Recycled Polyester with Down Fill",
		care: "Machine wash cold, tumble dry low",
		sku: "WPJ-004",
		inStock: true,
		variants: [
			{
				id: "4-white-m",
				colorName: "White",
				size: "M",
				sku: "WPJ-004-WHT-M",
				stock: 10,
			},
			{
				id: "4-white-l",
				colorName: "White",
				size: "L",
				sku: "WPJ-004-WHT-L",
				stock: 8,
			},
			{
				id: "4-cream-m",
				colorName: "Cream",
				size: "M",
				sku: "WPJ-004-CRM-M",
				stock: 6,
			},
		],
	},
	{
		id: 5,
		name: "Oversized White Hoodie",
		price: 79,
		priceDisplay: "$79",
		description:
			"Comfortable oversized hoodie in soft white cotton blend. Perfect for casual wear with a relaxed fit and cozy hood for everyday comfort.",
		descriptionTitle: "Ultimate Comfort in Contemporary Casual Luxury",
		detailedDescription:
			"Embrace ultimate comfort and contemporary style with this oversized hoodie that redefines casual luxury. Crafted from a premium cotton-polyester blend, this hoodie offers the perfect balance of softness, durability, and easy care. The oversized fit provides a relaxed, modern silhouette that's perfect for lounging, running errands, or layering over your favorite outfits. Features include a spacious kangaroo pocket for hands and essentials, an adjustable drawstring hood for customizable coverage, and ribbed cuffs and hem for a polished finish. The clean white colorway serves as a versatile canvas that pairs effortlessly with any bottom, from joggers to jeans to skirts, making it an essential piece for any casual wardrobe.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BASICS,
		genre: "Winter Whites",
		gender: ["female"],
		colors: [
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Ivory",
				hex: "#FFFFF0",
			},
			{
				name: "Black",
				hex: "#000000",
			},
		],
		sizes: ["XXS", "XS", "S", "M", "L", "XL"],
		modelInfo: {
			height: "5'9\"",
			bust: '32"',
			waist: '24"',
			hips: '35"',
			wearingSize: "S",
			fit: "Fitted through body, true to size",
		},
		material: "100% Organic Cotton",
		care: "Machine wash cold, tumble dry low",
		sku: "WT-005",
		inStock: true,
		variants: [
			{
				id: "5-white-s",
				colorName: "White",
				size: "S",
				sku: "WT-005-WHT-S",
				stock: 25,
			},
			{
				id: "5-white-m",
				colorName: "White",
				size: "M",
				sku: "WT-005-WHT-M",
				stock: 30,
			},
			{
				id: "5-ivory-s",
				colorName: "Ivory",
				size: "S",
				sku: "WT-005-IVY-S",
				stock: 20,
			},
		],
	},
	{
		id: 6,
		name: "White Wool Skirt",
		price: 159,
		priceDisplay: "$159",
		description:
			"Elegant wool skirt in winter white. Features A-line silhouette with midi length for sophisticated styling.",
		descriptionTitle: "Timeless Elegance in Premium Wool",
		detailedDescription:
			"Embrace timeless elegance with this beautifully crafted wool skirt that embodies sophisticated femininity and versatile styling. Made from a premium wool blend, this skirt offers the perfect balance of structure and comfort, maintaining its shape throughout the day while providing gentle movement with each step. The flattering A-line silhouette creates a classic, universally flattering fit that skims the hips and flows gracefully to a midi length that hits at the most flattering point of the calf. The winter white colorway brings fresh sophistication to your wardrobe, offering endless styling possibilities from professional meetings with a crisp blouse to weekend brunches with a cozy sweater. Thoughtful construction details include a concealed side zipper, comfortable waistband, and expert tailoring that ensures a polished appearance from every angle.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BOTTOMS,
		genre: "Winter Whites",
		gender: ["female"],
		colors: [
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Cream",
				hex: "#F5F5DC",
			},
			{
				name: "Camel",
				hex: "#C19A6B",
			},
		],
		sizes: ["XXS", "XS", "S", "M", "L", "XL"],
		modelInfo: {
			height: "5'8\"",
			waist: '26"',
			hips: '36"',
			wearingSize: "M",
			fit: "A-line silhouette, hits mid-calf",
		},
		material: "80% Wool, 20% Polyester",
		care: "Dry clean only",
		sku: "WWS-006",
		inStock: true,
		variants: [
			{
				id: "6-white-m",
				colorName: "White",
				size: "M",
				sku: "WWS-006-WHT-M",
				stock: 12,
			},
			{
				id: "6-white-l",
				colorName: "White",
				size: "L",
				sku: "WWS-006-WHT-L",
				stock: 15,
			},
			{
				id: "6-cream-m",
				colorName: "Cream",
				size: "M",
				sku: "WWS-006-CRM-M",
				stock: 10,
			},
		],
	},

	// Products with actual images from section5
	{
		id: 7,
		name: "The Waffle Long-Sleeve Crew",
		price: 60,
		salePrice: 42,
		priceDisplay: "$60",
		salePriceDisplay: "$42",
		description:
			"Comfortable waffle-knit long-sleeve crew in bone. Perfect for layering with a relaxed, lived-in feel.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BASICS,
		genre: "Everlane Favorites",
		gender: ["male"],
		colors: [
			{
				name: "Bone",
				hex: "#F5F5DC",
			},
			{
				name: "Navy",
				hex: "#000080",
			},
			{
				name: "Charcoal",
				hex: "#36454F",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		modelInfo: {
			height: "5'9\"",
			chest: '38"',
			waist: '30"',
			wearingSize: "M",
			fit: "Relaxed fit, slightly oversized",
		},
		material: "100% Organic Cotton",
		care: "Machine wash cold, tumble dry low",
		sku: "WLC-007",
		inStock: true,
		variants: [
			{
				id: "7-bone-m",
				colorName: "Bone",
				size: "M",
				sku: "WLC-007-BON-M",
				stock: 20,
			},
			{
				id: "7-bone-l",
				colorName: "Bone",
				size: "L",
				sku: "WLC-007-BON-L",
				stock: 18,
			},
			{
				id: "7-navy-m",
				colorName: "Navy",
				size: "M",
				sku: "WLC-007-NVY-M",
				stock: 15,
			},
		],
	},
	{
		id: 8,
		name: "The Bomber Jacket | Uniform",
		price: 148,
		priceDisplay: "$148",
		description:
			"Classic bomber jacket in toasted coconut. Features ribbed cuffs and hem with a modern, structured silhouette.",
		descriptionTitle: "Contemporary Military-Inspired Design",
		detailedDescription:
			"Elevate your outerwear collection with this contemporary bomber jacket that perfectly balances classic military-inspired design with modern sophistication. Crafted from premium recycled polyester, this jacket offers durability and comfort while supporting sustainable fashion practices. The structured silhouette creates a flattering fit that works beautifully over everything from casual tees to elegant blouses. The rich toasted coconut colorway adds warmth and versatility to your wardrobe, complementing both neutral and bold color palettes. Thoughtful design details include ribbed cuffs and hem for a secure fit, full-zip front closure, and side pockets for practical storage. The bomber's cropped length hits perfectly at the waist, creating a flattering proportion that pairs effortlessly with high-waisted bottoms. This modern interpretation of the classic bomber style transitions seamlessly from day to night, making it an essential piece for the contemporary wardrobe.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.OUTERWEAR,
		genre: "Everlane Favorites",
		gender: ["female"],
		colors: [
			{
				name: "Toasted Coconut",
				hex: "#D2B48C",
			},
			{
				name: "Black",
				hex: "#000000",
			},
			{
				name: "Olive",
				hex: "#808000",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		modelInfo: {
			height: "5'8\"",
			bust: '34"',
			waist: '26"',
			wearingSize: "M",
			fit: "Regular fit, hits at waist",
		},
		material: "100% Recycled Polyester",
		care: "Machine wash cold, tumble dry low",
		sku: "BJ-008",
		inStock: true,
		variants: [
			{
				id: "8-coconut-m",
				colorName: "Toasted Coconut",
				size: "M",
				sku: "BJ-008-COC-M",
				stock: 12,
			},
			{
				id: "8-coconut-l",
				colorName: "Toasted Coconut",
				size: "L",
				sku: "BJ-008-COC-L",
				stock: 10,
			},
			{
				id: "8-black-m",
				colorName: "Black",
				size: "M",
				sku: "BJ-008-BLK-M",
				stock: 8,
			},
		],
	},
	{
		id: 9,
		name: "The Slim 4-Way Stretch Organic Jean",
		price: 68,
		priceDisplay: "$68",
		description:
			"Slim-fit jeans in dark indigo with 4-way stretch. Made from organic cotton for comfort and sustainability.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BOTTOMS,
		genre: "Everlane Favorites",
		gender: ["female"],
		colors: [
			{
				name: "Dark Indigo",
				hex: "#1E3A8A",
			},
			{
				name: "Light Wash",
				hex: "#87CEEB",
			},
			{
				name: "Black",
				hex: "#000000",
			},
		],
		sizes: [
			"24",
			"25",
			"26",
			"27",
			"28",
			"29",
			"30",
			"31",
			"32",
			"33",
			"34",
		],
		modelInfo: {
			height: "5'9\"",
			waist: '26"',
			hips: '36"',
			wearingSize: "27",
			fit: "Slim fit, high-waisted, ankle length",
		},
		material: "98% Organic Cotton, 2% Elastane",
		care: "Machine wash cold, tumble dry low",
		sku: "SJ-009",
		inStock: true,
		variants: [
			{
				id: "9-indigo-27",
				colorName: "Dark Indigo",
				size: "27",
				sku: "SJ-009-IND-27",
				stock: 25,
			},
			{
				id: "9-indigo-28",
				colorName: "Dark Indigo",
				size: "28",
				sku: "SJ-009-IND-28",
				stock: 30,
			},
			{
				id: "9-light-27",
				colorName: "Light Wash",
				size: "27",
				sku: "SJ-009-LGT-27",
				stock: 20,
			},
		],
	},
	{
		id: 10,
		name: "The Essential Organic Crew",
		price: 30,
		salePrice: 21,
		priceDisplay: "$30",
		salePriceDisplay: "$21",
		description:
			"Essential crew neck tee in vintage black. Made from 100% organic cotton for everyday comfort.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BASICS,
		genre: "Everlane Favorites",
		gender: ["male"],
		colors: [
			{
				name: "Vintage Black",
				hex: "#2F2F2F",
			},
			{
				name: "White",
				hex: "#FFFFFF",
			},
			{
				name: "Navy",
				hex: "#000080",
			},
		],
		sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
		modelInfo: {
			height: "5'9\"",
			chest: '38"',
			waist: '30"',
			wearingSize: "M",
			fit: "Classic fit, true to size",
		},
		material: "100% Organic Cotton",
		care: "Machine wash cold, tumble dry low",
		sku: "EOC-010",
		inStock: true,
		variants: [
			{
				id: "10-black-m",
				colorName: "Vintage Black",
				size: "M",
				sku: "EOC-010-BLK-M",
				stock: 40,
			},
			{
				id: "10-black-l",
				colorName: "Vintage Black",
				size: "L",
				sku: "EOC-010-BLK-L",
				stock: 35,
			},
			{
				id: "10-white-m",
				colorName: "White",
				size: "M",
				sku: "EOC-010-WHT-M",
				stock: 30,
			},
		],
	},
	{
		id: 11,
		name: "The Heavyweight",
		price: 45,
		priceDisplay: "$45",
		description:
			"Heavyweight cotton tee in heathered brown. Built to last with a substantial feel and classic fit.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BASICS,
		genre: "Everlane Favorites",
		gender: ["male"],
		colors: [
			{
				name: "Heathered Brown",
				hex: "#8B4513",
			},
			{
				name: "Charcoal",
				hex: "#36454F",
			},
			{
				name: "Navy",
				hex: "#000080",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
		modelInfo: {
			height: "5'10\"",
			chest: '40"',
			waist: '32"',
			wearingSize: "L",
			fit: "Classic fit, substantial weight",
		},
		material: "100% Cotton",
		care: "Machine wash cold, tumble dry low",
		sku: "HW-011",
		inStock: true,
		variants: [
			{
				id: "11-brown-l",
				colorName: "Heathered Brown",
				size: "L",
				sku: "HW-011-BRN-L",
				stock: 22,
			},
			{
				id: "11-brown-xl",
				colorName: "Heathered Brown",
				size: "XL",
				sku: "HW-011-BRN-XL",
				stock: 18,
			},
			{
				id: "11-charcoal-l",
				colorName: "Charcoal",
				size: "L",
				sku: "HW-011-CHR-L",
				stock: 15,
			},
		],
	},

	// Representative products for other categories (2 each)
	{
		id: 12,
		name: "Canvas Weekender Bag",
		price: 89,
		priceDisplay: "$89",
		description:
			"Durable canvas weekender bag perfect for short trips. Features leather handles and multiple compartments.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BACKPACKS,
		genre: "Travel",
		gender: ["male", "female"],
		colors: [
			{
				name: "Natural",
				hex: "#F5F5DC",
			},
			{
				name: "Navy",
				hex: "#000080",
			},
		],
		sizes: ["One Size"],
		modelInfo: {
			height: "5'7\"",
			wearingSize: "One Size",
			fit: '22" W x 12" H x 10" D',
		},
		material: "Canvas with Leather Trim",
		care: "Spot clean only",
		sku: "CWB-012",
		inStock: true,
		variants: [
			{
				id: "12-natural-os",
				colorName: "Natural",
				size: "One Size",
				sku: "CWB-012-NAT-OS",
				stock: 15,
			},
		],
	},
	{
		id: 13,
		name: "Leather Duffle Bag",
		price: 199,
		priceDisplay: "$199",
		description:
			"Premium leather duffle bag for weekend getaways. Features brass hardware and spacious interior.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.BACKPACKS,
		genre: "Travel",
		gender: ["male", "female"],
		colors: [
			{
				name: "Cognac",
				hex: "#A0522D",
			},
			{
				name: "Black",
				hex: "#000000",
			},
		],
		sizes: ["One Size"],
		modelInfo: {
			height: "5'8\"",
			wearingSize: "One Size",
			fit: '20" W x 11" H x 11" D',
		},
		material: "Full Grain Leather",
		care: "Condition regularly",
		sku: "LDB-013",
		inStock: true,
		variants: [
			{
				id: "13-cognac-os",
				colorName: "Cognac",
				size: "One Size",
				sku: "LDB-013-COG-OS",
				stock: 8,
			},
		],
	},
	{
		id: 14,
		name: "Silk Midi Dress",
		price: 189,
		priceDisplay: "$189",
		description:
			"Elegant silk midi dress perfect for special occasions. Features flowing silhouette and adjustable straps.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.DRESSES,
		genre: "Elegant",
		gender: ["female"],
		colors: [
			{
				name: "Champagne",
				hex: "#F7E7CE",
			},
			{
				name: "Black",
				hex: "#000000",
			},
		],
		sizes: ["XXS", "XS", "S", "M", "L", "XL"],
		modelInfo: {
			height: "5'9\"",
			bust: '32"',
			waist: '24"',
			wearingSize: "S",
			fit: "Flowing fit, hits mid-calf",
		},
		material: "100% Silk",
		care: "Dry clean only",
		sku: "SMD-014",
		inStock: true,
		variants: [
			{
				id: "14-champagne-s",
				colorName: "Champagne",
				size: "S",
				sku: "SMD-014-CHP-S",
				stock: 12,
			},
		],
	},
	{
		id: 15,
		name: "Cotton Wrap Dress",
		price: 79,
		priceDisplay: "$79",
		description:
			"Comfortable cotton wrap dress for everyday wear. Features adjustable tie waist and three-quarter sleeves.",
		image: "/landing/images/coffee.jpg",
		category: productCategories.DRESSES,
		genre: "Casual",
		gender: ["female"],
		colors: [
			{
				name: "Navy",
				hex: "#000080",
			},
			{
				name: "Forest Green",
				hex: "#228B22",
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		modelInfo: {
			height: "5'8\"",
			bust: '34"',
			waist: '26"',
			wearingSize: "M",
			fit: "Wrap style, adjustable fit",
		},
		material: "100% Cotton",
		care: "Machine wash cold, tumble dry low",
		sku: "CWD-015",
		inStock: true,
		variants: [
			{
				id: "15-navy-m",
				colorName: "Navy",
				size: "M",
				sku: "CWD-015-NVY-M",
				stock: 18,
			},
		],
	},
];

// Create products array with 4 copies of the original products
export const products = [
	...originalProducts,
	...originalProducts.map(product => ({ ...product, id: product.id + 1000 })),
	...originalProducts.map(product => ({ ...product, id: product.id + 2000 })),
	...originalProducts.map(product => ({ ...product, id: product.id + 3000 }))
];

// Helper functions
export const getProductByGender = (gender) => {
	return products.filter((product) => product.gender.includes(gender));
};
export const getProductsByGenre = (genre) => {
	return products.filter((product) => product.genre === genre);
};

export const getProductsByCategory = (category) => {
	return products.filter((product) => product.category === category);
};

export const getProductsByIds = (ids) => {
	return products.filter((product) => ids.includes(product.id));
};

export const getProductById = (id) => {
	return products.find((product) => product.id === id);
};

// Extract all unique colors from products
export const getAllUniqueColors = () => {
	const colorMap = new Map();

	products.forEach((product) => {
		product.colors.forEach((color) => {
			if (!colorMap.has(color.name)) {
				colorMap.set(color.name, color);
			}
		});
	});

	return Array.from(colorMap.values());
};

// Available colors for filtering
export const availableColors = getAllUniqueColors();

// Product collections
export const productCollections = {
	winterWhites: getProductsByGenre("Winter Whites"),
	everlane: getProductsByGenre("Everlane Favorites"),
	travel: getProductsByGenre("Travel"),
	elegant: getProductsByGenre("Elegant"),
	casual: getProductsByGenre("Casual"),
};

export default products;
