const StoreCard = ({ store }) => {
	return (
		<div className="group cursor-pointer">
			{/* Store Image */}
			<div className="aspect-square overflow-hidden mb-4">
				<img
					src={store.image}
					alt={`${store.location} store`}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			{/* Store Content */}
			<div className="text-left">
				<h3 className="font-maison-neue font-semibold text-[12px] leading-[16px] tracking-[0.2px] text-gray-600 mb-1">
					{store.city}
				</h3>
				<p className="font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[1.4px] text-black">
					{store.location}
				</p>
			</div>
		</div>
	);
};

export default StoreCard;