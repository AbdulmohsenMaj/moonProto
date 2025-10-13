import React from "react";
import Carousel from "../Carousel";
import MobileCarousel from "../MobileCarousel";

const Section5 = () => {
	// Sample product data to match Everlane style
	const products = [
		{
			id: 1,
			name: "The Waffle Long-Sleeve Crew",
			price: "$60",
			description: "Bone",
			image: "/images/section5/waffle.png",
		},
		{
			id: 2,
			name: "The Bomber Jacket | Uniform",
			price: "$148",
			description: "Toasted Coconut",
			image: "/images/section5/bomber.png",
		},
		{
			id: 3,
			name: "The Slim 4-Way Stretch Organic Jean",
			price: "$68",
			description: "Dark Indigo",
			image: "/images/section5/slim.png",
		},
		{
			id: 4,
			name: "The Essential Organic Crew",
			price: "$30",
			description: "Vintage Black",
			image: "/images/section5/organic.png",
		},
		{
			id: 5,
			name: "The Heavyweight",
			price: "$45",
			description: "Heathered Brown",
			image: "/images/section5/theHeavy.png",
		},
		{
			id: 6,
			name: "The Classic Tee",
			price: "$25",
			description: "White",
			image: "test.png",
		},
		{
			id: 7,
			name: "The Relaxed Chino",
			price: "$78",
			description: "Navy",
			image: "test.png",
		},
		{
			id: 8,
			name: "The Organic Cotton Hoodie",
			price: "$88",
			description: "Forest Green",
			image: "test.png",
		},
		{
			id: 9,
			name: "The Denim Jacket",
			price: "$98",
			description: "Light Wash",
			image: "test.png",
		},
		{
			id: 10,
			name: "The Merino Sweater",
			price: "$120",
			description: "Charcoal",
			image: "test.png",
		},
		{
			id: 11,
			name: "The Canvas Sneaker",
			price: "$65",
			description: "Off White",
			image: "test.png",
		},
		{
			id: 12,
			name: "The Wool Coat",
			price: "$200",
			description: "Camel",
			image: "test.png",
		},
	];

	return (
		<div className="w-full py-12 px-8 lg:px-12 xl:px-16">
			{/* Mobile Carousel - Show only on small screens */}
			<div className="block md:hidden">
				<MobileCarousel
					items={products}
					title="Everlane Favorites"
					subtitle="Beautifully Functional. Purposefully Designed. Consciously Crafted."
					showHeader={true}
					showDots={true}
				/>
			</div>

			{/* Desktop Carousel - Hide on small screens */}

			<div className="hidden md:block">
				<Carousel
					items={products}
					itemsPerPage={5}
					title="Everlane Favorites"
					subtitle="Beautifully Functional. Purposefully Designed. Consciously Crafted."
					showHeader={true}
					showDots={true}
					showArrows={true}
					arrowPosition="outside"
					gridCols={{
						sm: 1,
						md: 3,
						lg: 5,
						xl: 5,
					}}
				/>
			</div>
		</div>
	);
};

export default Section5;
