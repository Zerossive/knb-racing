import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	console.log(error)

	return (
		<div className='prose prose-invert mx-auto min-h-screen w-full p-12 text-center'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage
