import React from 'react'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Sponsor from './Sponsor'
import Article from '../../components/Article'
import { Link } from 'react-router-dom'

const SponsorsPage = () => {
	const sponsors = [
		{
			title: 'JM&R Body Works',
			description:
				"At JM&R Body Works, we are leading the way as Dallas Metroplex's most equipped body shop founded in August 2015 by John Chisolm, previous owner of W&B Service Company and John Keith, long time body technician and former United States Reconnaissance Marine. We strive to maintain a professional and courteous staff that is experienced and well trained. We have over 250 years of combined work experience. With excellent workmanship, we are ready to provide you services that exceed your expectations. We can service and repair any make or model tractor. We are founded on honest, hardworking ethics that are evident by our estimates and work. We strive to give you a quality repair the fastest so we can to get you back on the road.",
			image: 'https://images.ctfassets.net/fx0qfimg9jd6/MiN1pq3PVgKsxWYMqzkZx/d84d8c7d868eaf6a852eed6f1d55c5f5/JMR-logo.png?w=1920&h=360&fm=webp',
			url: 'https://jmrbodyworks.com/',
		},
	]

	return (
		<main className='w-full bg-overlay'>
			{/* Title */}
			<div className='prose px-12 py-6 text-dark lg:p-24'>
				<h1>Our Sponsors</h1>
			</div>

			{/* Transition */}
			<Transition />

			{/* Example Article */}
			<Section>
				{sponsors.map((sponsor) => (
					<Sponsor sponsor={sponsor} key={sponsor.title} />
				))}
			</Section>
			<Section>
				<Article>
					<p>
						If you or someone you know is interested in becoming a sponsor, please reach
						out to us <Link to='/contact'>here</Link> or at{' '}
						<a href='mailto:knbracer@gmail.com'>knbracer@gmail.com</a>. Let's help this
						talented young racer achieve her dreams and make history on the track!
					</p>
				</Article>
			</Section>
			{/* <Section className='flex justify-center'>
				<iframe
					id='kofiframe'
					src='https://ko-fi.com/knbracing/?hidefeed=true&widget=true&embed=true&preview=true'
					className='h-[712px] w-min'
					title='knbracing'
				></iframe>
			</Section> */}
		</main>
	)
}

export default SponsorsPage
