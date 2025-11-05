const Footer = () => {
	return (
		<div className="w-full bg-[#3A3845] text-white">
			{/* Main Footer Content */}
			<footer className="footer text-white text-left w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-white">
				{/* MOON Logo Section */}
				<div className="lg:col-span-1 lg:border-r border-white">
					<div className="flex items-center gap-2 mb-4 text-left">
						<img
							src="/landing/icons/LogoNameBig.svg"
							alt="Moon Logo"
							className="h-12 w-auto"
						/>
					</div>
					<p className="text-sm text-white mb-6 font-['Maison_Neue'] leading-relaxed text-left">
						Lorem ipsum dolor sit amet consectetur adipiscing elit
						aliquam mauris sed ma
					</p>
					<button className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-[#4A4A4A] font-['Maison_Neue'] px-6">
						GET STARTED →
					</button>
				</div>

				{/* About Us Section */}
				<nav className="flex flex-col pl-5 ">
					<h6 className="footer-title !text-white opacity-100 mb-4 font-['Maison_Neue'] font-semibold text-base ">
						ABOUT US
					</h6>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Mission
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Our team
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Awards
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Testimonials
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Privacy policy
					</a>
				</nav>

				{/* Services Section */}
				<nav className="flex flex-col">
					<h6 className="footer-title !text-white opacity-100 mb-4 font-['Maison_Neue'] font-semibold text-base">
						SERVICES
					</h6>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Web design
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Web development
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Mobile design
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						UI/UX design
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Branding design
					</a>
				</nav>

				{/* Portfolio Section */}
				<nav className="flex flex-col">
					<h6 className="footer-title !text-white opacity-100 mb-4 font-['Maison_Neue'] font-semibold text-base">
						PORTFOLIO
					</h6>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Corporate websites
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						E-commerce
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Mobile apps
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						Landing pages
					</a>
					<a className="link link-hover !text-white hover:!text-white mb-2 font-['Maison_Neue'] text-sm">
						UI/UX projects
					</a>
				</nav>
			</footer>

			{/* Bottom Footer */}
			<div className="border-t border-gray-600">
				<footer className="footer footer-horizontal !text-white w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
					<aside className="text-left">
						<p className="font-['Maison_Neue'] text-sm !text-white">
							Copyright © 2023 Moon| All Rights Reserved
						</p>
					</aside>
					<nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
						<a className="link link-hover !text-white hover:!text-white font-['Maison_Neue'] text-sm">
							Terms and Conditions
						</a>
						<a className="link link-hover !text-white hover:!text-white font-['Maison_Neue'] text-sm">
							Privacy Policy
						</a>
					</nav>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
