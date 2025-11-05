/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				garamond: ["EB Garamond", "Garamond", "serif"],
				// Map old class to Inter so existing usages keep working
				"maison-neue": ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
};
