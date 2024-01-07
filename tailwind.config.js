/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: `#420080`,
				secondary: '#52DAE8',
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
			animation: {
				'fade-in': 'fade-in .5s ease-in-out',
				'fade-out': 'fade-out .5s ease-in-out',
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'fade-out': {
					'0%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
