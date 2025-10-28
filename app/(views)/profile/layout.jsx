import "../../globals.css";
import NavbarMiddle from "../../components/navbarMiddle";
import NavbarTop from "../../components/navbarTop";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footerComponent/footer";
import BottomArrow from "../../components/navbarBottomArrow";

export const metadata = {
	title: "Products - Create Next App",
	description: "Explore our range of products and services",
};

export default function ProductsLayout({ children }) {
	return (
		<html lang="en" data-theme="light">
			<body className="antialiased">
				<NavbarTop />
				<NavbarMiddle />

				{children}
				<Footer />
			</body>
		</html>
	);
}
