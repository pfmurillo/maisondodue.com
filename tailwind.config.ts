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
				vintage: 'radial-gradient(#f3dece30, #20101050);'
			},
			colors: {
				curry: {
					500: '#ab5c00'
				},
				spinach: {
					500: '#30351c',
					300: '#828c51'
				},
				champagne: {
					300: '#fefafc'
				},
				almond: {
					500: '#d5bdaf'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
