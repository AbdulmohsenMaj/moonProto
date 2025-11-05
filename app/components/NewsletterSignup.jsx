"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSignup = ({
	containerClassName = "bg-gray-50 py-16 lg:py-20",
	title = "Sign up for emails",
	subtitle = "FOR NEWS, COLLECTIONS & MORE",
	placeholder = "Enter your email address",
	buttonText = "SIGN UP",
}) => {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!email.trim()) {
			setMessage("Please enter your email address");
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setMessage("Please enter a valid email address");
			return;
		}

		setIsSubmitting(true);
		setMessage("");

		try {
			// Simulate API call - replace with actual newsletter subscription logic
			await new Promise(resolve => setTimeout(resolve, 1000));
			setMessage("Thank you for subscribing!");
			setEmail("");
		} catch (error) {
			setMessage("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className={containerClassName}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					{/* Small title */}
					<p className="text-sm font-maison-neue font-normal tracking-wider uppercase text-gray-600 mb-4">
						{title}
					</p>

					{/* Main heading */}
					<h2 className="text-3xl lg:text-4xl font-maison-neue font-normal text-gray-900 mb-8 tracking-wide">
						{subtitle}
					</h2>

					{/* Email form */}
					<form onSubmit={handleSubmit} className="max-w-md mx-auto">
						<div className="flex flex-col gap-6">
							<div>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder={placeholder}
									className="w-full px-4 py-3 text-center border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-300 font-maison-neue text-gray-700 placeholder-gray-500"
									disabled={isSubmitting}
								/>
							</div>
							<motion.button
								type="submit"
								disabled={isSubmitting}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{
									type: "spring",
									stiffness: 600,
									damping: 25,
								}}
								className="w-full px-8 py-3 bg-gray-900 text-white font-maison-neue font-normal text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? "SIGNING UP..." : buttonText}
							</motion.button>
						</div>

						{/* Message display */}
						{message && (
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className={`mt-4 text-sm font-maison-neue ${
									message.includes("Thank you") 
										? "text-green-600" 
										: "text-red-600"
								}`}
							>
								{message}
							</motion.p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default NewsletterSignup;