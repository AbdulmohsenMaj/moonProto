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
			label: "Women",
			href: "/women",
			active: pathname === "/women",
		},
		{
			label: "Men",
			href: "/men",
			active: pathname === "/men",
		},
		{
			label: "About",
			href: "/about",
			active: pathname === "/about",
		},
		{
			label: "Everworld Stories",
			href: "/everworld",
			active: pathname === "/everworld",
		},
	];
	return (
		<div>
			<div className="navbar bg-base-100 shadow-sm border-b border-[#DDDBDC] min-h-[56px] px-2 sm:px-4">
				<div className="navbar-start">
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
								<li key={item.label}>
									{item.href ? (
										<Link href={item.href}>
											<motion.div
												whileHover={{ scale: 1.12 }}
												whileTap={{ scale: 0.96 }}
												transition={{
													type: "spring",
													stiffness: 600,
													damping: 25,
												}}
												className="w-full px-[12px] py-[12px] flex items-center justify-start cursor-pointer"
											>
												<p className="h-[16px] whitespace-nowrap">
													{item.label}
												</p>
											</motion.div>
										</Link>
									) : (
										<motion.div
											whileHover={{ scale: 1.12 }}
											whileTap={{ scale: 0.96 }}
											transition={{
												type: "spring",
												stiffness: 600,
												damping: 25,
											}}
											className="w-full px-[12px] py-[12px] flex items-center justify-start cursor-pointer"
										>
											<p className="h-[16px] whitespace-nowrap">
												{item.label}
											</p>
										</motion.div>
									)}
								</li>
							))}
						</ul>
					</div>
					{/* Desktop navigation - hidden on small screens */}
					<div className="hidden lg:flex w-auto ">
						<ul className="menu menu-horizontal px-8 xl:px-20 h-[56px] gap-[12px] ">
							{navItems.map((item) => (
								<li key={item.label}>
									{item.href ? (
										<Link href={item.href}>
											<motion.div
												whileHover={{ scale: 1.12 }}
												whileTap={{ scale: 0.96 }}
												transition={{
													type: "spring",
													stiffness: 600,
													damping: 25,
												}}
												className={`mx-[12px] my-[15px] flex items-center justify-center whitespace-nowrap cursor-pointer ${
													item.active
														? "underline underline-offset-[21px] decoration-[3px]"
														: ""
												}`}
											>
												<p className="">{item.label}</p>
											</motion.div>
										</Link>
									) : (
										<motion.div
											whileHover={{ scale: 1.12 }}
											whileTap={{ scale: 0.96 }}
											transition={{
												type: "spring",
												stiffness: 600,
												damping: 25,
											}}
											className={`h-[56px] mx-[12px] my-[20px] flex items-center justify-center whitespace-nowrap cursor-pointer ${
												item.active
													? "text-black underline underline-offset-[21px] decoration-[3px]"
													: ""
											}`}
										>
											<p className="h-[16px]">
												{item.label}
											</p>
										</motion.div>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					{/* logo */}
					<Link href="/" className="btn btn-ghost text-xl">
						<svg
							width="128"
							height="14"
							viewBox="0 0 128 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_39_122)">
								<path
									d="M61.7548 13.99C60.6908 13.99 59.7566 14.01 58.7975 13.97C58.6351 13.97 58.4403 13.7203 58.3329 13.5554C57.3721 11.9735 56.4221 10.3857 55.4829 8.79215C55.4218 8.652 55.3178 8.53487 55.1858 8.45766C55.0538 8.38045 54.9007 8.34714 54.7486 8.36254C53.9618 8.39001 53.175 8.36254 52.3083 8.36254V13.9451H49.5233V0.059947C49.6056 0.0417776 49.689 0.029261 49.773 0.022482C52.3732 0.022482 54.9759 -0.0399642 57.5736 0.0399644C60.8482 0.139875 62.704 3.50937 61.1054 6.34184C60.5059 7.40339 59.5543 7.99037 58.3129 8.29509C59.4569 10.1834 60.5759 12.0343 61.7548 13.99ZM52.3457 2.75005V5.68243C54.1366 5.68243 55.8776 5.7149 57.616 5.66744C58.3903 5.64496 58.8824 5.00054 58.8799 4.23622C58.8774 3.4719 58.3804 2.78751 57.646 2.76753C55.8876 2.71258 54.1292 2.75005 52.3457 2.75005Z"
									fill="#262626"
								/>
								<path
									d="M98.3447 0.0174817C99.1839 0.0174817 99.9757 -0.00999335 100.763 0.0374643C101.011 0.0886513 101.231 0.232419 101.377 0.439605C103.438 3.23378 105.489 6.03628 107.529 8.8471C107.644 9.00696 107.779 9.15682 108.011 9.45905V0.0524503H110.776V13.99C109.904 13.99 109.028 14.0175 108.171 13.9675C107.986 13.9675 107.789 13.6878 107.649 13.5004C105.617 10.7329 103.592 7.96289 101.572 5.19037C101.454 5.02801 101.322 4.87315 101.072 4.55843V13.96H98.3247L98.3447 0.0174817Z"
									fill="#262626"
								/>
								<path
									d="M32.8232 0.0349693H43.8508V2.75004H35.6307V5.63247H42.9391V8.34505H35.6232V11.2275H43.8458V13.9575H32.8232V0.0349693Z"
									fill="#262626"
								/>
								<path
									d="M126.744 5.61999V8.33506H119.413V11.225H127.616V13.955H116.588V0.06744H127.631V2.75005H119.388V5.61749L126.744 5.61999Z"
									fill="#262626"
								/>
								<path
									d="M-0.00500488 13.9351V0.0524521H11.0451V2.75004H2.80249V5.60999H10.1684V8.35754H2.7925V11.2175H11.0551V13.9351H-0.00500488Z"
									fill="#262626"
								/>
								<path
									d="M80.1959 13.99C80.7429 12.6287 81.2625 11.3424 81.777 10.056C83.0459 6.89634 84.3222 3.74166 85.5711 0.564497C85.7435 0.124889 85.9633 -0.0399623 86.4353 2.01724e-06C86.9923 0.0474596 87.5593 -0.0224778 88.1163 0.0274776C88.235 0.0411643 88.3492 0.0809602 88.4507 0.144012C88.5522 0.207063 88.6385 0.291804 88.7033 0.39215C90.51 4.83818 92.3034 9.28754 94.0835 13.7402C94.1072 13.8218 94.1231 13.9054 94.131 13.99C93.2443 13.99 92.3825 14.0075 91.5183 13.975C91.4276 13.9538 91.3428 13.9125 91.2701 13.8542C91.1975 13.7958 91.1389 13.7219 91.0987 13.6378C90.8014 12.9534 90.5292 12.2541 90.2744 11.5522C90.2437 11.4127 90.1617 11.2898 90.0447 11.2079C89.9276 11.126 89.7841 11.0911 89.6425 11.1101C87.9989 11.1301 86.3562 11.1301 84.7144 11.1101C84.5723 11.0924 84.4287 11.1285 84.3118 11.2112C84.1949 11.2939 84.1131 11.4173 84.0825 11.5572C83.8327 12.2166 83.5329 12.8585 83.3056 13.5254C83.1733 13.9126 82.9659 14.025 82.5763 14C81.8145 13.965 81.0502 13.99 80.1959 13.99ZM89.033 8.47743C88.4136 6.88635 87.8316 5.3827 87.2471 3.87904L87.0948 3.90152C86.5028 5.40018 85.9083 6.91383 85.2914 8.47743H89.033Z"
									fill="#262626"
								/>
								<path
									d="M14.9067 0.0199843C15.8858 0.0199843 16.7575 -0.00499676 17.6243 0.0399631C17.7891 0.0399631 18.0139 0.289743 18.0888 0.479573C19.2703 3.40946 20.4317 6.34683 21.5857 9.28171C21.6856 9.53149 21.793 9.76878 21.9629 10.1684C22.1252 9.78376 22.2351 9.53149 22.3375 9.27422C23.494 6.35682 24.6555 3.44443 25.7895 0.519538C25.8283 0.354055 25.9294 0.209873 26.0717 0.116871C26.214 0.0238695 26.3866 -0.0108222 26.5538 0.0199843C27.3206 0.0574508 28.0874 0.0199843 28.9316 0.0199843C28.7593 0.46209 28.6144 0.844246 28.4621 1.22391C26.8135 5.31026 25.1684 9.39578 23.5265 13.4805C23.3716 13.8701 23.1918 14.025 22.7772 14C22.0278 13.96 21.2785 14 20.5292 14C18.6533 9.33916 16.795 4.71829 14.9067 0.0199843Z"
									fill="#262626"
								/>
								<path
									d="M67.0477 0.0499573H69.7802V11.2275H77.1337V13.9451H67.0477V0.0499573Z"
									fill="#262626"
								/>
							</g>
							<defs>
								<clipPath id="clip0_39_122">
									<rect
										width="127.624"
										height="14"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>
					{/* logo end */}
				</div>
				<div className="navbar-end">
					<div className="flex items-center gap-4">
						{/* User Icon */}
						<div className="dropdown dropdown-end">
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
												src={user.image || "/user.svg"}
												alt={user.name}
												width="24"
												height="24"
												className="w-6 h-6 rounded-full object-cover"
											/>
											{user.role === 'admin' && (
												<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
											)}
										</div>
									) : (
										<img
											src="/user.svg"
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
												{user.role === 'admin' && (
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
						{/* Cart Drawer Component */}
						<CartDrawer />

						<SearchDropDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarMiddle;
