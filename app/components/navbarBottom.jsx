"use client";
import { motion } from "framer-motion";

const NavbarBottom = ({
	navItems = [
		{ label: "Holiday Gifting" },
		{ label: "New Arrivals" },
		{ label: "Best-Sellers" },
		{ label: "Clothing" },
		{ label: "Tops & Sweaters" },
		{ label: "Pants & Jeans" },
		{ label: "Outerwear" },
		{ label: "Shoes & Bags" },
		{ label: "Sale", highlight: true },
	],
}) => {
	// Function to convert label to URL-friendly slug
	const labelToSlug = (label) => {
		return label
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
			.replace(/\s+/g, "-") // Replace spaces with hyphens
			.replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
			.trim();
	};
	return (
		<div className="bg-base-100 shadow-sm flex justify-center">
			<div className="navbar navbar-center lg:hidden">
				<div className="overflow-x-auto">
					<ul className="flex horizontal px-1 gap-4">
						{navItems.map((item) => (
							<li key={item.label}>
								<motion.a
									href={
										item.href ||
										`/${labelToSlug(item.label)}`
									}
									whileHover={{ scale: 1.12 }}
									whileTap={{ scale: 0.96 }}
									transition={{
										type: "spring",
										stiffness: 600,
										damping: 25,
									}}
									className={`btn btn-ghost normal-case text-sm lg:text-md ${
										item.highlight ? "text-red-500" : ""
									}`}
								>
									{item.label}
								</motion.a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="hidden lg:flex justify-center w-full">
				<ul className="menu menu-horizontal h-[56px] px-1 gap-[12px]">
					{navItems.map((item) => (
						<li key={item.label}>
							<motion.a
								href={
									item.href || `/${labelToSlug(item.label)}`
								}
								whileHover={{ scale: 1.12 }}
								whileTap={{ scale: 0.96 }}
								transition={{
									type: "spring",
									stiffness: 600,
									damping: 25,
								}}
								className={`px-[12px] py-[12px] flex items-center justify-center whitespace-nowrap ${
									item.highlight ? "text-red-500" : ""
								}`}
							>
								{item.label}
							</motion.a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavbarBottom;
