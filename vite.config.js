import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'KNB Racing',
				short_name: 'KNB Racing',
				theme_color: '#420080',
				background_color: '#1f1e23',
				description:
					'Learn more about Kaylee Boyce, an up-and-coming dirt track race car driver from Texas',
				id: '/',
				start_url: '/',
				display: 'standalone',
				icons: [
					{
						src: 'logo.svg',
						sizes: 'any',
						type: 'image/svg+xml',
					},
					{
						src: 'logo192.png',
						type: 'image/png',
						sizes: '192x192',
					},
					{
						src: 'logo512.png',
						type: 'image/png',
						sizes: '512x512',
					},
					{
						src: 'maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
				shortcuts: [
					{
						name: 'Races',
						short_name: 'Races',
						url: '/races',
						icons: [
							{
								src: 'logo192.png',
								sizes: '192x192',
							},
						],
						name: 'Support',
						short_name: 'Support',
						url: '/support',
						icons: [
							{
								src: 'logo192.png',
								sizes: '192x192',
							},
						],
						name: 'Contact',
						short_name: 'Contact',
						url: '/contact',
						icons: [
							{
								src: 'logo192.png',
								sizes: '192x192',
							},
						],
					},
				],
			},
		}),
	],
})
