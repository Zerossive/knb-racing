import React from 'react'
import Transition from '../../components/Transition'
import Article from '../../components/Article'
import Socials from '../../components/Socials'

export const BrandingPage = () => {
	return (
		<main className='w-full bg-overlay'>
			{/* Title */}
			<div className='prose px-12 py-6 text-dark lg:p-24'>
				<h1>Support</h1>
			</div>

			{/* Transition */}
			<Transition />

			{/* Logos*/}
			<Section>
				<Article>
					<h2>Thank you for your support!</h2>
					<p>
						We're immensely grateful for your{' '}
						<a href='https://ko-fi.com/knbracing'>Ko-fi</a> donation to support Kaylee's
						racing career at KNB Racing. Your generous contribution is instrumental in
						helping Kaylee chase her racing dreams.
					</p>
					<p>
						Your support motivates us to work harder, and we'll keep you updated on
						Kaylee's progress. Thank you for being a part of her journey and making a
						difference.
					</p>
					<Socials showLabels block />
				</Article>
			</Section>
		</main>
	)
}
