import React from "react";

const Section9 = () => {
	const features = [
		{
			id: 1,
			icon: "/box.svg",
			title: "Complimentary Shipping",
			description: "Enjoy free shipping on U.S. orders over $100.",
		},
		{
			id: 2,
			icon: "/hanger.svg",
			title: "Consciously Crafted",
			description: "Designed with you and the planet in mind.",
		},
		{
			id: 3,
			icon: "/pin.svg",
			title: "Come Say Hi",
			description: "We have 11 stores across the U.S.",
		},
	];

	return (
		<div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 flex items-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
				{features.map((f) => (
	          <div
	            key={f.id}
	            className="flex flex-col items-center justify-start text-center gap-2"
	          >
						<img
							src={f.icon}
							alt={f.title}
							className="h-14 sm:h-16 md:h-20 w-14 sm:w-16 md:w-20 object-contain"
						/>
						<p
							className="text-center font-['Maison Neue'] font-semibold text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px] tracking-[0.42px]"
						>
							{f.title}
						</p>
						<p
							className="font-['Maison Neue'] text-[12px] sm:text-[13px] leading-[18px] sm:leading-[19px] text-gray-600 max-w-[280px]"
						>
							{f.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Section9;
