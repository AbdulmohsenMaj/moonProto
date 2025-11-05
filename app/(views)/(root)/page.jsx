"use client";
import React from "react";

import CoffeeHero from "../../components/CoffeeHero";
import CategoryCards from "../../components/CategoryCards";
import PromoSection from "../../components/PromoSection";
import DBProductGrid from "../../components/DBProductGrid";
import NewsletterSignup from "../../components/NewsletterSignup";

export default function Home() {
	return (
		<>
			<div>
				<div>
					<CoffeeHero
						overlayWidth="520px"
						overlayMarginLeft="200px"
					/>
				</div>
				<div>
					<CategoryCards />
				</div>
				<div>
					<PromoSection />
				</div>
				<div className="mx-12 sm:mx-2 lg:mx-12 my-12">
					<DBProductGrid title="Best Sellers" maxProducts={8} />
				</div>
				<div className="pb-0">
					<PromoSection
						showButton={false}
						backgroundImage="/landing/images/coffee.jpg"
						containerClassName="bg-white pb-0"
						title="MADE IN VIET NAM"
						titleSpan="SINCE 1450"
						description="Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
					/>
				</div>
				<div className="pb-0">
					<PromoSection
						showButton={false}
						backgroundImage="/landing/images/coffee.jpg"
						containerClassName="bg-gray-50 pb-0"
						title="OUR HISTORY"
						titleSpan=""
						description="Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit."
						reverse={true}
					/>
				</div>
				<div className="my-12 mx-12 sm:mx-2 lg:mx-12">
					<DBProductGrid title="New Arrivals" maxProducts={4} />
				</div>
				<div>
					<NewsletterSignup />
				</div>
			</div>
		</>
	);
}
