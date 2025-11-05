"use client";

import AnimatedContent from "@/app/effect/AnimatedContent";
import { motion } from "framer-motion";

// Logo Component - updated with new SVG designs
const LogoIcon = ({ className = "w-16 h-16", variant = "white" }) => {
	const strokeColor = variant === "brown" ? "#C69B7B" : "white";
	const maskId = variant === "brown" ? "454_9447" : "454_8447";

	return (
		<svg
			className={className}
			width="86"
			height="82"
			viewBox="0 0 86 82"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Diamond shapes with masks */}
			<mask id={`path-1-inside-1_${maskId}`} fill="white">
				<path d="M12.3026 42.1727C11.5215 41.3916 11.5215 40.1253 12.3026 39.3442L16.8968 34.75C21.5831 30.0637 29.1811 30.0637 33.8674 34.75L38.4616 39.3442C39.2427 40.1253 39.2427 41.3916 38.4616 42.1727L33.8674 46.7669C29.1811 51.4532 21.5831 51.4532 16.8968 46.7669L12.3026 42.1727Z" />
			</mask>
			<path
				d="M12.3026 42.1727C11.5215 41.3916 11.5215 40.1253 12.3026 39.3442L16.8968 34.75C21.5831 30.0637 29.1811 30.0637 33.8674 34.75L38.4616 39.3442C39.2427 40.1253 39.2427 41.3916 38.4616 42.1727L33.8674 46.7669C29.1811 51.4532 21.5831 51.4532 16.8968 46.7669L12.3026 42.1727Z"
				stroke={strokeColor}
				strokeWidth="8"
				mask={`url(#path-1-inside-1_${maskId})`}
			/>

			<mask id={`path-2-inside-2_${maskId}`} fill="white">
				<path d="M46.4055 42.1727C45.6244 41.3916 45.6244 40.1253 46.4055 39.3442L50.9997 34.75C55.686 30.0637 63.284 30.0637 67.9703 34.75L72.5645 39.3442C73.3456 40.1253 73.3456 41.3916 72.5645 42.1727L67.9703 46.7669C63.284 51.4532 55.686 51.4532 50.9997 46.7669L46.4055 42.1727Z" />
			</mask>
			<path
				d="M46.4055 42.1727C45.6244 41.3916 45.6244 40.1253 46.4055 39.3442L50.9997 34.75C55.686 30.0637 63.284 30.0637 67.9703 34.75L72.5645 39.3442C73.3456 40.1253 73.3456 41.3916 72.5645 42.1727L67.9703 46.7669C63.284 51.4532 55.686 51.4532 50.9997 46.7669L46.4055 42.1727Z"
				stroke={strokeColor}
				strokeWidth="8"
				mask={`url(#path-2-inside-2_${maskId})`}
			/>

			<mask id={`path-3-inside-3_${maskId}`} fill="white">
				<path d="M41.0193 10.6275C41.8004 9.84642 43.0667 9.84642 43.8477 10.6275L48.442 15.2217C53.1283 19.908 53.1283 27.506 48.442 32.1923L43.8477 36.7865C43.0667 37.5675 41.8004 37.5675 41.0193 36.7865L36.4251 32.1923C31.7388 27.506 31.7388 19.908 36.4251 15.2217L41.0193 10.6275Z" />
			</mask>
			<path
				d="M41.0193 10.6275C41.8004 9.84642 43.0667 9.84642 43.8477 10.6275L48.442 15.2217C53.1283 19.908 53.1283 27.506 48.442 32.1923L43.8477 36.7865C43.0667 37.5675 41.8004 37.5675 41.0193 36.7865L36.4251 32.1923C31.7388 27.506 31.7388 19.908 36.4251 15.2217L41.0193 10.6275Z"
				stroke={strokeColor}
				strokeWidth="8"
				mask={`url(#path-3-inside-3_${maskId})`}
			/>

			<mask id={`path-4-inside-4_${maskId}`} fill="white">
				<path d="M40.7954 43.0361C41.5764 42.2551 42.8428 42.2551 43.6238 43.0361L48.218 47.6304C52.9043 52.3167 52.9043 59.9146 48.218 64.6009L43.6238 69.1952C42.8428 69.9762 41.5764 69.9762 40.7954 69.1952L36.2011 64.6009C31.5149 59.9146 31.5149 52.3167 36.2011 47.6304L40.7954 43.0361Z" />
			</mask>
			<path
				d="M40.7954 43.0361C41.5764 42.2551 42.8428 42.2551 43.6238 43.0361L48.218 47.6304C52.9043 52.3167 52.9043 59.9146 48.218 64.6009L43.6238 69.1952C42.8428 69.9762 41.5764 69.9762 40.7954 69.1952L36.2011 64.6009C31.5149 59.9146 31.5149 52.3167 36.2011 47.6304L40.7954 43.0361Z"
				stroke={strokeColor}
				strokeWidth="8"
				mask={`url(#path-4-inside-4_${maskId})`}
			/>

			{/* Outer circular border */}
			<path
				d="M50.29 2.10449C52.6169 1.91129 54.6079 1.94103 56.4482 2.59473C57.666 3.02733 58.5741 4.01845 59.7178 5.59082C60.7476 7.0068 62.0669 9.0783 63.9854 10.4307C66.1201 11.9354 68.9884 12.9539 71.1133 13.8564C73.4964 14.8687 74.9689 15.7344 75.6104 16.8057C76.4236 18.164 76.8309 19.8481 77.1982 21.9902C77.5484 24.0323 77.8657 26.5387 78.6074 28.9883C79.2676 31.1684 80.6653 33.4562 81.6484 35.3105C82.7246 37.3404 83.4316 39.0392 83.4316 40.6221C83.4316 42.1363 82.7787 43.4728 81.7266 45.1328C80.759 46.6595 79.2957 48.649 78.6074 50.9219C77.8436 53.4445 77.7091 56.3166 77.4531 58.5557C77.1777 60.9641 76.7625 62.8465 75.7109 64.2861C74.6683 65.7133 72.9989 66.6932 70.7988 67.7021C68.759 68.6376 66.0905 69.6538 63.9854 71.1377C62.0928 72.4718 60.7794 74.4303 59.748 75.7754C58.6198 77.2469 57.7043 78.2022 56.4482 78.6484C54.6078 79.3022 52.617 79.3329 50.29 79.1396C48.0991 78.9577 45.3428 78.5332 42.7158 78.5332C40.0888 78.5332 37.3325 78.9577 35.1416 79.1396C32.8146 79.3329 30.8238 79.3022 28.9834 78.6484C27.3042 78.0519 25.9551 76.9939 24.5156 75.626C23.1597 74.3374 21.5402 72.568 19.6992 71.1768C17.9037 69.82 15.6885 68.7056 13.9785 67.71C12.1486 66.6445 10.6944 65.619 9.7207 64.2861C8.60924 62.7646 8.01759 60.7864 7.54395 58.3945C7.10107 56.1581 6.73662 53.3353 6.00586 50.9219C5.3506 48.7579 4.17005 46.8153 3.38574 45.2891C2.55247 43.6675 2.00004 42.2606 2 40.6221C2 39.0392 2.70704 37.3404 3.7832 35.3105C4.76633 33.4562 6.16408 31.1684 6.82422 28.9883C7.58123 26.4881 7.72109 23.9642 7.97363 22.0566C8.23883 20.0536 8.63509 18.4442 9.7207 16.958C10.6722 15.6555 12.0911 14.7145 13.9209 13.7285C15.6281 12.8085 17.8681 11.7753 19.6992 10.3916C21.5715 8.97671 23.1928 7.10983 24.5557 5.74121C26.0076 4.28314 27.3417 3.17794 28.9834 2.59473C30.8237 1.94103 32.8147 1.91129 35.1416 2.10449C37.3325 2.28642 40.0888 2.70996 42.7158 2.70996C45.3428 2.70996 48.0991 2.28642 50.29 2.10449Z"
				stroke={strokeColor}
				strokeWidth="4"
			/>
		</svg>
	);
};

const CoffeeHero = ({
	// Text content
	subtitle = "Handcrafted in Viet Nam since 1650",
	title = "BAT TRANG DINNER SET",

	// Styling
	overlayColor = "rgba(139, 125, 107, 0.95)", // Brown/taupe overlay
	textColor = "text-white",

	// Background
	backgroundImage = "/landing/images/coffee.jpg",
	backgroundFit = "cover",

	// Layout
	overlayWidth = "45%", // Width of the left overlay section (can also use px like "420px")
	overlayMarginLeft = "0px", // Margin left for the overlay rectangle

	// Heights
	minHeights = {
		base: "min-h-[400px]",
		sm: "sm:min-h-[500px]",
		md: "md:min-h-[600px]",
		lg: "lg:min-h-[700px]",
		xl: "xl:min-h-[800px]",
	},

	// Button
	showButton = true,
	buttonText = "SHOP NOW",
	buttonHref,
	onButtonClick,

	// Additional props
	containerClassName = "",
	showIcon = true,
	logoVariant = "white", // "white" or "brown" - determines which logo SVG to use
}) => {
	const minHeightClasses = Object.values(minHeights || {}).join(" ");

	const handleButtonClick = (e) => {
		if (onButtonClick) onButtonClick(e);
	};

	return (
		<div className={`${containerClassName}`}>
				{/* Mobile Layout: Split Grid */}
				<div className="lg:hidden grid grid-cols-1 gap-0 overflow-hidden items-stretch">
					{/* Image Section - First on mobile */}
					<div className="order-1">
						<AnimatedContent
							distance={50}
							direction="horizontal"
							reverse={true}
							duration={0.8}
							ease="easeOut"
							initialOpacity={0}
							animateOpacity
							threshold={0.1}
						>
							<div
								className={`${minHeightClasses}`}
								style={{
									backgroundImage: `url(${backgroundImage})`,
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize:
										backgroundFit === "contain"
											? "contain"
											: backgroundFit === "fill"
											? "100% 100%"
											: "cover",
								}}
							/>
						</AnimatedContent>
					</div>

					{/* Content Section - Second on mobile */}
					<div className="order-2">
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
							<div
								className={`flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 ${minHeightClasses}`}
								style={{
									backgroundColor: overlayColor,
								}}
							>
								<div className="max-w-md text-center space-y-6">
									{/* Logo */}
									{showIcon && (
										<AnimatedContent
											distance={20}
											direction="vertical"
											reverse={false}
											duration={0.6}
											ease="easeOut"
											initialOpacity={0}
											animateOpacity
											scale={1.1}
											threshold={0.1}
											delay={0.1}
										>
											<LogoIcon
												className="w-16 h-16 mx-auto"
												variant={logoVariant}
											/>
										</AnimatedContent>
									)}

                                    {/* Subtitle */}
                                    {subtitle && (
                                        <AnimatedContent
                                            distance={15}
                                            direction="vertical"
                                            reverse={false}
                                            duration={0.5}
                                            ease="easeOut"
                                            initialOpacity={0}
                                            animateOpacity
                                            threshold={0.1}
                                            delay={0.2}
                                        >
                                            <p
                                                className={`${textColor} font-inter font-normal text-[16px] leading-[24px] tracking-[0] text-center opacity-90`}
                                            >
                                                {subtitle}
                                            </p>
                                        </AnimatedContent>
                                    )}

                                    {/* Main Title */}
                                    {title && (
                                        <AnimatedContent
                                            distance={20}
                                            direction="vertical"
                                            reverse={false}
                                            duration={0.6}
                                            ease="easeOut"
                                            initialOpacity={0}
                                            animateOpacity
                                            threshold={0.1}
                                            delay={0.3}
                                        >
                                            <h1
                                                className={`${textColor} font-garamond font-bold text-[36px] leading-[40px] tracking-[0.04em] text-center`}
                                            >
                                                {title}
                                            </h1>
                                        </AnimatedContent>
                                    )}

									{/* Button */}
									{showButton && (
										<AnimatedContent
											distance={15}
											direction="vertical"
											reverse={false}
											duration={0.5}
											ease="bounce.out"
											initialOpacity={0}
											animateOpacity
											scale={1.05}
											threshold={0.1}
											delay={0.4}
										>
											<motion.a
												href={buttonHref}
												onClick={handleButtonClick}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.98 }}
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 25,
												}}
												className="inline-block bg-white text-gray-800 font-maison-neue font-normal text-sm tracking-widest uppercase px-8 py-3 mt-4 hover:bg-gray-100 transition-colors duration-200"
												style={{
													fontWeight: 400,
													letterSpacing: "1.4px",
												}}
												role={
													buttonHref
														? "link"
														: "button"
												}
												aria-label={buttonText}
											>
												{buttonText}
											</motion.a>
										</AnimatedContent>
									)}
								</div>
							</div>
						</AnimatedContent>
					</div>
				</div>

				{/* Desktop Layout: Flexible Layout with overlayWidth */}
				<div className="hidden lg:block">
					<div className="relative overflow-hidden">
						{/* Background Image - Full Width */}
						<div
							className={`${minHeightClasses}`}
							style={{
								backgroundImage: `url(${backgroundImage})`,
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundSize:
									backgroundFit === "contain"
										? "contain"
										: backgroundFit === "fill"
										? "100% 100%"
										: "cover",
							}}
						/>

						{/* Content Overlay Section - Positioned with overlayWidth and offset */}
						<div
							className="absolute top-0 left-0 h-full"
							style={{
								width: overlayWidth,
								marginLeft: overlayMarginLeft,
							}}
						>
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
								<div
									className={`flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 lg:px-20 h-full ${minHeightClasses}`}
									style={{
										backgroundColor: overlayColor,
									}}
								>
									<div className="max-w-md text-center space-y-6">
										{/* Logo */}
										{showIcon && (
											<AnimatedContent
												distance={20}
												direction="vertical"
												reverse={false}
												duration={0.6}
												ease="easeOut"
												initialOpacity={0}
												animateOpacity
												scale={1.1}
												threshold={0.1}
												delay={0.1}
											>
												<LogoIcon
													className="w-16 h-16 mx-auto"
													variant={logoVariant}
												/>
											</AnimatedContent>
										)}

                                        {/* Subtitle */}
                                        {subtitle && (
                                            <AnimatedContent
                                                distance={15}
                                                direction="vertical"
                                                reverse={false}
                                                duration={0.5}
                                                ease="easeOut"
                                                initialOpacity={0}
                                                animateOpacity
                                                threshold={0.1}
                                                delay={0.2}
                                            >
                                                <p
                                                    className={`${textColor} font-inter font-normal text-[16px] leading-[24px] tracking-[0] text-center opacity-90`}
                                                >
                                                    {subtitle}
                                                </p>
                                            </AnimatedContent>
                                        )}

                                        {/* Main Title */}
                                        {title && (
                                            <AnimatedContent
                                                distance={20}
                                                direction="vertical"
                                                reverse={false}
                                                duration={0.6}
                                                ease="easeOut"
                                                initialOpacity={0}
                                                animateOpacity
                                                threshold={0.1}
                                                delay={0.3}
                                            >
                                                <h1
                                                    className={`${textColor} font-garamond font-bold text-[36px] leading-[40px] tracking-[0.04em] text-center`}
                                                >
                                                    {title}
                                                </h1>
                                            </AnimatedContent>
                                        )}

										{/* Button */}
										{showButton && (
											<AnimatedContent
												distance={15}
												direction="vertical"
												reverse={false}
												duration={0.5}
												ease="bounce.out"
												initialOpacity={0}
												animateOpacity
												scale={1.05}
												threshold={0.1}
												delay={0.4}
											>
												<motion.a
													href={buttonHref}
													onClick={handleButtonClick}
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.98 }}
													transition={{
														type: "spring",
														stiffness: 400,
														damping: 25,
													}}
													className="inline-block bg-white text-gray-800 font-maison-neue font-normal text-sm tracking-widest uppercase px-8 py-3 mt-4 hover:bg-gray-100 transition-colors duration-200"
													style={{
														fontWeight: 400,
														letterSpacing: "1.4px",
													}}
													role={
														buttonHref
															? "link"
															: "button"
													}
													aria-label={buttonText}
												>
													{buttonText}
												</motion.a>
											</AnimatedContent>
										)}
									</div>
								</div>
							</AnimatedContent>
						</div>
					</div>
				</div>
		</div>
	);
};

export default CoffeeHero;
