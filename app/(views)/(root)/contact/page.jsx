import CoffeeHero from "../../../components/CoffeeHero";

const ContactPage = () => {
	return (
		<div className="min-h-screen bg-base-100">
			<CoffeeHero
				subtitle="Follow us on social media"
				title="CONTACT US"
				backgroundImage="/landing/images/coffee.jpg"
				overlayColor="#3A3845"
				overlayWidth="520px"
				overlayMarginLeft="200px"
				textColor="text-white"
				showButton={false}
				showIcon={true}
				logoVariant="brown"
				minHeights={{
					base: "min-h-[500px]",
					sm: "sm:min-h-[600px]",
					md: "md:min-h-[700px]",
					lg: "lg:min-h-[800px]",
					xl: "xl:min-h-[900px]",
				}}
			/>

			{/* Contact Information Section */}
			<div className="bg-white py-16 px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
						GET IN TOUCH WITH US
					</h2>
					<p className="text-gray-600 mb-12 max-w-2xl mx-auto">
						Lorem ipsum dolor sit amet consectetur adipiscing elit
						mattis sit phasellus mollis sit aliquam sit nullam.
					</p>

					<div className="max-w-md mx-auto relative">
						{/* Contact Information */}
						<div className="pl-8 space-y-8">
							<div>
								<h3 className="text-gray-700 font-semibold mb-2">
									Office Hours :
								</h3>
								<p className="text-amber-600">
									Monday - Friday 8:00 am to 5:00 pm
								</p>
							</div>

							<div>
								<h3 className="text-gray-700 font-semibold mb-2">
									Email:
								</h3>
								<p className="text-amber-600">
									contact@company.com
								</p>
							</div>

							<div>
								<h3 className="text-gray-700 font-semibold mb-2">
									Phone :
								</h3>
								<p className="text-amber-600">
									(414) 687 - 5892
								</p>
							</div>

							<div>
								<h3 className="text-gray-700 font-semibold mb-2">
									Location :
								</h3>
								<p className="text-amber-600">
									59 Middle Point Rd
								</p>
								<p className="text-amber-600">
									San Francisco, 80412
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="bg-gray-50 py-16 px-8">
				<div className="max-w-2xl mx-auto">
					<form className="space-y-6">
						{/* Name and Email Row */}
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Samatha Clarken"
									className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="example@youremail.com"
									className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
								/>
							</div>
						</div>

						{/* Phone and Company Row */}
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Phone
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									placeholder="(123) 456 - 7890"
									className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
								/>
							</div>
							<div>
								<label
									htmlFor="company"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Company
								</label>
								<input
									type="text"
									id="company"
									name="company"
									placeholder="Moon"
									className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
								/>
							</div>
						</div>

						{/* Message Field */}
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								placeholder="Type your message here..."
								className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
							/>
						</div>

						{/* Submit Button */}
						<div>
							<button
								type="submit"
								className="w-full bg-gray-800 text-white py-4 px-6 font-semibold tracking-wider hover:bg-gray-700 transition-colors duration-200"
							>
								SEND MESSAGE →
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Map Section */}
			<div className="bg-white py-16 px-8">
				<div className="w-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28837.801499047408!2d49.558323200000004!3d25.3805252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3797b334396fef%3A0x9555319226d07ffc!2sSomewhere%20Hotel!5e0!3m2!1sen!2ssa!4v1762160468072!5m2!1sen!2ssa"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
