"use client";
import React from "react";
import HeroModular from "@/app/components/HeroModular";

export default function About() {
	const aboutSection2 = [
		{
			image: "/landing/images/about_images/aboutSection1.png",
		},
		{
			image: "/landing/images/about_images/aboutSection2_1.png",
		},
		{
			image: "/landing/images/about_images/aboutSection2_2.png",
		},
		{
			image: "/landing/images/about_images/aboutSection4.png",
		},
		{
			image: "/landing/images/about_images/aboutSection4_2.png",
		},
		{
			image: "/landing/images/about_images/aboutSection5.png",
		},
		{
			image: "/landing/images/about_images/aboutSection6_1.png",
		},
		{
			image: "/landing/images/about_images/aboutSection6_2.png",
		},
		{
			image: "/landing/images/about_images/aboutSection6_3.png",
		},
	];
	return (
		<>
			<div className="w-full">
				<HeroModular
					showButton={false}
					title="We believe 
				we can all 
				make a difference."
					titleClassName="font-maison-neue font-normal text-[46px] leading-[55.2px] tracking-[0.92px] text-center"
					description="Our way: Exceptional quality.
Ethical factories. Radical Transparency."
					backgroundImage={aboutSection2[0].image}
				/>
			</div>
			<div className="w-full h-[525px] py-[76px] px-[258px] gap-[10px] justify-items-center">
				<div>
					<h2 className="font-maison-neue font-normal text-[46px] leading-[55.2px] tracking-[0.92px] text-center">
						At Everlane, we want the right choice to be as easy as
						putting on a great T-shirt. That’s why we partner with
						the best, ethical factories around the world. Source
						only the finest materials. And share those stories with
						you—down to the true cost of every product we make. It’s
						a new way of doing things. We call it Radical
						Transparency.
					</h2>
				</div>
			</div>
			<div className="grid grid-cols-2  justify-items-center bg-[#E6DED8]">
				<img src={aboutSection2[1].image} alt="" />
				<div className="px-[70px] flex flex-col justify-center text-left space-y-6">
					<h2 className="font-maison-neue font-semibold text-[12px] leading-[16px] tracking-[0.2px] text-black">
						OUR FACTORIES
					</h2>
					<h2 className="font-maison-neue font-normal text-[40px] leading-[48px] tracking-[0.2px] text-black">
						Our ethical approach.
					</h2>
					<p className=" w-full font-maison-neue font-normal text-[16px] leading-[16.8px] tracking-[1.4px] text-black">
						We spend months finding the best factories around the
						world—the same ones that produce your favorite designer
						labels. We visit them often and build strong personal
						relationships with the owners. Each factory is given a
						compliance audit to evaluate factors like fair wages,
						reasonable hours, and environment. Our goal? A score of
						90 or above for every factory.
					</p>
				</div>
			</div>
			<div className="w-full">
				<img src={aboutSection2[2].image} alt="" />
			</div>
			<div className="grid grid-cols-2  justify-items-center bg-[#E6DED8]">
				<div className="px-[70px] flex flex-col justify-center text-left space-y-6">
					<h2 className="font-maison-neue font-semibold text-[12px] leading-[16px] tracking-[0.2px] text-black">
						OUR QUALITY
					</h2>
					<h2 className="font-maison-neue font-normal text-[40px] leading-[48px] tracking-[0.2px] text-black">
						Designed to {<br />} last.
					</h2>
					<p className=" w-full font-maison-neue font-normal text-[16px] leading-[16.8px] tracking-[1.4px] text-black">
						At Everlane, we’re not big on trends. We want you to
						wear our pieces for years, even decades, to come. That’s
						why we source the finest materials and factories for our
						timeless products— like our Grade-A cashmere sweaters,
						Italian shoes, and Peruvian Pima tees.
					</p>
				</div>
				<img src={aboutSection2[3].image} alt="" />
			</div>
			<div className="w-full">
				<img src={aboutSection2[4].image} alt="" />
			</div>
			<div className="grid grid-cols-2  justify-items-center">
				<img src={aboutSection2[5].image} alt="" />
				<div className="px-[70px] flex flex-col justify-center text-left space-y-6">
					<h2 className="font-maison-neue font-semibold text-[12px] leading-[16px] tracking-[0.2px] text-black">
						OUR PRICES
					</h2>
					<h2 className="font-maison-neue font-normal text-[40px] leading-[48px] tracking-[0.2px] text-black">
						Radically Transparent.
					</h2>
					<p className=" w-full font-maison-neue font-normal text-[16px] leading-[16.8px] tracking-[1.4px] text-black">
						We believe our customers have a right to know how much
						their clothes cost to make. We reveal the true costs
						behind all of our products—from materials to labor to
						transportation—then offer them to you, minus the
						traditional retail markup.
					</p>
				</div>
			</div>
			<div className="w-full justify-center  justify-items-center text-center">
				{" "}
				<h3 className="font-maison-neue font-normal text-[36px] leading-[40px] tracking-[0.92px] text-center p-8">
					More to Explore
				</h3>
				<div className="grid grid-cols-3 gap-[16px] justify-items-center  pb-8">
					<div className="flex flex-col items-center">
						<img
							className="max-h-[195px] mb-4"
							src={aboutSection2[6].image}
							alt="Our Products"
						/>
						<p className="font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[1.4px] text-black">
							Our Products
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="max-h-[195px] mb-4"
							src={aboutSection2[7].image}
							alt="Our Stores"
						/>
						<p className="font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[1.4px] text-black">
							Our Stores
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="max-h-[195px] mb-4"
							src={aboutSection2[8].image}
							alt="Careers"
						/>
						<p className="font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[1.4px] text-black">
							Careers
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
