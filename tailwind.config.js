/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('../../../assets/img/img-top.jpg')",				
			  },
			  fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'rubik': ['Rubik','sans-serif'],
				'open': [ 'Open Sans', 'sans-serif']
			  },  
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#1d4ed8",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			screens: {
				sm: "400px",
				midmd:"880px"
			},
		},
	},
	plugins: [],
};
