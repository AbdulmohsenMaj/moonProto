import AnimatedContent from "@/app/effect/AnimatedContent";

import { motion } from "framer-motion";
const Hero = () => {
	return (
		<div className="hero min-h-[360px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[640px] xl:min-h-[758px] flex justify-center items-center text-center bg-[url(/hero.png)] bg-center bg-cover bg-no-repeat">
			<div className="hero-content text-neutral-content w-full max-w-[680px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 grid gap-3">
				<h1 className="font-maison-neue font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[34px] sm:leading-[40px] md:leading-[48px] lg:leading-[55.2px] tracking-[0.92px] text-center text-white">
					Your Cozy Era
				</h1>
				<p className="pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-5 md:pb-6 text-center font-maison-neue font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px]">
					Get peak comfy-chic with <br />
					new winter essentials.
				</p>
				<div className="justify-self-center">
					<AnimatedContent
						distance={22}
						direction="vertical"
						reverse={false}
						duration={0.5}
						ease="bounce.out"
						initialOpacity={0.9}
						animateOpacity
						scale={1.1}
						threshold={0.2}
						delay={0.3}
					>
						<motion.button
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.96 }}
							transition={{
								type: "spring",
								stiffness: 600,
								damping: 25,
							}}
							className="btn bg-white border-0 justify-self-center w-[200px] sm:w-[220px] md:w-[240px] h-[44px] gap-[10px] opacity-100 px-[16px]"
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
					</AnimatedContent>
				</div>
			</div>
		</div>
	);
};

export default Hero;
