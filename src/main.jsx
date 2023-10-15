import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import './index.css'
import ErrorPage from './pages/Error/ErrorPage'
import NoMatchPage from './pages/NoMatch/NoMatchPage'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import RacesPage from './pages/Races/RacesPage'
import SponsorsPage from './pages/Sponsors/SponsorsPage'
import SupportPage from './pages/Support/SupportPage'
import { registerSW } from 'virtual:pwa-register'

// Check for service worker status
registerSW({
	immediate: true,
	onRegisterError(error) {
		console.log('Service Worker registration failed:', error)
	},
	onNeedRefresh() {
		console.log('App needs to refresh')
	},
	onOfflineReady() {
		console.log('App is ready to work offline')
	},
	onRegistered() {
		console.log('Service Worker has been registered.')
	},
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
					{
						path: 'races',
						element: <RacesPage />,
					},
					{
						path: 'sponsors',
						element: <SponsorsPage />,
					},
					{
						path: 'contact',
						element: <ContactPage />,
					},
					{
						path: 'support',
						element: <SupportPage />,
					},
				],
			},
			{
				path: '*',
				element: <NoMatchPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
