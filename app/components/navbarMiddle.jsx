"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SearchDropDown from "./searchDropDown";
import CartDrawer from "./CartDrawer";
import { usePathname } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
const NavbarMiddle = () => {
	const pathname = usePathname();
	const { user, logout } = useUser();

	const navItems = [
		{
			label: "Home",
			href: "/",
			active: pathname === "/",
		},
		{
			label: "Shop",
			href: "/shop",
			active: pathname === "/shop",
		},
		{
			label: "About",
			href: "/about",
			active: pathname === "/about",
		},
		{
			label: "Contact",
			href: "/contact",
			active: pathname === "/contact",
		},
	];

	if (user && user.role === "admin") {
		navItems.push({
			label: "Admin",
			href: "/admin",
			active: pathname === "/admin",
		});
	}
	return (
		<div>
			<div className="navbar bg-base-100 shadow-sm border-b border-[#DDDBDC] min-h-[56px] px-2 sm:px-4">
				<div className="navbar-start">
					{/* Mobile navigation - visible on small screens */}
					<div className="dropdown lg:hidden">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							{navItems.map((item) => (
								<motion.li
									key={item.label}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: "spring",
										stiffness: 600,
										damping: 25,
									}}
									className={`rounded-lg transition-colors ${
										item.active
											? "bg-primary text-primary-content"
											: "hover:bg-base-200"
									}`}
								>
									{item.href ? (
										<Link
											href={item.href}
											className="block w-full h-full"
										>
											<div className="w-full px-[12px] py-[12px] flex items-center justify-start">
												<p className="h-[16px] whitespace-nowrap">
													{item.label}
												</p>
											</div>
										</Link>
									) : (
										<div className="w-full px-[12px] py-[12px] flex items-center justify-start cursor-pointer">
											<p className="h-[16px] whitespace-nowrap">
												{item.label}
											</p>
										</div>
									)}
								</motion.li>
							))}
						</ul>
					</div>
					{/* Desktop logo - visible on large screens */}
					<div className="hidden lg:flex pl-44">
						<Link href="/" className="flex items-center">
							<img
								src="/landing/icons/logoName.svg"
								alt="Logo"
								className="h-8 w-auto"
							/>
						</Link>
					</div>
				</div>

				{/* Center section - Mobile logo and Desktop navigation links */}
				<div className="navbar-center">
					{/* Mobile logo - visible on small screens */}
					<div className="flex lg:hidden">
						<Link href="/" className="flex items-center">
							<img
								src="/landing/icons/logoName.svg"
								alt="Logo"
								className="h-8 w-auto"
							/>
						</Link>
					</div>

					{/* Desktop navigation links - visible on large screens */}
					<div className="hidden lg:flex">
						<ul className="menu menu-horizontal px-1 gap-2">
							{navItems.map((item) => (
								<motion.li
									key={item.label}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: "spring",
										stiffness: 600,
										damping: 25,
									}}
									className={`rounded-lg transition-colors ${
										item.active
											? "bg-primary text-primary-content"
											: "hover:bg-[#00000F14]"
									}`}
								>
									{item.href ? (
										<Link
											href={item.href}
											className="block w-full h-full"
										>
											<div className="px-4 py-2 w-full h-full">
												<span className="font-medium">
													{item.label}
												</span>
											</div>
										</Link>
									) : (
										<div className="px-4 py-2 w-full h-full cursor-pointer">
											<span className="font-medium">
												{item.label}
											</span>
										</div>
									)}
								</motion.li>
							))}
						</ul>
					</div>
				</div>

			{/* icons start */}
			<div className="navbar-end">
				<div className="flex items-center gap-4">
                    {/* User Icon - Mobile only */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 600,
                                    damping: 25,
                                }}
                                className="btn btn-ghost btn-circle"
                            >
                                {user ? (
                                    <div className="relative">
                                        <img
                                            src={user.image || "/landing/icons/userIcon.svg"}
                                            alt={user.name}
                                            width="24"
                                            height="24"
                                            className="w-6 h-6 rounded-full object-cover"
                                        />
                                        {user.role === "admin" && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
                                        )}
                                    </div>
                                ) : (
                                    <img
                                        src="/landing/icons/userIcon.svg"
                                        alt="User"
                                        width="20"
                                        height="20"
                                        className="w-5 h-5"
                                    />
                                )}
                            </motion.button>
                        </div>
						<ul
							tabIndex="-1"
							className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
						>
							{user ? (
								<>
									<li className="menu-title">
										<span className="text-xs text-gray-500">
											{user.name}
											{user.role === "admin" && (
												<span className="ml-2 px-1 py-0.5 bg-red-100 text-red-800 text-xs rounded">
													Admin
												</span>
											)}
										</span>
									</li>
									<li>
										<Link href="/profile">Profile</Link>
									</li>
									<li>
										<button onClick={logout}>Logout</button>
									</li>
								</>
							) : (
								<>
									<li>
										<Link href="/signup">Signup</Link>
									</li>
									<li>
										<Link href="/login">Login</Link>
									</li>
								</>
							)}
						</ul>
					</div>
                    {/* User Icon - Desktop only */}
                    <div className="dropdown dropdown-end hidden lg:block">
                            <div tabIndex={0} role="button" className="">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 25,
                                    }}
                                    className="btn btn-ghost btn-circle"
                                >
                                    {user ? (
                                        <div className="relative">
                                            <img
                                                src={user.image || "/landing/icons/userIcon.svg"}
                                                alt={user.name}
                                                width="24"
                                                height="24"
                                                className="w-6 h-6 rounded-full object-cover"
                                            />
                                            {user.role === "admin" && (
                                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
                                            )}
                                        </div>
                                    ) : (
                                        <img
                                            src="/landing/icons/userIcon.svg"
                                            alt="User"
                                            width="20"
                                            height="20"
                                            className="w-5 h-5"
                                        />
                                    )}
                                </motion.button>
                            </div>
							<ul
								tabIndex="-1"
								className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
							>
								{user ? (
									<>
										<li className="menu-title">
											<span className="text-xs text-gray-500">
												{user.name}
												{user.role === "admin" && (
													<span className="ml-2 px-1 py-0.5 bg-red-100 text-red-800 text-xs rounded">
														Admin
													</span>
												)}
											</span>
										</li>
										<li>
											<Link href="/profile">Profile</Link>
										</li>
										<li>
											<button onClick={logout}>
												Logout
											</button>
										</li>
									</>
								) : (
									<>
										<li>
											<Link href="/signup">Signup</Link>
										</li>
										<li>
											<Link href="/login">Login</Link>
										</li>
									</>
								)}
							</ul>
						</div>
                        {/* Cart Drawer Component - Always visible */}
                        <CartDrawer />

                        {/* Favorites Button - Always visible */}
                        <Link href="/profile?tab=favorites" title="Favorites" aria-label="Favorites">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 600, damping: 25 }}
                                className="btn btn-ghost btn-circle"
                            >
                                <img
                                    src="/landing/icons/favorites.svg"
                                    alt="Favorites"
                                    width="20"
                                    height="20"
                                    className="w-5 h-5"
                                />
                            </motion.button>
                        </Link>

                        {/* Search Dropdown - Desktop only */}
                        <div className="hidden lg:block">
                            <SearchDropDown />
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarMiddle;
