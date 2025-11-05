import PromoSection from "../../../components/PromoSection";
import CategoryCards from "../../../components/CategoryCards";
import NewsletterSignup from "../../../components/NewsletterSignup";

const AboutPage = () => {
	// Team members data
	const teamMembers = [
		{
			id: 1,
			name: "BERNIE PATTERSON",
			role: "CEO & Founder",
			image: "/landing/images/coffee.jpg",
		},
		{
			id: 2,
			name: "OPHELIA VASE",
			role: "Creative Director",
			image: "/landing/images/coffee.jpg",
		},
		{
			id: 3,
			name: "CORBIN HOSSAIN",
			role: "Artist",
			image: "/landing/images/coffee.jpg",
		},
		{
			id: 4,
			name: "SEREN BOWL",
			role: "Marketing",
			image: "/landing/images/coffee.jpg",
		},
	];
	return (
		<div className="min-h-screen bg-base-100">
			{/* About Moon Section */}
			<div className="container mx-auto px-4 py-16">
				<div className="text-center max-w-2xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
						ABOUT MOON
					</h1>
					<p className="text-lg text-base-content/70 leading-relaxed">
						Moon's handmade ceramic products have been around since
						1650, let's explore our journey
					</p>
				</div>
			</div>

			{/* Timeline Sections */}
			<div className="w-full">
				{/* 1910 Section */}
				<PromoSection
					containerClassName=""
					backgroundImage="/landing/images/coffee.jpg"
					showButton={false}
					title="1910"
					titleSpan=""
					description="Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
					reverse={false}
				/>

				{/* 1990 Section */}
				<PromoSection
					containerClassName=""
					backgroundImage="/landing/images/coffee.jpg"
					showButton={false}
					title="1990"
					titleSpan=""
					description="Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisl, dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit"
					reverse={true}
				/>

				{/* 2010 Section */}
				<PromoSection
					containerClassName=""
					backgroundImage="/landing/images/coffee.jpg"
					showButton={false}
					title="2010"
					titleSpan=""
					description="Rutrum vitae risus eget, vulputate aliquam nisl sit gravida neque tempus, sit aliquam sit nullam neque ultrices."
					reverse={false}
				/>
			</div>

			{/* How We Works Section */}
			<div className="py-16 lg:py-24">
				<div className="px-4 sm:px-6">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden items-stretch">
							{/* Image Section */}
							<div className="lg:order-1">
								<div
									className="h-full min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
									style={{
										backgroundImage: `url(/landing/images/coffee.jpg)`,
									}}
								/>
							</div>

							{/* Text Content Section */}
							<div className="lg:order-2">
								<div className="bg-gray-50 p-12 lg:p-16 flex flex-col justify-center h-full min-h-[400px] lg:min-h-[500px]">
									<div className="max-w-md mx-auto text-left">
										<h2 className="text-4xl lg:text-5xl font-maison-neue font-normal text-gray-900 mb-12 leading-tight">
											HOW WE WORKS
										</h2>

										{/* Product design section */}
										<div className="mb-8">
											<h3 className="text-xl font-maison-neue font-normal text-gray-900 mb-3">
												Product design
											</h3>
											<p className="text-gray-600 text-base leading-relaxed">
												Lorem ipsum dolor sit amet
												consectetur adipiscing elit
												mattis sit phasellus mollis.
											</p>
										</div>

										{/* Crafted section */}
										<div className="mb-8">
											<h3 className="text-xl font-maison-neue font-normal text-gray-900 mb-3">
												Crafted
											</h3>
											<p className="text-gray-600 text-base leading-relaxed">
												Rutrum vitae risus eget,
												vulputate aliquam nisl ex
												gravida neque tempus.
											</p>
										</div>

										{/* Sell product section */}
										<div>
											<h3 className="text-xl font-maison-neue font-normal text-gray-900 mb-3">
												Sell product
											</h3>
											<p className="text-gray-600 text-base leading-relaxed">
												Maecenas sem eros, rutrum vitae
												risus eget, vulputate aliquam
												nisl.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Meet Our Team Section */}
			<div className="py-16 bg-white">
				<div className="text-center mb-8">
					<h2 className="text-4xl lg:text-5xl font-maison-neue font-normal text-gray-900 leading-tight">
						MEET OUR TEAM
					</h2>
				</div>
				<CategoryCards data={teamMembers} containerClassName="py-0" />
			</div>

			{/* Newsletter Signup Section */}
			<NewsletterSignup
				title="Sign up for emails"
				subtitle="For news, collections & more"
			/>
		</div>
	);
};

export default AboutPage;
