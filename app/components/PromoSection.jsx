"use client";

import AnimatedContent from "@/app/effect/AnimatedContent";
import { motion } from "framer-motion";

const PromoSection = ({
	containerClassName = "",
	backgroundImage = "/landing/images/coffee.jpg",
	showButton = true,
	buttonStyle = "default",
	buttonText = "SHOP NOW",
	buttonClassName = "",
	onButtonClick = () => {},
	title = "UP TO 40% OFF OUR",
	titleSpan = "CHRISTMAS COLLECTION",
	description = "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
	reverse = false,
}) => {
	const buttonStyles = {
		default: "bg-gray-900 text-white hover:bg-gray-800",
		outline:
			"border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white",
		gradient:
			"bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
		minimal:
			"bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-sm",
	};
	return (
		<div className={`px-4 sm:px-6${containerClassName}`}>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-0  overflow-hidden items-stretch">
					{/* On mobile, always show text first, then image. On lg+, respect reverse prop */}
					<>
						{/* Text Content Section - Always first on mobile, conditional on lg+ */}
						<div className={reverse ? "lg:order-2" : "lg:order-1"}>
							<AnimatedContent
								distance={50}
								direction="horizontal"
								reverse={false}
								duration={0.8}
								ease="easeOut"
								initialOpacity={0}
								animateOpacity
								threshold={0.1}
							>
                                <div className="bg-gray-50 p-12 lg:p-16 flex flex-col justify-center h-full min-h-[400px] lg:min-h-[500px]">
                                    <div className="max-w-md mx-auto text-center">
                                        <h2 className="font-garamond font-bold text-[28px] leading-[32px] tracking-[0.04em] uppercase text-center text-gray-900 mb-6">
                                            {title}
                                            {titleSpan && (
                                                <>
                                                    <br />
                                                    <span className="text-gray-700">
                                                        {titleSpan}
                                                    </span>
                                                </>
                                            )}
                                        </h2>

                                        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0em] text-center text-gray-600 mb-8">
                                            {description}
                                        </p>

										{/* Button - Always reserve space for consistent height */}
										<div className="h-16 flex items-start justify-center">
											{showButton && (
												<motion.button
													whileHover={{ scale: 1.12 }}
													whileTap={{ scale: 0.96 }}
													transition={{
														type: "spring",
														stiffness: 600,
														damping: 25,
													}}
													onClick={onButtonClick}
													className={`inline-block px-8 py-4 text-sm font-maison-neue font-normal tracking-wider uppercase transition-all duration-300 ${
														buttonStyles[buttonStyle] ||
														buttonStyles.default
													} ${buttonClassName}`}
												>
													{buttonText}
												</motion.button>
											)}
										</div>
									</div>
								</div>
							</AnimatedContent>
						</div>

						{/* Image Section - Always second on mobile, conditional on lg+ */}
						<div className={reverse ? "lg:order-1" : "lg:order-2"}>
							<AnimatedContent
								distance={50}
								direction="horizontal"
								reverse={true}
								duration={0.8}
								ease="easeOut"
								initialOpacity={0}
								animateOpacity
								threshold={0.1}
								delay={0.2}
							>
								<div
									className="bg-cover bg-center bg-no-repeat h-full min-h-[400px] lg:min-h-[500px]"
									style={{
										backgroundImage: `url(${backgroundImage})`,
									}}
								>
									{/* Optional overlay for better text contrast if needed */}
									<div className="w-full h-full bg-gradient-to-l from-transparent to-black/10" />
								</div>
							</AnimatedContent>
						</div>
					</>
				</div>
			</div>
		</div>
	);
};

export default PromoSection;
