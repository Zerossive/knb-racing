import React, { useEffect } from 'react'
import Button from '../../components/Button'

const NoMatchPage = () => {
	// check if user redirected from outdated version, then send them to homepage
	const urlParams = new URLSearchParams(window.location.search)
	useEffect(() => {
		urlParams.has('v') && (window.location = '/')
		document.title = 'Error 404 - KNB Racing'
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<div className='prose prose-invert mx-auto min-h-screen w-full p-12 text-center'>
			<h1>Oops!</h1>
			<p>
				<span className='font-bold'>404:</span> This page does not exist.
			</p>
			<a href='/'>
				<Button cta>Go Home</Button>
			</a>
		</div>
	)
}

export default NoMatchPage
