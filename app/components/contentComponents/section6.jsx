import React from "react";
import Carousel from "../Carousel";

const Section6 = () => {
	const items = [
		{
			id: 1,
			title: "Testimonial",
			quote: "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
			rating: 5,
			author: "JonSnSF",
			productName: "The Heavyweight Overshirt",
			href: "#",
			image: "/images/section6/review1.png",
		},
		{
			id: 2,
			title: "Testimonial",
			quote: "Quality is top-notch. Warm, durable, and looks sharp with anything.",
			rating: 5,
			author: "AlexB",
			productName: "The Merino Sweater",
			href: "#",
			image: "/images/section6/review2.png",
		},
		{
			id: 3,
			title: "Testimonial",
			quote: "Quality is top-notch. Warm, durable, and looks sharp with anything.",
			rating: 3,
			author: "AlexB",
			productName: "The Merino Sweater",
			href: "#",
			image: "/images/section6/review3.png",
		},
		{
			id: 4,
			title: "Testimonial",
			quote: "Quality is top-notch. Warm, durable, and looks sharp with anything.",
			rating: 4,
			author: "AlexB",
			productName: "The Merino Sweater",
			href: "#",
			image: "/images/section6/review4.png",
		},
	];

	const renderItem = (item) => {
		return (
			<div className="w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
					{/* Text column */}
					<div className="px-4 md:pl-8 md:pr-0 md:max-w-[520px] md:mx-auto text-left">
						<p className="text-[12px] leading-[16px] tracking-[0.2px] text-gray-600 mb-4 text-left">
							People Are Talking
						</p>
						<div
							className="flex gap-1 mb-3 justify-start"
							aria-label={`${item.rating} star rating`}
						>
							{Array.from({ length: item.rating }).map((_, i) => (
								<span key={i} className="text-black">
									★
								</span>
							))}
						</div>
						<blockquote className="font-['Maison_Neue'] text-[18px] leading-[28px] text-gray-900">
							“{item.quote}”
						</blockquote>
						<p className="mt-4 text-[12px] leading-[16px] tracking-[0.2px] text-gray-600">
							— {item.author},{" "}
							<a
								href={item.href}
								className="underline underline-offset-2"
							>
								{item.productName}
							</a>
						</p>
					</div>

					{/* Image column */}
					<div className="px-4 md:px-0 md:justify-self-end md:w-full">
						<div className="aspect-[4/5] bg-gray-50 max-h-[700px] overflow-visible relative">
							<img
								src={item.image}
								alt={item.productName}
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full py-12 px-4 lg:pl-12 lg:pr-4 xl:pl-16 xl:pr-6">
			<Carousel
				items={items}
				itemsPerPage={1}
				showHeader={false}
				showDots={true}
				showArrows={true}
				arrowPosition="inside"
				gridCols={{ sm: 1, md: 1, lg: 1, xl: 1 }}
				renderItem={renderItem}
			/>
			{/* Short bottom border divider */}
			<div className="mt-12 w-11/12 md:w-4/5 lg:w-2/3 mx-auto border-b border-black"></div>
		</div>
	);
};

export default Section6;
