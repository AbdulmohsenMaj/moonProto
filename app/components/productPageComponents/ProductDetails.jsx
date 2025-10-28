'use client';

import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const ProductDetails = ({
	product,
	productFeatures,
	id,
	availableSizes,
	availableColors,
}) => {
	const { addToCart } = useCart();
	const [selectedSize, setSelectedSize] = useState(availableSizes?.[0] || null);
	const [selectedColor, setSelectedColor] = useState(availableColors?.[0] || null);
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = () => {
		if (!selectedSize && availableSizes?.length > 0) {
			alert('Please select a size');
			return;
		}
		if (!selectedColor && availableColors?.length > 0) {
			alert('Please select a color');
			return;
		}

		addToCart(product, quantity, selectedSize?.name || selectedSize, selectedColor?.name || selectedColor);
		
		// Optional: Show success message
		alert(`Added ${product.name} to cart!`);
	};
	return (
		<>
			<div className="space-y-6">
				{/* Product Name and Price */}
				<div>
					<div className="flex justify-between items-start mb-2">
						<h2 className="text-2xl font-bold text-black">
							{product.name}
						</h2>
						<div className="flex items-center space-x-3">
							{product.salePrice && (
								<span className="text-lg text-gray-500 line-through">
									{product.priceDisplay}
								</span>
							)}
							<span className="text-3xl font-bold text-black">
								{product.salePrice
									? product.salePriceDisplay
									: product.priceDisplay}
							</span>
						</div>
					</div>

					<div className="flex items-center">
						<div className="rating flex justify-start items-center">
							<div
								className="mask mask-star"
								aria-label="1 star"
							></div>
							<div
								className="mask mask-star"
								aria-label="2 star"
							></div>
							<div
								className="mask mask-star"
								aria-label="3 star"
								aria-current="true"
							></div>
							<div
								className="mask mask-star"
								aria-label="4 star"
							></div>
							<div
								className="mask mask-star"
								aria-label="5 star"
							></div>
						</div>
						<span className="text-sm text-gray-600 ml-2 mt-[6px]">
							{product.reviewsCount} reviews
						</span>
					</div>
				</div>

				{/* Product Description */}
				<div className="text-left">
					{product.descriptionTitle && (
						<h2 className=" font-bold text-xl leading-6 tracking-[0.2px] text-black mb-3">
							{product.descriptionTitle}
						</h2>
					)}
					<p className="text-sm leading-[16.8px] tracking-[1.4px] text-black">
						{product.detailedDescription || product.description}
					</p>
				</div>

				{/* Size Selection */}
				<div>
					<div className="flex justify-between items-center mb-3">
						<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
							Size
						</h3>
						<button className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-black underline hover:cursor-pointer transition-all">
							Size Guide
						</button>
					</div>
					<div className="flex space-x-2">
						{availableSizes.map((size) => (
							<button
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`px-4 py-2 border rounded-md transition-colors ${
									selectedSize === size
										? 'border-black bg-black text-white'
										: 'border-gray-300 hover:border-black'
								}`}
							>
								{size}
							</button>
						))}
					</div>
				</div>

				{/* Color Selection */}
				<div>
					<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black mb-3">
						Color
					</h3>
					<div className="flex space-x-2">
						{availableColors.map((color) => (
							<button
								key={color.name}
								onClick={() => setSelectedColor(color)}
								className={`w-8 h-8 rounded-full border-2 transition-colors ${
									selectedColor?.name === color.name
										? 'border-black border-4'
										: 'border-gray-300 hover:border-black'
								}`}
								style={{ backgroundColor: color.hex }}
								title={color.name}
							/>
						))}
					</div>
				</div>

				{/* Add to Bag Button */}
				<div className="space-y-3">
					<button 
						onClick={handleAddToCart}
						className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium"
					>
						Add to Bag
					</button>
				</div>

				{/* Shipping and Returns Information */}
				<div className="border-t border-b py-6 space-y-6 justify-self-center justify-items-start">
					{/* Free Shipping */}
					<div className="flex items-start space-x-3">
						<img
							src="/truck.svg"
							alt="Free Shipping"
							className="w-6 h-6 mt-1"
						/>
						<div>
							<h4 className="font-['Maison_Neue'] font-semibold text-base leading-6 text-black mb-1">
								Free Shipping
							</h4>
							<p className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] text-gray-700">
								On all U.S. orders over $100{" "}
								<button className="underline hover:no-underline transition-all">
									Learn more.
								</button>
							</p>
						</div>
					</div>

					{/* Easy Returns */}
					<div className="flex items-start space-x-3">
						<img
							src="/box.svg"
							alt="Easy Returns"
							className="w-6 h-6 mt-1"
						/>
						<div>
							<h4 className="font-['Maison_Neue'] font-semibold text-base leading-6 text-black mb-1">
								Easy Returns
							</h4>
							<p className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] text-gray-700">
								Extended returns through January 31.{" "}
								<button className="underline hover:no-underline transition-all">
									Returns Details.
								</button>
							</p>
						</div>
					</div>

					{/* Send It As A Gift */}
					<div className="flex items-start space-x-3">
						<img
							src="/gift.svg"
							alt="Send It As A Gift"
							className="w-6 h-6 mt-1"
						/>
						<div>
							<h4 className="font-['Maison_Neue'] font-semibold text-base leading-6 text-black mb-1">
								Send It As A Gift
							</h4>
							<p className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] text-gray-700">
								Add a free personalized note during checkout.
							</p>
						</div>
					</div>
				</div>

				{/* Product Features */}
				<div className="border-t pt-6">
					<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black mb-3">
						Features
					</h3>
					<ul className="space-y-2">
						{productFeatures.map((feature, index) => (
							<li
								key={index}
								className="flex items-center font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-gray-700"
							>
								<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
								{feature}
							</li>
						))}
					</ul>
				</div>

				{/* Additional Product Details */}
				<div className="text-left">
					{(product?.material ||
						product?.care ||
						product?.modelInfo ||
						product?.sku) && (
						<div className="border-t pt-6">
							<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black mb-3">
								Product Details
							</h3>
							<div className="space-y-3">
								{product?.material && (
									<div className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-gray-700">
										<span className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
											Material:
										</span>{" "}
										{product.material}
									</div>
								)}
								{product?.care && (
									<div className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-gray-700">
										<span className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
											Care:
										</span>{" "}
										{product.care}
									</div>
								)}
								{product?.modelInfo && (
									<div className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-gray-700">
										<span className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
											Model:
										</span>{" "}
										Model is 6'2", wearing a size M
									</div>
								)}
								{product?.sku && (
									<div className="font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-gray-700">
										<span className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black">
											SKU:
										</span>{" "}
										{product.sku}
									</div>
								)}
							</div>
						</div>
					)}
				</div>

				{/* Fit Section */}
				<div className="border-t pt-6 flex flex-co justify-items-center">
					<h3 className="fit-title font-['Maison_Neue'] font-semibold  leading-6 tracking-[0.2px] text-black mb-3 w-[106px] text-left">
						Fit
					</h3>
					<div className="fitText font-['Maison_Neue'] font-normal text-sm leading-[16.8px] tracking-[1.4px] text-gray-700 flex flex-col gap-1 text-left justify-items-center">
						<h1>Questions about fit?</h1>
						<h1>Contact Us</h1>
						<h1>Size Guide</h1>
					</div>
				</div>

				{/* Sustainability Section */}
				<div className="border-t pt-6">
					<h3 className="font-['Maison_Neue'] font-semibold text-base leading-6 tracking-[0.2px] text-black mb-3">
						Sustainability
					</h3>
					<div className="flex justify-center">
						<img
							src="/renew_clean.png"
							alt="Renewed Materials and Cleaner Chemistry"
							className="h-auto max-w-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
