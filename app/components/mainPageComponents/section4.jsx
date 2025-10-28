"use client";
import { motion } from "framer-motion";

const Section4 = () => {
	return (
		<div
			className="hero min-h-[320px] md:min-h-[420px] flex justify-center items-center text-center my-16 sm:my-20 md:my-24 px-4 sm:px-6 md:px-8 bg-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: "url(/section4.png)",
			}}
		>
			<div className="hero-content text-neutral-content w-full max-w-[680px] mx-auto grid gap-3">
				<h1
					style={{
						fontFamily: "Maison Neue",
						fontWeight: 400,
						fontStyle: "semibold",
						fontSize: "36px",
						lineHeight: "44px",
						letterSpacing: "0.92px",
						textAlign: "center",
						color: "#FFFFFF",
					}}
				>
					We’re on a Mission To Clean Up the Industry
				</h1>
				<p
					className="pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-5 md:pb-6 text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-center"
					style={{
						fontFamily: "Maison Neue",
						fontWeight: 400,
						fontStyle: "normal",
						fontSize: "20px",
						lineHeight: "30px",
						letterSpacing: "0px",
						textAlign: "center",
					}}
				>
					Read about our progress in our latest Impact Report.
				</p>
				<motion.button
					whileHover={{ scale: 1.12 }}
					whileTap={{ scale: 0.96 }}
					transition={{ type: "spring", stiffness: 600, damping: 25 }}
					className="btn bg-white border-0 justify-self-center w-[200px] sm:w-[220px] md:w-[240px] h-[41px] gap-[10px] opacity-100 py-[12px]"
					style={{
						fontFamily: "Maison Neue",
						fontWeight: 400,
						fontStyle: "normal",
						fontSize: "14px",
						lineHeight: "16.8px",
						letterSpacing: "1.4px",
						textAlign: "center",
					}}
				>
					SHOP NOW
				</motion.button>
			</div>
		</div>
	);
};

export default Section4;
