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
				vintage: 'radial-gradient(#f3dece00, #20101090);'
			},
			colors: {
				brownie: {
					500: '#c98548',
					300: '#dda15e'
				},
				spinach: {
					500: '#30351c',
					300: '#828c51'
				},
				champagne: {
					500: '#f3dece',
					300: '#fefae0'
				},
				cassis: {
					500: '#cf4f4f',
					300: '#c6766b'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
