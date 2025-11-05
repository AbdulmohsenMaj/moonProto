"use client";

import AnimatedContent from "@/app/effect/AnimatedContent";
import { motion } from "framer-motion";

const CategoryCards = ({
    containerClassName = "py-16",
    cardClassName = "",
    backgroundImage = "/landing/images/coffee.jpg",
    data = null,
    // New optional props to allow reuse as a generic horizontal scroller
    forceHorizontal = false,
    cardWidthClass = "w-72",
    cardMinWidth = "18rem",
    imageClassName = "",
    hideText = false,
    onItemClick = null,
    selectedIndex = null,
}) => {
	// Default category data for mapping
	const defaultCategories = [
		{
			id: 1,
			title: "TABLEWARE",
			image: backgroundImage,
			href: "/tableware",
		},
		{
			id: 2,
			title: "HOME DECOR",
			image: backgroundImage,
			href: "/home-decor",
		},
		{
			id: 3,
			title: "HOLIDAY",
			image: backgroundImage,
			href: "/holiday",
		},
		{
			id: 4,
			title: "COLLECTION",
			image: backgroundImage,
			href: "/collection",
		},
	];

	// Use provided data or default categories
	const categories = data || defaultCategories;

    return (
        <div className={containerClassName}>
            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className={forceHorizontal ? "block" : "block sm:hidden"}>
                {/* Mobile horizontal scroll container */}
                <div
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-4"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {categories.map((category, index) => (
                        <AnimatedContent
                            key={category.id}
							distance={30}
							direction="horizontal"
							reverse={false}
							duration={0.6}
							ease="easeOut"
							initialOpacity={0}
							animateOpacity
							scale={1.02}
							threshold={0.1}
							delay={index * 0.1}
						>
                            <motion.a
                                href={category.href || "#"}
                                onClick={(e) => {
                                    if (onItemClick) {
                                        e.preventDefault();
                                        onItemClick(index, category);
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                }}
                                className={`group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 ${cardWidthClass} snap-center ${selectedIndex === index ? "ring-2 ring-black" : ""} ${cardClassName}`}
                                style={{
                                    scrollSnapAlign: "center",
                                    minWidth: cardMinWidth,
                                }}
                            >
                                {/* Background Image */}
                                <div
                                    className={`${imageClassName || "aspect-square"} bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden bg-gray-200`}
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                    }}
                                ></div>

                                {/* Text Content Below Image */}
                                {!hideText && (
                                    <div className="pt-4 text-right">
                                        <h3 className="text-gray-900 font-inter font-semibold text-[18px] leading-[24px] tracking-[0.06em] uppercase">
                                            {category.title || category.name}
                                        </h3>
                                        {category.role && (
                                            <p className="text-gray-600 font-maison-neue text-sm mt-1">
                                                {category.role}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </motion.a>
                        </AnimatedContent>
                    ))}
                </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className={forceHorizontal ? "hidden" : "hidden sm:block px-4 sm:px-6 lg:px-8"}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <AnimatedContent
                                key={category.id}
								distance={30}
								direction="vertical"
								reverse={false}
								duration={0.6}
								ease="easeOut"
								initialOpacity={0}
								animateOpacity
								scale={1.02}
								threshold={0.1}
								delay={index * 0.1}
							>
                                <motion.a
                                    href={category.href || "#"}
                                    onClick={(e) => {
                                        if (onItemClick) {
                                            e.preventDefault();
                                            onItemClick(index, category);
                                        }
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25,
                                    }}
                                    className={`group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${selectedIndex === index ? "ring-2 ring-black" : ""} ${cardClassName}`}
                                >
                                    {/* Background Image */}
                                    <div
                                        className={`${imageClassName || "aspect-square"} bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden bg-gray-200`}
                                        style={{
                                            backgroundImage: `url(${category.image})`,
                                        }}
                                    ></div>

                                    {/* Text Content Below Image */}
                                    {!hideText && (
                                        <div className="pt-4 text-right">
                                            <h3 className="text-gray-900 font-inter font-semibold text-[18px] leading-[24px] tracking-[0.06em] uppercase">
                                                {category.title || category.name}
                                            </h3>
                                            {category.role && (
                                                <p className="text-gray-600 font-maison-neue text-sm sm:text-base mt-1">
                                                    {category.role}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </motion.a>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCards;
