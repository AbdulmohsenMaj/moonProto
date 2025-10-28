"use client";
import { useState, use } from "react";
import { getProductById, products } from "../../../../data/products";
import ProductDetails from "../../../../components/productPageComponents/ProductDetails";
import ProductCard from "@/app/components/ProductCard";
import ReviewsComponent from "../../../../components/productPageComponents/reviews";

const ProductPage = (props) => {
	const params = use(props.params);
	const searchParams = use(props.searchParams);
	const { id } = params;
	const from = searchParams?.from;

	// Get actual product data
	const product = getProductById(parseInt(id));

	// If product not found, show error or fallback
	if (!product) {
		return (
			<div className="px-4 py-6">
				<h1 className="text-3xl font-bold text-black mb-6">
					Product Not Found
				</h1>
				<p>The product you're looking for doesn't exist.</p>
			</div>
		);
	}

	// Use actual product data only
	const imageDetails = Array(6).fill(product?.image || "/test.png");
	const availableSizes = product?.sizes;
	const availableColors = product?.colors;
	const productFeatures = [
		product?.material && `Material: ${product.material}`,
		product?.care && `Care: ${product.care}`,
		product?.modelInfo?.fit && `Fit: ${product.modelInfo.fit}`,
	].filter(Boolean);

	// State for selected main image
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	// Get recommended products (exclude current product and get 4 random products)
	const getRecommendedProducts = (currentProductId) => {
		const otherProducts = products.filter((p) => p.id !== currentProductId);
		// Shuffle and take first 4
		const shuffled = otherProducts.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 4);
	};

	const recommendedProducts = getRecommendedProducts(parseInt(id));

	// Generate dynamic breadcrumb based on source
	const getBreadcrumb = () => {
		if (from === "men") {
			return (
				<div className="text-sm text-gray-600 mb-4 text-left">
					<span>Home</span>
					<span className="mx-2">/</span>
					<span>Men</span>
					<span className="mx-2">/</span>
					<span>Product Details</span>
				</div>
			);
		}
		// Default breadcrumb
		return (
			<div className="text-sm text-gray-600 mb-4 text-left">
				<span>Home</span>
				<span className="mx-2">/</span>
				<span>Product Details</span>
			</div>
		);
	};

	return (
		<div className="px-4 py-6">
			{/* Main Product Layout */}
			<div className="grid grid-cols-1 md:grid-cols-[minmax(500px,1fr)_400px] gap-8">
				{/* Left Side - Product Images Grid */}
				<div className="space-y-4">
					{/* Thumbnail Grid - 2 columns */}
					<div className="grid grid-cols-2 gap-2">
						{imageDetails.map((image, index) => (
							<div
								key={index}
								className="relative w-full aspect-square bg-[#F5F5F5] cursor-pointer"
								onClick={() => setSelectedImageIndex(index)}
							>
								<img
									src={image}
									alt={`Product Thumbnail ${index + 1}`}
									className="w-full h-full object-cover"
								/>
								{/* Sale Tag - Only show on first image if there's a sale */}
								{index === 0 && product.salePrice && (
									<div className="absolute top-3 left-3 z-10">
										<span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
											{Math.round(
												((product.price -
													product.salePrice) /
													product.price) *
													100
											)}
											% off
										</span>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Right Side - Product Details */}
				<div className="max-w-[400px]">
					{/* Dynamic Breadcrumb */}
					{getBreadcrumb()}
					<ProductDetails
						product={product}
						productFeatures={productFeatures}
						id={id}
						availableSizes={availableSizes}
						availableColors={availableColors}
					/>
				</div>
			</div>
			{/* Recommended Products Section */}
			<div className="mt-16 px-4">
				<h2 className="font-['Maison_Neue'] font-semibold text-2xl leading-7 text-black mb-8">
					Recommended Products
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{recommendedProducts.map((recommendedProduct) => (
						<ProductCard
							key={recommendedProduct.id}
							product={recommendedProduct}
							className="w-full"
						/>
					))}
				</div>
			</div>
			<ReviewsComponent productId={product.id} />
			<div className="mt-16 px-4 flex flex-col items-center">
				<div className="max-w-[600px] text-center">
					<h2 className="font-['Maison_Neue'] font-semibold text-2xl leading-7 text-black mb-8">
						Transparent Pricing
					</h2>
					<p className="text-gray-600 text-center">
						We publish what it costs us to make every one of our
						products. There are a lot of costs we can't neatly
						account for - like design, fittings, wear testing, rent
						on office and retail space - but we believe you deserve
						to know what goes into making the products you love.
					</p>
				</div>

				<div className="flex flex-row justify-center items-center mt-12 gap-8">
					{[
						{ name: "Materials", price: "$47.96", icon: "materials" },
						{ name: "Hardware", price: "$5.74", icon: "hardware" },
						{ name: "Labor", price: "$13.75", icon: "labor" },
						{ name: "Duties", price: "$8.09", icon: "duties" },
						{ name: "Transport", price: "$1.53", icon: "transport" }
					].map((item, index) => (
						<div key={index} className="flex flex-col items-center text-center">
							<img 
								src={`/${item.icon}.svg`} 
								alt={item.name}
								width="64" 
								height="64" 
								className="mb-4"
							/>
							<h3 className="font-['Maison_Neue'] font-medium text-sm text-black mb-1">{item.name}</h3>
							<p className="font-['Maison_Neue'] text-sm text-gray-600">{item.price}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
