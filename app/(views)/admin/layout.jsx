import "../../globals.css";
import NavbarMiddle from "../../components/navbarMiddle";
import NavbarTop from "../../components/navbarTop";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footerComponent/footer";
import BottomArrow from "../../components/navbarBottomArrow";

export const metadata = {
	title: "Admin - Create Next App",
	description: "Admin page for Create Next App",
};

export default function AdminLayout({ children }) {
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
