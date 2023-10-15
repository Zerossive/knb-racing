/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: colors.purple['900'],
				secondary: colors.purple['400'],
				dark: colors.zinc['900'],
				light: colors.zinc['50'],
				overlay: colors.zinc['50'],
				surface: colors.zinc['700'],
				base: '#1f1e23',
				mantle: colors.purple['900'],
				crust: '#151418',
				success: colors.green['500'],
				error: colors.red['500'],
			},
			fontFamily: {
				title: ['Racing Sans One'],
			},
			borderRadius: {
				custom: '.2rem',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
