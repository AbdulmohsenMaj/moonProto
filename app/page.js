"use client";
import React from "react";
import NavbarMiddle from "./components/navbarMiddle";
import Hero from "./components/contentComponents/hero";
import Section2s from "./components/contentComponents/section2";
import Section3 from "./components/contentComponents/section3";
import Section4 from "./components/contentComponents/section4";
import Section5 from "./components/contentComponents/section5";
import Section6 from "./components/contentComponents/section6";
import Section7 from "./components/contentComponents/section7";
import Section8 from "./components/contentComponents/section8";
import Section9 from "./components/contentComponents/section9";
export default function Home() {
	return (
		<>
			<Hero />
			<Section2s />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Section9 />
			<br />
			<br />
			<br />
		</>
	);
}
