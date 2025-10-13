const Section2s = () => {
    const categories = [
        {
            id: 1,
            name: "SHIRTS",
            image: "shirt.png",
            description: "Description for SHIRTS",
        },
        {
            id: 2,
            name: "DENIM",
            image: "denim.png",
            description: "Description for DENIM",
        },
        {
            id: 3,
            name: "TEES",
            image: "tee.png",
            description: "Description for TEES",
        },
        {
            id: 4,
            name: "PANTS",
            image: "pants.png",
            description: "Description for PANTS",
        },
        {
            id: 5,
            name: "SWEATERS",
            image: "sweater.png",
            description: "Description for SWEATERS",
        },
        {
            id: 6,
            name: "OUTERWEAR",
            image: "outerwear.png",
            description: "Description for OUTERWEAR",
        },
    ];
	return (
		<div
			className="section2 w-full opacity-100 
            px-4 py-8 
            sm:px-6 sm:py-10 
            md:px-8 md:py-12 
            lg:px-12 lg:py-16"
		>
			<h2 className="mb-4">Shop by Category</h2>
			<div className="flex flex-nowrap gap-3 sm:gap-4 h-auto w-full overflow-x-auto snap-x snap-mandatory">
				{categories.map((category) => (
					<div
						key={category.id}
						className="card bg-base-100 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-sm snap-start"
					>
                        <figure>
                            <img
								className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover"
                                src={`/images/section2/${category.image}`}
                                alt={category.name}
                                loading="lazy"
                            />
                        </figure>

						<h2
						className="card-title justify-center font-[Maison Neue] 
                                            font-normal 
                                            text-[12px] sm:text-[13px] md:text-[14px] 
                                            leading-[18px] sm:leading-[19px] md:leading-[20px] 
                                            tracking-[1.4px] 
                                            text-center 
                                            decoration-solid 
                                            underline underline-offset-[2px] 
                                            decoration-[1px] 
                                           
                                            "
					>
						{category.name}
					</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Section2s;
