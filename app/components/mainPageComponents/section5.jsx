import React from "react";
import Carousel from "../Carousel";
import MobileCarousel from "../MobileCarousel";
import { productCollections } from "../../data/products";

const Section5 = () => {
	const products = [
		...productCollections.everlane,
		...productCollections.everlane,
		...productCollections.everlane,
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
