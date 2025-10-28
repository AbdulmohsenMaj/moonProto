import StoreCard from "../../../components/StoreCard";

const Stores = () => {
	const stores = [
		{
			id: 1,
			image: "/landing/images/stores_images/store1.png",
			city: "SEATTLE",
			location: "University Village",
		},
		{
			id: 2,
			image: "/landing/images/stores_images/store2.png",
			city: "SAN FRANCISCO",
			location: "Valencia Street, San Francisco",
		},
		{
			id: 3,
			image: "/landing/images/stores_images/store3.png",
			city: "PALO ALTO",
			location: "Stanford",
		},
		{
			id: 4,
			image: "/landing/images/stores_images/store4.png",
			city: "NEW YORK",
			location: "SoHo District",
		},
		{
			id: 5,
			image: "/landing/images/stores_images/store5.png",
			city: "LOS ANGELES",
			location: "Beverly Hills",
		},
		{
			id: 6,
			image: "/landing/images/stores_images/store6.png",
			city: "CHICAGO",
			location: "Magnificent Mile",
		},
		{
			id: 7,
			image: "/landing/images/stores_images/store7.png",
			city: "WASHINGTON DC",
			location: "White House",
		},
		{
			id: 8,
			image: "/landing/images/stores_images/store8.png",
			city: "DALLAS",
			location: "Dallas, TX",
		},
		{
			id: 9,
			image: "/landing/images/stores_images/store9.png",
			city: "SAN DIEGO",
			location: "San Diego, CA",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Header Section */}
			<div className="text-center py-12 border-b border-gray-200">
				<h1 className="font-maison-neue font-normal text-[40px] leading-[48px] tracking-[0.2px] text-black mb-4">
					Stores
				</h1>
				<p className="font-maison-neue font-normal text-[14px] leading-[16.8px] tracking-[1.4px] text-gray-600">
					Find one of our 11 stores nearest you.
				</p>
			</div>

			{/* Stores Grid */}
			<div className="py-12 px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{stores.map((store) => (
							<StoreCard key={store.id} store={store} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stores;
