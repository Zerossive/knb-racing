import React, { useEffect } from 'react'
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
				"At JM&R Body Works, we are leading the way as Dallas Metroplex's most equipped body shop founded in August 2015 by John Chisolm, previous owner of W&B Service Company and John Keith, long time body technician and former United States Reconnaissance Marine.",
			src: 'https://i.postimg.cc/Y9mDC9Jh/knb-sponsor-jmr-full.png',
			// srcset: '',
			modalSrc: 'https://i.postimg.cc/Y9mDC9Jh/knb-sponsor-jmr-full.png',
			url: 'https://jmrbodyworks.com/',
		},
		{
			title: 'DuBose Funeral Home',
			description:
				'DuBose Funeral Home is Family Owned and operated. We at DuBose Funeral Home are dedicated to providing services to the families that have lost loved ones with care and compassion.',
			src: 'https://i.postimg.cc/YqcbWz1d/knb-sponsor-dubose-full.jpg',
			srcset: 'https://i.postimg.cc/FKFPKFjm/knb-sponsor-dubose-400.jpg 400w, https://i.postimg.cc/909bkDjP/knb-sponsor-dubose-1200.jpg 1200w',
			modalSrc: 'https://i.postimg.cc/YqcbWz1d/knb-sponsor-dubose-full.jpg',
			url: 'https://www.dubosefuneralhome.com/',
		},
		{
			title: 'Blue Dream Constructions',
			description:
				'Full Scale Remodel, Roofing, Landscaping, Painting, Plumbing, Electrician work, Tile Work, AC Repair',
			src: 'https://i.postimg.cc/B6XMxhYV/knb-sponsor-blue-dream-full.jpg',
			srcset: 'https://i.postimg.cc/tgrBn056/knb-sponsor-blue-dream-400.jpg 400w, https://i.postimg.cc/B6XMxhYV/knb-sponsor-blue-dream-full.jpg 600w',
			modalSrc: 'https://i.postimg.cc/B6XMxhYV/knb-sponsor-blue-dream-full.jpg',
			url: 'https://www.facebook.com/BDCCompany',
		},
		{
			title: 'Lone Star Accessories',
			description:
				'1 STOP SHOP for ALL YOUR VEHICLES SERVICE NEEDS. Wheels & Tires, ALIGNMENTS Suspension Lift kits, Drop kiTS. Everything done here. Master mechanic on duty',
			src: 'https://i.postimg.cc/dQZ53xT7/knb-sponsor-lone-star-full.jpg',
			srcset: 'https://i.postimg.cc/sXqKKpbD/knb-sponsor-lone-star-400.jpg 400w, https://i.postimg.cc/dQZ53xT7/knb-sponsor-lone-star-full.jpg 700w',
			modalSrc: 'https://i.postimg.cc/dQZ53xT7/knb-sponsor-lone-star-full.jpg',
			url: 'https://www.facebook.com/LsaTexas45/',
		},
	]

	useEffect(() => {
		document.title = 'Sponsors - KNB Racing'
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<main className='w-full bg-overlay'>
			{/* Title */}
			<div className='prose px-12 py-6 text-dark lg:p-24'>
				<h1>Our Sponsors</h1>
			</div>

			{/* Transition */}
			<Transition />

			{/* Sponsors */}
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
			{sponsors.map((sponsor) => (
				<Section>
					<Sponsor sponsor={sponsor} key={sponsor.title} />
				</Section>
			))}
		</main>
	)
}

export default SponsorsPage
