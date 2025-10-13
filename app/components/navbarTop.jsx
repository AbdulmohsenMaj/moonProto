const NavbarTop = () => {
	return (
		<div className="navbarTop text-neutral-content bg-neutral flex justify-between items-center w-full h-[30px] px-[30px] py-[7px]">
			<div></div>
			<div className="flex items-center gap-2">
				<p
					className=" w-230px h-16px font-semibold 
                              "
				>
					Get early access on launches and offers.
				</p>
				<p
					className=" 
                                underline 
                                decoration-solid 
                                decoration-[0px] 
                                underline-offset-[3px] 
                                flex items-center gap-1
								hover:cursor-pointer"
				>
					Sign Up For Texts{" "}
					<img
						className="w-[14px] h-[14px]"
						src="rightArrow.png"
						alt="arrow"
					/>
				</p>
			</div>

			<div className="flex items-center gap-2 cursor-pointer">
				<img className="w-[21px] h-[16px]" src="/usa.png" alt="usa" />
				USD
			</div>
		</div>
	);
};

export default NavbarTop;
