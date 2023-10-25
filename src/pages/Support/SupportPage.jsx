import React, { useEffect } from 'react'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Article from '../../components/Article'
import Socials from '../../components/Socials'
import VisibleWrapper from '../../components/VisibleWrapper'

const SupportPage = () => {
	useEffect(() => {
		document.title = 'Support - KNB Racing'
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<main className='w-full bg-overlay'>
			{/* Title */}
			<div className='prose px-12 py-6 text-dark lg:p-24'>
				<h1>Support</h1>
			</div>

			{/* Transition */}
			<Transition />

			{/* Example Article */}
			<Section className='flex justify-center'>
				<div className='flex flex-wrap justify-center gap-6'>
					<VisibleWrapper>
						<iframe
							id='kofiframe'
							src='https://ko-fi.com/knbracing/?hidefeed=true&widget=true&embed=true&preview=true'
							className='h-[712px] w-min animate-pulse rounded-custom bg-surface'
							title='knbracing'
							onLoad={(e) => {
								e.target.classList.remove('animate-pulse')
							}}
						></iframe>
					</VisibleWrapper>
					<Article>
						<h2>Thank you for your support!</h2>
						<p>
							We're immensely grateful for your{' '}
							<a href='https://ko-fi.com/knbracing'>Ko-fi</a> donation to support
							Kaylee's racing career at KNB Racing. Your generous contribution is
							instrumental in helping Kaylee chase her racing dreams.
						</p>
						<p>
							Your support motivates us to work harder, and we'll keep you updated on
							Kaylee's progress. Thank you for being a part of her journey and making
							a difference.
						</p>
						<Socials showLabels block />
					</Article>
				</div>
			</Section>
		</main>
	)
}

export default SupportPage
