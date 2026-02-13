/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					ink: '#0f141b',
					slate: '#151b24',
					surface: '#1b2330',
					border: '#2a3444',
					text: '#e7ecf2',
					muted: '#aeb6c2',
					accent: '#ff8a2a',
					'accent-strong': '#ff7a18',
				},
			},
		},
	},
	plugins: [],
};
