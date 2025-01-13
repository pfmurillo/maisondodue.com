import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Alice', 'serif']
		},
		extend: {
			backgroundImage: {
				vintage: 'radial-gradient(#f3dece00, #20101040);'
			},
			colors: {
				curry: {
					300: '#f08700'
				},
				spinach: {
					500: '#30351c',
					300: '#828c51'
				},
				moka: {
					500: '#a57865',
					300: '#ddb892'
				},
				champagne: {
					300: '#fefafc'
				},
				cassis: {
					500: '#cf4f4f'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
