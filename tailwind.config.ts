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
				vintage: 'radial-gradient(#70605030, #604030dd);'
			},
			colors: {
				brown: {
					500: '#c98548'
				},
				spinach: {
					300: '#5f6c37',
					500: '#29361a'
				},
				champagne: {
					500: '#f3dece'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
