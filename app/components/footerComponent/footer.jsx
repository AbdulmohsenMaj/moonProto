const Footer = () => {
	return (
		<div className="w-full bg-[#F5F4F4]">
			<footer className="footer sm:footer-horizontal text-base-content w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
				<nav>
					<h6 className="footer-title opacity-100%">Account</h6>
					<a className="link link-hover">Log in</a>
					<a className="link link-hover">Sign up</a>
					<a className="link link-hover">Redeem a Gift Card</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About</a>
					<a className="link link-hover">Environmental Initiatives</a>
					<a className="link link-hover">Factories</a>
					<a className="link link-hover">DEI</a>
					<a className="link link-hover">Careers</a>
					<a className="link link-hover">International</a>
					<a className="link link-hover">Accessibility</a>
				</nav>
				<nav>
					<h6 className="footer-title">Get Help</h6>
					<a className="link link-hover">Help Center</a>
					<a className="link link-hover">Return Policy</a>
					<a className="link link-hover">Shipping Info</a>
					<a className="link link-hover">Bulk Orders</a>
				</nav>
				<nav>
					<p className="footer-title">Connect</p>
					<a className="link link-hover">Facebook</a>
					<a className="link link-hover">Instagram</a>
					<a className="link link-hover">Twitter</a>
					<a className="link link-hover">Affiliates</a>
					<a className="link link-hover">Our Stores</a>
				</nav>
				{/* Newsletter subscription form */}
				<form className="w-full">
					<fieldset className="w-full max-w-sm">
						<div className="join h-auto">
							<input
								type="text"
								placeholder="Email address"
								className="input input-bordered join-item w-full h-[48px]"
							/>
							<button className="btn btn-primary join-item w-12 h-[48px] bg-[#262626]">
								{/* Arrow icon SVG starts here */}
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_104_217)">
										<path
											d="M3.75 12.5H20.25"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M13.5 5.75L20.25 12.5L13.5 19.25"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_104_217">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(0 0.5)"
											/>
										</clipPath>
									</defs>
								</svg>

								{/* Arrow icon SVG ends here */}
							</button>
						</div>
					</fieldset>
				</form>
			</footer>
			<footer className="footer footer-horizontal text-base-content border-base-300 w-full grid grid-rows-2 justify-center items-center px-4 sm:px-6 md:px-8 py-6 gap-4">
				<div className="w-full">
					<nav className="footer md:footer-horizontal flex flex-wrap justify-center gap-2 sm:gap-3 md:grid md:grid-rows-1 md:gap-4">
						<a className="link link-hover md:pr-22 whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							Privacy Policy
						</a>
						<a className="link link-hover md:pr-22 whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							Terms of Service
						</a>
						<a className="link link-hover md:pr-22 whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							Do Not Sell or Share My Personal Information
						</a>
						<a className="link link-hover md:pr-22 whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							CS Supply Chain Transparency
						</a>
						<a className="link link-hover md:pr-22 whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							Vendor Code of Conduct
						</a>
						<a className="link link-hover md:pr-22 whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							Sitemap Pages
						</a>
						<a className="link link-hover whitespace-normal break-words text-center text-[12px] sm:text-[13px] md:text-base">
							Sitemap Products
						</a>
					</nav>
				</div>

				<aside className="justify-self-center">
					<p className="mt-3">© 2023 All Rights Reserved</p>
				</aside>
			</footer>
		</div>
	);
};

export default Footer;
