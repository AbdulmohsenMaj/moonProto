import { getProductsByIds, productCollections } from "./products.js";

export const latestArticles = [
	{
		id: 1,
		image: "/landing/images/everworld_images/1.png",
		title: "How To Style Winter Whites",
		category: "Style",
		slug: "winter-whites",
		bannerDescription:
			"Redefine your winter wardrobe with the timeless elegance of winter whites with this style guide.",
		content: "Explore winter whites styling tips and outfit pairings.",
		introText:
			"In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites. Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a breath of fresh air with this list of winter white closet essentials.",
		carouselTitle: "Winter Whites Collection",
		productsCarousel: productCollections.winterWhites,
		contentSections: [
			{
				title: "Nail the Classics",
				content:
					"Do pure winter chic with a classic cashmere white sweater. Made in the softest cashmere, it's a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make sure you keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.",
				subsections: [
					{
						title: "Monochromatic Magic",
						content:
							"Nothing feels more luxe than an all-white winter outfit. And the best part? You don't have to break the bank to create a super chic top-to-toe look. Pair classic corduroy pants in a modern wide-legged silhouette with a relaxed Oxford style white shirt for a mix-and-match texture play. Extra points if you add a white blazer, cardigan, or sweater. Accessorize with subtle metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.",
					},
					{
						title: "Keep Warm in White",
						content:
							"Stay warm all winter long with a white puffer jacket puffer jacket. This durable, cold weather jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit for an easy elegant look.",
					},
				],
			},
			{
				title: "Textures and Layers",
				content:
					"Winter fashion is all about layering, and white outfits provide the perfect base for playing with textures and layers. Start with your white turtleneck and experiment with different fabrics like wool, cashmere, and silk to add depth and interest to your look. A white silk blouse layered under a chunky knit sweater or a white wool skirt paired with a turtleneck creates a textural look that's both cozy and chic.",
				subsections: [
					{
						title: "Accessorize with Neutrals",
						content:
							"When working with a predominantly white palette, neutrals become your best friends. From white leather Chelsea boots to off-white beanies, mix in plenty of winter-ready accessories and shoes for those finishing outfit tonal touches.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/1.png",
	},
	{
		id: 2,
		image: "/landing/images/everworld_images/2.png",
		title: "We Won A Glossy Award",
		category: "News",
		slug: "glossy-award",
		bannerDescription:
			"Celebrating our Glossy Award win and what it means for our brand and community.",
		content:
			"Celebrating our Glossy Award win and what it means for our brand and community.",
		introText:
			"We're thrilled to announce that we've been recognized with a prestigious Glossy Award, celebrating innovation and excellence in the fashion industry. This recognition reflects our commitment to sustainable fashion and community impact.",
		carouselTitle: "Award-Winning Collection",
		productsCarousel: productCollections.everlane,
		contentSections: [
			{
				title: "The Recognition",
				content:
					"The Glossy Awards celebrate the most innovative and impactful brands in fashion and beauty. Our win in the Sustainability Innovation category highlights our dedication to creating positive change in the industry while maintaining exceptional quality and style.",
				subsections: [
					{
						title: "What This Means",
						content:
							"This award validates our approach to sustainable fashion and reinforces our mission to create clothing that's both stylish and environmentally responsible. It's a testament to our team's hard work and our community's support.",
					},
					{
						title: "Looking Forward",
						content:
							"This recognition motivates us to continue pushing boundaries in sustainable fashion. We're committed to expanding our eco-friendly initiatives and setting new standards for the industry.",
					},
				],
			},
			{
				title: "Our Journey",
				content:
					"From our humble beginnings to this prestigious recognition, our journey has been defined by a commitment to quality, sustainability, and community. This award represents not just our achievements, but the collective effort of everyone who believes in our mission.",
				subsections: [
					{
						title: "Community Impact",
						content:
							"None of this would be possible without our incredible community. Your support and feedback have shaped us into the brand we are today, and this award belongs to all of us.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/2.png",
	},
	{
		id: 3,
		image: "/landing/images/everworld_images/3.png",
		title: "Coordinate Your Style: Matching Outfits for Everyone",
		category: "Style",
		slug: "coordinate-style",
		content: "Tips for coordinating matching outfits for everyone.",
		introText:
			"Coordinated outfits aren't just for couples or families—they're a fun way to create cohesive, stylish looks that work for any group. Whether you're planning outfits for a special event or just want to elevate your everyday style game, here's how to master the art of coordination.",
		carouselTitle: "Coordination Essentials",
		productsCarousel: productCollections.travel,
		contentSections: [
			{
				title: "The Art of Coordination",
				content:
					"Coordinating outfits doesn't mean everyone needs to wear identical pieces. Instead, it's about creating harmony through color palettes, textures, or styling themes that complement each other while allowing individual personality to shine through.",
				subsections: [
					{
						title: "Color Harmony",
						content:
							"Start with a cohesive color palette. Choose 2-3 colors that work well together and distribute them across different outfits. One person might wear navy and cream, while another wears cream and camel—creating connection without being matchy-matchy.",
					},
					{
						title: "Texture Play",
						content:
							"Mix and match textures within your coordinated looks. Pair smooth silks with chunky knits, or structured blazers with flowing fabrics. This adds visual interest while maintaining the coordinated aesthetic.",
					},
				],
			},
			{
				title: "Styling for Different Occasions",
				content:
					"The key to successful coordination is adapting your approach to the occasion. Formal events call for more structured coordination, while casual outings allow for playful experimentation with patterns and accessories.",
				subsections: [
					{
						title: "Accessory Coordination",
						content:
							"Sometimes the smallest details make the biggest impact. Coordinate through accessories like matching metal tones, similar bag styles, or complementary scarves to tie looks together effortlessly.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/3.png",
	},
	{
		id: 4,
		image: "/landing/images/everworld_images/4.png",
		title: "Black Friday Fund 2023",
		category: "News",
		slug: "black-friday-2023",
		content: "Details on our Black Friday Fund and 2023 impact.",
		introText:
			"This Black Friday, we're doing things differently. Instead of just offering discounts, we're launching the Black Friday Fund—a initiative that gives back to our community while celebrating conscious consumption and sustainable shopping practices.",
		carouselTitle: "Black Friday Conscious Collection",
		productsCarousel: productCollections.everlane,
		contentSections: [
			{
				title: "The Fund Initiative",
				content:
					"Our Black Friday Fund redirects a portion of our Black Friday sales to support local artisans, sustainable fashion education, and environmental conservation efforts. It's our way of ensuring that shopping can be a force for positive change.",
				subsections: [
					{
						title: "Supporting Artisans",
						content:
							"We're partnering with local craftspeople and emerging designers to provide funding for sustainable production methods and fair labor practices. Your purchases directly support these creative communities.",
					},
					{
						title: "Education Programs",
						content:
							"Part of the fund goes toward educational initiatives that teach sustainable fashion practices, helping consumers make more informed choices about their clothing purchases.",
					},
				],
			},
			{
				title: "Measuring Impact",
				content:
					"Transparency is key to our mission. We track and report on exactly how the Black Friday Fund is used, ensuring that every dollar creates meaningful change in the fashion industry and beyond.",
				subsections: [
					{
						title: "2023 Results",
						content:
							"This year's fund supported 15 local artisans, funded 3 educational workshops, and contributed to reforestation efforts that offset the carbon footprint of our Black Friday shipping.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/4.png",
	},
	{
		id: 5,
		image: "/landing/images/everworld_images/4.png",
		title: "What to Wear this Season: Holiday Outfits & Ideas",
		category: "Style",
		slug: "holiday-outfits",
		content: "Holiday outfit ideas and styling inspiration for the season.",
		introText:
			"The holiday season brings a whirlwind of events, from intimate family gatherings to festive office parties. Navigate the season in style with versatile pieces that can be dressed up or down, ensuring you look effortlessly chic at every celebration.",
		carouselTitle: "Holiday Collection",
		productsCarousel: productCollections.elegant,
		contentSections: [
			{
				title: "Versatile Holiday Pieces",
				content:
					"Invest in pieces that work across multiple holiday events. A well-tailored blazer, elegant midi dress, or statement accessories can be styled differently for various occasions, maximizing your wardrobe's potential during the busy season.",
				subsections: [
					{
						title: "Dress to Impress",
						content:
							"For formal holiday events, opt for rich textures like velvet, silk, or metallic fabrics. These materials catch the light beautifully and photograph well, perfect for all those holiday memories you'll be making.",
					},
					{
						title: "Casual Celebrations",
						content:
							"Family gatherings call for comfort without sacrificing style. Think elevated basics like cashmere sweaters, well-fitted jeans, and comfortable yet chic footwear that can handle hours of socializing.",
					},
				],
			},
			{
				title: "Seasonal Color Palettes",
				content:
					"Embrace the season with rich, warm colors that complement the holiday spirit. Deep burgundies, forest greens, and metallic accents create a festive mood while remaining sophisticated and timeless.",
				subsections: [
					{
						title: "Metallic Accents",
						content:
							"Add sparkle to your holiday looks with metallic accessories or subtle shimmer in your clothing choices. These details catch the light and add festive flair without being overwhelming.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/4.png",
	},
	{
		id: 6,
		image: "/landing/images/everworld_images/6.png",
		title: "Thanksgiving Outfit Ideas",
		category: "Style",
		slug: "thanksgiving-outfits",
		content: "Thanksgiving outfit suggestions and cozy seasonal styles.",
		introText:
			"Thanksgiving calls for the perfect balance of comfort and style—you want to look put-together for family photos while being comfortable enough to enjoy that second helping of pie. Here's how to nail the perfect Thanksgiving look.",
		carouselTitle: "Thanksgiving Comfort Collection",
		productsCarousel: productCollections.casual,
		contentSections: [
			{
				title: "Comfort Meets Style",
				content:
					"The key to Thanksgiving dressing is choosing pieces that look polished but feel comfortable. Think stretchy fabrics, relaxed fits, and layers that can be adjusted as the day progresses from cooking to dining to post-meal lounging.",
				subsections: [
					{
						title: "Layering Essentials",
						content:
							"Start with a comfortable base layer and add a cozy cardigan or blazer that can be easily removed. This approach keeps you comfortable while maintaining a put-together appearance throughout the day.",
					},
					{
						title: "Footwear Choices",
						content:
							"Opt for shoes that are both stylish and comfortable for long periods of standing and walking. Low heels, stylish flats, or fashionable sneakers are all great options depending on your family's Thanksgiving traditions.",
					},
				],
			},
			{
				title: "Seasonal Styling",
				content:
					"Embrace autumn colors and textures that reflect the season's beauty. Rich oranges, warm browns, and deep reds create a festive mood while remaining appropriate for the family-focused holiday.",
				subsections: [
					{
						title: "Texture Play",
						content:
							"Incorporate seasonal textures like corduroy, wool, or knit fabrics that add visual interest and seasonal appropriateness to your Thanksgiving ensemble.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/6.png",
	},
	{
		id: 7,
		image: "/landing/images/everworld_images/7.png",
		title: "Sustainability Report 2023",
		category: "Sustainability",
		slug: "sustainability",
		content:
			"Highlights from our 2023 sustainability report and initiatives.",
		introText:
			"Our commitment to sustainability goes beyond just using eco-friendly materials. This year's sustainability report showcases our comprehensive approach to reducing environmental impact while creating positive change throughout our supply chain and community.",
		carouselTitle: "Sustainable Innovation Collection",
		productsCarousel: productCollections.everlane,
		contentSections: [
			{
				title: "Environmental Impact",
				content:
					"In 2023, we achieved significant milestones in reducing our environmental footprint. From carbon-neutral shipping to water conservation in our production processes, every aspect of our business has been evaluated and improved for sustainability.",
				subsections: [
					{
						title: "Carbon Footprint Reduction",
						content:
							"We've reduced our carbon emissions by 35% compared to last year through renewable energy adoption, efficient logistics, and sustainable packaging solutions.",
					},
					{
						title: "Sustainable Materials",
						content:
							"Over 80% of our new products now feature sustainable materials, including organic cotton, recycled fibers, and innovative eco-friendly alternatives to traditional fabrics.",
					},
				],
			},
			{
				title: "Supply Chain Transparency",
				content:
					"We believe in complete transparency about our supply chain. This year, we've implemented new tracking systems that allow us to monitor and verify the ethical and environmental standards of every supplier we work with.",
				subsections: [
					{
						title: "Fair Labor Practices",
						content:
							"All our manufacturing partners have been audited and certified for fair labor practices, ensuring that every piece of clothing is made under ethical working conditions.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/7.png",
	},
	{
		id: 8,
		image: "/landing/images/everworld_images/8.png",
		title: "Our Impact This Year",
		category: "Impact",
		slug: "impact-2023",
		content: "A look at our impact this year across key areas.",
		introText:
			"As we reflect on this year's achievements, we're proud to share the meaningful impact we've made together with our community. From environmental initiatives to social programs, here's how we've worked to create positive change in 2023.",
		carouselTitle: "Impact Collection",
		productsCarousel: productCollections.everlane,
		contentSections: [
			{
				title: "Community Engagement",
				content:
					"Our community is at the heart of everything we do. This year, we've expanded our community programs, supporting local initiatives and creating opportunities for meaningful engagement with our customers and neighbors.",
				subsections: [
					{
						title: "Local Partnerships",
						content:
							"We've partnered with 25 local organizations this year, supporting everything from youth education programs to environmental conservation efforts in our community.",
					},
					{
						title: "Customer Involvement",
						content:
							"Our customers have been incredible partners in our impact initiatives, participating in clothing drives, sustainability workshops, and community volunteer events throughout the year.",
					},
				],
			},
			{
				title: "Looking Ahead",
				content:
					"The impact we've made this year is just the beginning. We're committed to expanding our efforts and finding new ways to create positive change in the fashion industry and beyond.",
				subsections: [
					{
						title: "Future Goals",
						content:
							"Next year, we're setting even more ambitious goals for sustainability, community impact, and industry leadership. We're excited to continue this journey with our amazing community.",
					},
				],
			},
		],
		contentImage: "/landing/images/everworld_images/8.png",
	},
];
