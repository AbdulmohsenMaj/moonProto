"use client";

import AnimatedContent from "@/app/effect/AnimatedContent";
import { motion } from "framer-motion";

// Positioning helpers (optional overlay placement for title/description)
const POSITION_ALIASES = {
    "center left": "center-left",
    "left center": "center-left",
    "middle left": "center-left",
    "left middle": "center-left",
    "right middle": "center-right",
    "middle right": "center-right",
    middle: "center",
    "left bottom": "bottom-left",
    "bottom left": "bottom-left",
    "right bottom": "bottom-right",
    "bottom right": "bottom-right",
};

const POSITION_CLASSES = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "center-left": "top-1/2 left-4 -translate-y-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "center-right": "top-1/2 right-4 -translate-y-1/2",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
};

function normalizePosition(pos) {
    if (!pos) return null;
    const key = String(pos).toLowerCase().trim();
    return POSITION_ALIASES[key] || key;
}

function getPlacementClasses(pos) {
    const norm = normalizePosition(pos);
    if (!norm) return "";
    return POSITION_CLASSES[norm] || POSITION_CLASSES.center;
}

function getHorizontalAlignClasses(pos) {
    const norm = normalizePosition(pos);
    if (!norm) return "items-center text-center";
    if (norm.includes("left")) return "items-start text-left";
    if (norm.includes("right")) return "items-end text-right";
    return "items-center text-center";
}

// HeroModular: a configurable hero built from the existing hero.jsx styles
const HeroModular = ({
	// Text
	title = "Your Cozy Era",
	description = "Get peak comfy-chic with new winter essentials.",
	textColor = "text-white",
	textAlign = "center", // 'center' | 'left' | 'right'

	// Optional modular positioning (overlays)
	titlePosition,
	descriptionPosition,
	titleClassName = "",
	descriptionClassName = "",

	// Background
	backgroundImage = "/hero.png",
	backgroundFit = "cover", // 'cover' | 'contain' | 'fill'

	// Heights (Tailwind min-h classes per breakpoint)
	minHeights = {
		base: "min-h-[360px]",
		sm: "sm:min-h-[420px]",
		md: "md:min-h-[520px]",
		lg: "lg:min-h-[640px]",
		xl: "xl:min-h-[758px]",
	},

	// Content padding (kept identical to base hero)
	contentPadding = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12",
	contentGap = "gap-3",
	containerClassName = "",

	// Button
	showButton = true,
	buttonText = "SHOP NOW",
	buttonHref,
	onButtonClick,
	buttonClassName = "btn bg-white border-0 justify-self-center w-[200px] sm:w-[220px] md:w-[240px] h-[44px] gap-[10px] opacity-100 px-[16px]",
}) => {
	const minHeightClasses = Object.values(minHeights || {}).join(" ");

	// Typography bases (without alignment) so we can reuse with overlay alignment
	const titleTypographyBase =
		"font-maison-neue font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[34px] sm:leading-[40px] md:leading-[48px] lg:leading-[55.2px] tracking-[0.92px]";
	const descTypographyBase =
		"pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-5 md:pb-6 font-maison-neue font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px]";

	const titleClasses = `${titleTypographyBase} ${textColor} ${
		textAlign === "left"
			? "text-left"
			: textAlign === "right"
			? "text-right"
			: "text-center"
	}`;

	const descClasses = `${descTypographyBase} ${textColor} ${
		textAlign === "left"
			? "text-left"
			: textAlign === "right"
			? "text-right"
			: "text-center"
	}`;

	const justifySelf = textAlign === "center" ? "justify-self-center" : "";

	const buttonTypo = {
		fontFamily: "Maison Neue",
		fontWeight: 400,
		fontStyle: "normal",
		fontSize: "14px",
		lineHeight: "16.8px",
		letterSpacing: "1.4px",
		textAlign: "center",
	};

	const handleButtonClick = (e) => {
		if (onButtonClick) onButtonClick(e);
	};

	// Overlay alignment override
	const overlayTitleAlign = getHorizontalAlignClasses(titlePosition).split(" ").find((c) => c.startsWith("text-"));
	const overlayDescAlign = getHorizontalAlignClasses(descriptionPosition).split(" ").find((c) => c.startsWith("text-"));
	const useTitleOverlay = !!normalizePosition(titlePosition);
	const useDescOverlay = !!normalizePosition(descriptionPosition);
	const sameSpot =
		useTitleOverlay &&
		useDescOverlay &&
		normalizePosition(titlePosition) === normalizePosition(descriptionPosition);

	return (
		<div
			className={`hero relative ${minHeightClasses} flex justify-center items-center bg-center bg-no-repeat ${containerClassName}`}
			role="region"
			aria-label={title}
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
		>
			<div
				className={`hero-content text-neutral-content w-full max-w-[680px] ${contentPadding} grid ${contentGap}`}
			>
				{title && !useTitleOverlay && (
					<h1 className={`${titleClasses} ${titleClassName}`}>{title}</h1>
				)}

				{description && !useDescOverlay && (
					<p className={`${descClasses} ${descriptionClassName}`}>{description}</p>
				)}

				{showButton && (
					<div className={justifySelf}>
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
							<motion.a
								href={buttonHref}
								onClick={handleButtonClick}
								whileHover={{ scale: 1.12 }}
								whileTap={{ scale: 0.96 }}
								transition={{
									type: "spring",
									stiffness: 600,
									damping: 25,
								}}
								className={buttonClassName}
								style={buttonTypo}
								role={buttonHref ? "link" : "button"}
								aria-label={buttonText}
							>
								{buttonText}
							</motion.a>
						</AnimatedContent>
						</div>
					)}
			</div>

			{/* Optional overlay-positioned title/description */}
			{sameSpot ? (
				<div
					className={`absolute ${getPlacementClasses(titlePosition)} flex flex-col ${getHorizontalAlignClasses(titlePosition)} ${contentGap} ${contentPadding}`}
				>
					{title && useTitleOverlay && (
						<h1 className={`${titleTypographyBase} ${textColor} ${overlayTitleAlign} ${titleClassName}`}>{title}</h1>
					)}
					{description && useDescOverlay && (
						<p className={`${descTypographyBase} ${textColor} ${overlayDescAlign} ${descriptionClassName}`}>{description}</p>
					)}
				</div>
			) : (
				<>
					{title && useTitleOverlay && (
						<div
							className={`absolute ${getPlacementClasses(titlePosition)} flex ${getHorizontalAlignClasses(titlePosition)} ${contentPadding}`}
						>
							<h1 className={`${titleTypographyBase} ${textColor} ${overlayTitleAlign} ${titleClassName}`}>{title}</h1>
						</div>
					)}
					{description && useDescOverlay && (
						<div
							className={`absolute ${getPlacementClasses(descriptionPosition)} flex ${getHorizontalAlignClasses(descriptionPosition)} ${contentPadding}`}
						>
							<p className={`${descTypographyBase} ${textColor} ${overlayDescAlign} ${descriptionClassName}`}>{description}</p>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default HeroModular;
