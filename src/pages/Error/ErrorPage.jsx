import React, { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'
import Button from '../../components/Button'

const ErrorPage = () => {
	const error = useRouteError()
	console.log(error)

	useEffect(() => {
		document.title = 'Error - KNB Racing'
	}, [])

	return (
		<div className='prose prose-invert mx-auto min-h-screen w-full p-12 text-center'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<a href='/'>
				<Button cta>Go Home</Button>
			</a>
		</div>
	)
}

export default ErrorPage
