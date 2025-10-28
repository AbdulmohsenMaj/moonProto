import React from "react";

const Section7 = () => {
	const cards = [
		{
			id: 1,
			title: "Our Holiday Gift Picks",
			description: "The best presents for everyone on your list.",
			linkText: "Read More",
			href: "",
			image: "landing/images/section7/gift.png",
		},
		{
			id: 2,
			title: "Cleaner Fashion",
			description:
				"See the sustainability efforts behind each of our products.",
			linkText: "Learn More",
			href: "",
			image: "landing/images/section7/fashion.png",
		},
	];

	return (
		<div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 mb-12 md:mb-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 place-items-center">
				{cards.map((card) => (
					<div
						key={card.id}
						className="w-full max-w-[787px] space-y-3 sm:space-y-4"
					>
						<p
							className="text-center font-normal text-[13px] sm:text-[14px] leading-[19px] sm:leading-[20px] tracking-[1.2px] sm:tracking-[1.4px]"
							style={{ fontFamily: "Maison Neue" }}
						>
							{card.title}
						</p>

						<div>
							<img
								src={card.image}
								alt={card.title}
								className="w-full max-w-[787px] h-auto object-cover"
							/>
						</div>

						<p
							className="text-center text-[12px] sm:text-[13px] leading-[18px] sm:leading-[19px] text-gray-600"
							style={{ fontFamily: "Maison Neue" }}
						>
							{card.description}
						</p>

						<a
							href={card.href}
							className="block text-center underline underline-offset-2 decoration-1 text-[12px] tracking-[1.2px] sm:tracking-[1.4px]"
							style={{ fontFamily: "Maison Neue" }}
						>
							{card.linkText}
						</a>
					</div>
				))}
			</div>
			<div className="mt-12 w-11/12 md:w-4/5 lg:w-2/3 mx-auto border-b border-black"></div>
		</div>
	);
};

export default Section7;
