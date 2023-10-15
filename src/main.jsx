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
