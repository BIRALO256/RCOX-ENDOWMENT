/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"jovic-white": "#ffffff",
				"xephas-navy": "#000525",
				"xephas-yellow": "#fbaa00",
				"jovic": "#050505",
				"xephas-hover":"#1126bf"
			  },
		},
		fontFamily: {
			mont: ["Montserrat", "sans-serif"],
		  },
	},
	plugins: [],
}
