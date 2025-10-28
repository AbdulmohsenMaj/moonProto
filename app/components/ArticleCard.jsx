import React from "react";
import Link from "next/link";

// Article Card Component for better mapping structure
const ArticleCard = ({ article }) => {
	return (
		<div className="group cursor-pointer h-full flex flex-col">
			{/* Article Image */}
			<div className="aspect-[4/3] mb-4 overflow-hidden">
				<img
					src={article.image}
					alt={article.title}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			{/* Article Content */}
			<div className="flex-1 flex flex-col space-y-3">
				<Link href={`/everworld/${article.slug}`}>
					<h3 className="font-maison-neue font-normal text-[28px] leading-[34px] tracking-[0px] text-black group-hover:underline line-clamp-2 flex-1 cursor-pointer">
						{article.title}
					</h3>
				</Link>
				<div className="bg-white text-black font-maison-neue font-normal text-[12px] leading-[14.4px] tracking-[0px] uppercase px-3 py-2 hover:bg-blue-50 transition-colors border-2 rounded-2xl duration-300 cursor-pointer w-fit">
					{article.category}
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
