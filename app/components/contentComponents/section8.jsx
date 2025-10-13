import React from "react";
import Carousel from "../Carousel";
import MobileCarousel from "../MobileCarousel";

const Section8 = () => {
	const items = [
		{ id: 1, src: "/images/section8/first.png", alt: "Look 1" },
		{ id: 2, src: "/images/section8/second.png", alt: "Look 2" },
		{ id: 3, src: "/images/section8/third.png", alt: "Look 3" },
		{ id: 4, src: "/images/section8/fourth.png", alt: "Look 4" },
		{ id: 5, src: "/images/section8/fifth.png", alt: "Look 5" },
	];

	const renderItem = (item) => (
		<div className="relative group cursor-pointer hover:opacity-95 w-full">
			<div className="relative h-[225px] w-full bg-gray-50 overflow-hidden">
				<img
					src={item.src}
					alt={item.alt || `Look ${item.id}`}
					className="w-full h-full object-cover transform-gpu transition-transform duration-300 ease-out origin-center group-hover:scale-105"
				/>
				<button
					type="button"
					aria-label="Add to cart"
					className="absolute top-3 right-3 p-0 hover:opacity-90 hover:cursor-pointer transform-gpu transition-transform duration-200 ease-out hover:scale-105"
				>
					<svg
						width="31"
						height="30"
						viewBox="0 0 31 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="15.6" cy="15" r="15" fill="white" />
						<g clipPath="url(#clip0_1_296)">
							<path
								d="M13.1 23.3332C13.5602 23.3332 13.9333 22.9601 13.9333 22.4998C13.9333 22.0396 13.5602 21.6665 13.1 21.6665C12.6398 21.6665 12.2667 22.0396 12.2667 22.4998C12.2667 22.9601 12.6398 23.3332 13.1 23.3332Z"
								stroke="#262626"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M22.2667 23.3332C22.7269 23.3332 23.1 22.9601 23.1 22.4998C23.1 22.0396 22.7269 21.6665 22.2667 21.6665C21.8064 21.6665 21.4333 22.0396 21.4333 22.4998C21.4333 22.9601 21.8064 23.3332 22.2667 23.3332Z"
								stroke="#262626"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.43335 5.8335H9.76668L12 16.9918C12.0762 17.3755 12.2849 17.7201 12.5896 17.9654C12.8943 18.2107 13.2756 18.341 13.6667 18.3335H21.7667C22.1578 18.341 22.539 18.2107 22.8437 17.9654C23.1484 17.7201 23.3571 17.3755 23.4333 16.9918L24.7667 10.0002H10.6"
								stroke="#262626"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_296">
								<rect
									width="20"
									height="20"
									fill="white"
									transform="translate(5.60001 5)"
								/>
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</div>
	);

	return (
		<div className="w-full py-12 px-8 lg:px-12 xl:px-16">
			{/* Header */}
			<div className="text-center mb-8">
				<h2 className="text-3xl font-light text-gray-900 mb-2">
					Everlane On You
				</h2>
				<p className="text-gray-600 text-lg">
					Share your latest look with #EverlaneOnYou for a chance to
					be featured.
				</p>
				<a
					href="#"
					className="inline-block mt-2 underline underline-offset-2 decoration-1 text-[12px] tracking-[1.4px]"
					style={{ fontFamily: "Maison Neue" }}
				>
					Add Your Photo
				</a>
			</div>

			{/* Mobile Carousel */}
			<div className="block md:hidden">
				<MobileCarousel
					items={items}
					renderItem={renderItem}
					showHeader={false}
					showDots={false}
				/>
			</div>

			{/* Desktop Carousel */}
			<div className="hidden md:block">
				<Carousel
					items={items}
					itemsPerPage={5}
					showHeader={false}
					showDots={false}
					showArrows={true}
					arrowPosition="outside"
					gridCols={{ sm: 2, md: 5, lg: 5, xl: 5 }}
					renderItem={renderItem}
				/>
			</div>
		</div>
	);
};

export default Section8;
