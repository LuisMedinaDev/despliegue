/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				colorPrimario: '#0a0d18',
				colorSecondary: '#0a0d18',
				textPrimario: '#95969b',
				textSecundario: '#f2f2f2',
			},
		},
	},
	plugins: [],
}
