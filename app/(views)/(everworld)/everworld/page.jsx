"use client";
import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { latestArticles } from "../../../data/articles";

export default function Everworld() {
	return (
		<>
			<div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 ">
				<div className="max-w-7xl mx-auto">
					<div className="text-left">
						<h1 className="font-maison-neue font-semibold text-[160px] leading-[176px] tracking-[0px] text-black border-t-[14px] border-black">
							everworld
						</h1>
						<div className="space-y-2">
							<p className="font-maison-neue font-normal text-[24px] leading-[33.24px] tracking-[0px] text-black">
								We're on a mission to clean up a dirty industry.
							</p>
							<p className="font-maison-neue font-normal text-[24px] leading-[33.24px] tracking-[0px] text-black">
								These are the people, stories, and ideas that
								will help us get there.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* The Latest Section */}
			<div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-left font-maison-neue font-semibold text-[54px] leading-[72px] tracking-[0px] text-black mb-12">
						The Latest
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mb-12">
						{latestArticles.map((article) => (
							<ArticleCard key={article.id} article={article} />
						))}
					</div>
					{/* Load More Button */}
					<div className="text-center">
						<button className="bg-black text-white font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[0.7px] px-8 py-3 uppercase hover:bg-gray-800 hover:scale-105 active:scale-95 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
							Load More Articles
						</button>
					</div>
				</div>
			</div>
			<div className="w-full h-[225px] overflow-hidden">
				<img
					src="/landing/images/everworld_images/banner.png"
					alt="Everworld Banner"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-left font-maison-neue font-semibold text-[54px] leading-[72px] tracking-[0px] text-black mb-12">
						Our Progress
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
						{latestArticles.slice(0, 3).map((article, index) => (
							<div
								key={article.id}
								className="group cursor-pointer w-full"
							>
								<div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
									<img
										src={article.image}
										alt={`Featured Article ${index + 1}`}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<p className="text-left font-maison-neue font-normal text-[32px] leading-[40px] tracking-[0px] text-black mt-4 w-full">
									{article.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Social Media Section */}
			<div className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8 max-h-[385px]">
				<div className="max-w-7xl mx-auto text-left">
					<h2 className="font-maison-neue font-semibold text-[54px] leading-[72px] tracking-[0px] text-white mb-8">
						Follow us on social for more
					</h2>
					<button className="bg-white text-black font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[0.7px] px-8 py-3  hover:bg-gray-100 transition-colors duration-300">
						@Everlane Instagram
					</button>
				</div>
			</div>
		</>
	);
}
