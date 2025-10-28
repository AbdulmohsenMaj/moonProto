import "../../globals.css";
import NavbarMiddle from "../../components/navbarMiddle";
import NavbarTop from "../../components/navbarTop";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footerComponent/footer";
import BottomArrow from "../../components/navbarBottomArrow";
import Link from "next/link";

export const metadata = {
	title: "Stores - Create Next App",
	description: "Find one of our 11 stores nearest you",
};

export default function StoresLayout({ children }) {
	return (
		<html lang="en" data-theme="light">
			<body className="antialiased">
				<NavbarTop />
				<NavbarMiddle />
				<NavbarBottom
					navItems={[
						{ label: "About" },
						{ label: "Stores" },
						{ label: "Factories" },
						{ label: "Environmental Initiatives" },
						{ label: "Our Carbon Commitment" },
						{ label: "Annual Impact Report" },
						{ label: "Cleaner Fashion" },
						{ label: "Contact" },
					]}
				/>
				<BottomArrow />
				{children}
				<Footer />
			</body>
		</html>
	);
}