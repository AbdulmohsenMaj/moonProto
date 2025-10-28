"use client";
import HeroModular from "@/app/components/HeroModular";
import { latestArticles } from "../../../../data/articles";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import ArticleCard from "@/app/components/ArticleCard";

const Article = ({ params }) => {
	// Find the actual article data
	const foundArticle = latestArticles.find(
		(article) => article.slug === params.id
	);

	// Check if the article exists
	if (!foundArticle) {
		return (
			<div className="bg-white min-h-screen">
				<HeroModular
					title={
						<div>
							<p className="inline-block bg-transparent text-white font-maison-neue font-normal text-[12px] leading-[14.4px] tracking-[0px] uppercase px-3 py-2 border-2 rounded-2xl duration-300r w-fit mr-3">
								ERROR
							</p>
							<p>Article Not Found</p>
						</div>
					}
					titlePosition={"bottom left"}
					description="The article you are looking for does not exist."
					descriptionPosition={"bottom left"}
					backgroundImage="/error.svg"
					showButton={false}
					contentPadding="pb-25 px-16"
				/>
				<div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mt-8">
					<div className="max-w-7xl mx-auto text-center">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Article Not Found
						</h2>
						<p className="text-gray-600 mb-8">
							The article you are looking for does not exist or
							has been removed.
						</p>
						<a
							href="/everworld"
							className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
						>
							Back to Articles
						</a>
					</div>
				</div>
			</div>
		);
	}

	// Use the found article data with dynamic carousel data
	const articleData = {
		id: foundArticle.id,
		title: foundArticle.title,
		content: `This is the full content for "${foundArticle.content}". You can add more specific content for this article here.`,
		category: foundArticle.category,
		image: foundArticle.image,
		bannerDescription: foundArticle.bannerDescription,
		whiteProductsData: foundArticle.whiteProductsData,
		carouselTitle: foundArticle.carouselTitle,
	};

	return (
		<>
			<div className=" bg-white ">
				<HeroModular
					title={
						<div>
							<p className="inline-block bg-transparent text-white font-maison-neue font-normal text-[12px] leading-[14.4px] tracking-[0px] uppercase px-3 py-2 border-2 rounded-2xl duration-300r w-fit mr-3">
								{articleData.category}
							</p>
							<p className="normal-case">
								{articleData.category}
							</p>
							<p>{articleData.title}</p>
						</div>
					}
					titlePosition={"bottom left"}
					description={articleData.bannerDescription}
					descriptionPosition={"bottom left"}
					backgroundImage={articleData.image}
					showButton={false}
					contentPadding="pb-25 px-16"
				/>
			</div>
			<div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mt-8">
				<div className="max-w-7xl mx-auto">
					<div className="border-t-[14px] border-black mb-12"></div>
					<div className="flex gap-8">
						<div className="w-[148px] flex-shrink-0">
							<div className="flex gap-2">
								<div className="w-6 h-6 bg-black flex items-center justify-center">
									<Image
										src="/twitter.svg"
										alt="Twitter"
										width={16}
										height={16}
										className="text-white filter invert"
									/>
								</div>
								<div className="w-6 h-6 bg-black flex items-center justify-center">
									<Image
										src="/facebook.svg"
										alt="Facebook"
										width={16}
										height={16}
										className="text-white filter invert"
									/>
								</div>
								<div className="w-6 h-6 bg-black flex items-center justify-center">
									<Image
										src="/linkedin.svg"
										alt="LinkedIn"
										width={16}
										height={16}
										className="text-white filter invert"
									/>
								</div>
							</div>
						</div>

						<div className="flex-1">
							<p className="font-maison-neue font-semibold text-[40px] leading-[48px] tracking-[0px] text-black text-left">
								{foundArticle.introText}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full  bg-white py-16 px-4 sm:px-6 lg:px-[60px] lg:py-[100px] justify-self-center">
				<img
					src={foundArticle.contentImage}
					alt="Article"
					className="max-w-[800px] max-h-[1000px] object-cover justify-self-center"
				/>
			</div>
			{/* content1 Section */}
			{foundArticle.contentSections &&
				foundArticle.contentSections[0] && (
					<div className=" BlogDetails flex flex-col py-[100px] px-[228px] text-left gap-[24px]">
						<h1 className="font-maison-neue font-semibold text-[40px] leading-[48px] tracking-[0px] text-black mb-4 text-left">
							{foundArticle.contentSections[0].title}
						</h1>
						<p className="font-maison-neue font-book text-[24px] leading-[33.24px] tracking-[0px] text-black">
							{foundArticle.contentSections[0].content}
						</p>
						{foundArticle.contentSections[0].subsections &&
							foundArticle.contentSections[0].subsections.map(
								(subsection, index) => (
									<div key={index}>
										<h1 className="font-maison-neue font-semibold text-[24px] leading-[28px] tracking-[0px] text-black mb-4">
											{subsection.title}
										</h1>
										<p className="font-maison-neue font-book text-[24px] leading-[33.24px] tracking-[0px] text-black">
											{subsection.content}
										</p>
									</div>
								)
							)}
					</div>
				)}
			{/*content_image1 section*/}
			<div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-[60px] lg:py-[100px] justify-self-center">
				<img
					className="max-w-[800px] max-h-[1000px] object-cover justify-self-center"
					src={articleData.image}
					alt=""
				/>
			</div>
			{/* Dynamic Content Section 2 */}
			{foundArticle.contentSections &&
				foundArticle.contentSections[1] && (
					<div className="BlogDetails flex flex-col py-[100px] px-[228px] text-left gap-[24px]">
						<h1 className="font-maison-neue font-semibold text-[40px] leading-[48px] tracking-[0px] text-black mb-4 text-left">
							{foundArticle.contentSections[1].title}
						</h1>
						<p className="font-maison-neue font-book text-[24px] leading-[33.24px] tracking-[0px] text-black">
							{foundArticle.contentSections[1].content}
						</p>
						{foundArticle.contentSections[1].subsections &&
							foundArticle.contentSections[1].subsections.map(
								(subsection, index) => (
									<div key={index}>
										<h1 className="font-maison-neue font-semibold text-[24px] leading-[28px] tracking-[0px] text-black mb-4">
											{subsection.title}
										</h1>
										<p className="font-maison-neue font-book text-[24px] leading-[33.24px] tracking-[0px] text-black">
											{subsection.content}
										</p>
									</div>
								)
							)}
					</div>
				)}

			{/* product_genre_carousel*/}
			<div className="w-full py-12 px-8 lg:px-12 xl:px-16">
				<Carousel
					items={articleData.whiteProductsData}
					itemsPerPage={4}
					title={articleData.carouselTitle}
					showHeader={true}
					showDots={true}
					showArrows={true}
					showButton={true}
					buttonText="Shop Now"
					buttonLink="/products"
					arrowPosition="outside"
					gridCols={{
						sm: 2,
						md: 3,
						lg: 4,
						xl: 4,
					}}
				/>
			</div>

			{/* Related Articles Section */}
			<div className="w-full py-12 px-8 lg:px-12 xl:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{latestArticles
						.filter((article) => article.slug !== params.id)
						.slice(0, 3)
						.map((article) => (
							<ArticleCard key={article.id} article={article} />
						))}
				</div>
			</div>
		</>
	);
};

export default Article;
