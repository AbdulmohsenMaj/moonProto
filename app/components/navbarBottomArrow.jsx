"use client";

import { useState } from "react";
import Image from "next/image";
import HeroModular from "./HeroModular";

const BottomArrow = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleFocus = () => {
		setIsOpen(true);
	};

	const handleBlur = (e) => {
		// Check if the blur is happening because focus moved to dropdown content
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<>
			<div className="dropdown dropdown-click w-full" onBlur={handleBlur}>
				<div
					tabIndex={0}
					role="button"
					className="btn m-1 flex items-center justify-center"
					onFocus={handleFocus}
				>
					<Image
						src={isOpen ? "/chevron-up.svg" : "/chevron-down.svg"}
						alt={isOpen ? "Close menu" : "Open menu"}
						width={16}
						height={16}
						className="transition-transform duration-200"
					/>
				</div>
				<div
					tabIndex={0}
					className="dropdown-content p-2 shadow bg-base-100  w-full"
				>
					<div className="flex gap-2 m-4 justify-center items-center">
						<div className=" BottomNav grid grid-cols-1 gap-2 h-[406px] w-full justify-items-end">
							<footer className="footer sm:footer-horizontal content p-10 justify-self-end justify-items-end text-right">
								<nav>
									<h6 className="footer-title">HIGHLIGHTS</h6>
									<a className="link link-hover">
										Shop All NewArrivals
									</a>
									<a className="link link-hover">
										The Gift Guide
									</a>
									<a className="link link-hover">
										New bottoms
									</a>
									<a className="link link-hover">New Tops</a>
									<a className="link link-hover">
										T-Shirt Bundles
									</a>
									<a className="link link-hover">
										Under $100
									</a>
								</nav>
								<nav>
									<h6 className="footer-title">
										FEATURED SHOPS
									</h6>
									<a className="link link-hover">
										The Holiday Outfit Edit
									</a>
									<a className="link link-hover">
										Giftable Sweaters
									</a>
									<a className="link link-hover">
										Uniform & Capsule
									</a>
									<a className="link link-hover">
										The Performance Chino Shop
									</a>
									<a className="link link-hover">
										Top Rated Men’s Clothing
									</a>
								</nav>
							</footer>
						</div>
						<div className="grid grid-cols-2 gap-[24px] w-full justify-items-center">
							{/* Left square hero (with text) */}
							<div className="w-full aspect-square overflow-hidden sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] justify-self-end">
								<HeroModular
									titlePosition="bottom-left"
									title="The Holiday
									Outfit Edit"
									description="Hello"
									descriptionPosition="bottom-right"
									minHeights={{
										base: "min-h-[200px]",
										lg: "min-h-[262]",
									}}
									backgroundImage="/landing/images/nav1.png"
									backgroundFit="contain"
									showButton={false}
									contentPadding="p-2"
									contentGap="gap-0"
									containerClassName="h-full"
								/>
							</div>

							{/* Right square hero */}
							<div className="w-full aspect-square overflow-hidden sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] justify-self-start">
								<HeroModular
									title="Giftable 
									Sweaters"
									titlePosition="bottom-left"
									description=">"
									descriptionPosition="bottom-right"
									minHeights={{
										base: "min-h-[200px]",
										lg: "min-h-[262]",
									}}
									backgroundImage="/landing/images/nav2.png"
									backgroundFit="contain"
									showButton={false}
									contentPadding="p-0"
									contentGap="gap-0"
									containerClassName="h-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default BottomArrow;
