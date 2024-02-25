/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding:{
				'1/3':'33.33333%',
                '2/3':'66.6666%',
			},
			colors: {
				
				"jovic": "#5CB85C",
				"jovic-white" :"#ffffff",
				"xephas-white": "#ffffff",
				"xephas-navy": "#000525",
				"xephas-yellow": "#fbaa00",
				"xephas-bg": "#ffffff",
				"xephas-hover":"#1126bf",
				"jovic-background":"#4A90E2"
				
			  },
		},
		fontFamily: {
			mont: ["Montserrat", "sans-serif"],
		  },
	},
	plugins: [],
}
