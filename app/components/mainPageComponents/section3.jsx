"use client";
import { motion } from "framer-motion";

const Section3 = () => {
	const heroSections = [
		{
			id: 1,
			title: "New Arrivals",
			description: "SHOP THE LATEST",
			backgroundImage: "/landing/images/section3/NewArrivals.png",
		},
		{
			id: 2,
			title: "Best-Sellers",
			description: "SHOP YOUR FAVORITES",
			backgroundImage: "/landing/images/section3/BestSellers.png",
		},
		{
			id: 3,
			title: "The Holiday Outfit",
			description: "SHOP OCCASION",
			backgroundImage: "/landing/images/section3/HolidayOutFit.png",
		},
	];

	return (
		<div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12">
			{heroSections.map((section) => (
				<div
					key={section.id}
					className="hero min-h-[360px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[534px] xl:min-h-[758px] flex justify-center items-center text-center  bg-center bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url(${section.backgroundImage})`,
					}}
				>
					<div className="hero-content text-neutral-content w-full grid gap-3 sm:gap-4 justify-items-center">
						<h1
							style={{
								fontFamily: "Maison Neue",
								fontWeight: 400,
								fontStyle: "semibold",
								fontSize: "28px",
								lineHeight: "34px",
								letterSpacing: "0.92px",
								textAlign: "center",
								color: "#FFFFFF",
							}}
						>
							{section.title}
						</h1>

						<motion.button
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.96 }}
							transition={{
								type: "spring",
								stiffness: 600,
								damping: 25,
							}}
							className="btn bg-white border-0 justify-self-center w-[200px] sm:w-[220px] md:w-[240px] h-[41px] gap-[10px] opacity-100 py-[12px]"
							style={{
								fontFamily: "Maison Neue",
								fontWeight: 400,
								fontStyle: "normal",
								fontSize: "13px",
								lineHeight: "16px",
								letterSpacing: "1.4px",
								textAlign: "center",
							}}
						>
							{section.description}
						</motion.button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Section3;
