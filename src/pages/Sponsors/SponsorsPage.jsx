import React, { useEffect } from 'react'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Sponsor from './Sponsor'
import Article from '../../components/Article'
import { Link } from 'react-router-dom'

const SponsorsPage = () => {
	const sponsors = [
		// {
		// 	title: 'company name',
		// 	description: 'company description',
		// 	src: 'medium_image_url',
		// 	srcset: 'small_image_url 400w, medium_image_url 1200w, large_image_url 3000w',
		// 	modalSrc: 'large_image_url',
		// 	url: 'website_url',
		// },
		{
			title: 'Nobody Wrap Co',
			description:
				'We offer full wraps to simple decals,  custom tailored to fit your needs and budget. We offer all forms of wraps from custom trailer wraps, powersports, personal vehicle and dirt oval racing.',
			url: 'https://nobodywrapco.com',
			src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/590397647_1185781693760246_4159778045592935964_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JGd-lNtpqAMQ7kNvwHZ8y7X&_nc_oc=AdodhW_-dpp7LnWVA-NkZ5xG5cEiaTbu2F3OeVihsreHhn8w8bjk8sGyaTnzX4ltMrCMdTPy5zMUTLkofXtoLg5b&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1v8052GxHtMhXoRCnYnp2A&_nc_ss=7b2a8&oh=00_Af1ECkSna6a4k8ox6CRFVeCaddHmJTvuZNi7AKJd0ZE1TQ&oe=69F5A215',
		},
		{
			title: 'RAD Powder Coating',
			description:
				'Specializing in Powder Coating, Sand Blasting and Bead Blasting, Metal Fabrication and Welding',
			url: 'https://www.facebook.com/p/RAD-Powder-Coating-LLC-100083225264080/',
			src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/465969722_566055912845246_7215328105572082021_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Qz43OhqXx0IQ7kNvwFGDr8J&_nc_oc=Ado8TnJvXPRrG90T3wVbmUR97u7mJk361Hmf1THlCag7QWUTR7XFwj-Mu_emulrSjMuVk8eV9AYE3anqZmf9ntwC&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aWYBHLqfz0B80-K5aW-PvQ&_nc_ss=7b2a8&oh=00_Af0WSXMMLZKMyR6LCClDD2SuICLnhsQcXRZhnUWplRoJiQ&oe=69F58323',
		},
		{
			title: 'Forney Radiator Service',
			description:
				'For your heavy-duty and automobile radiator needs, contact the experts at Forney Radiator Service. We are a distributor of quality cooling and emmission products in the DFW metroplex, Waco-East Texas and Shreveport area.',
			url: 'https://www.forneyradiator.com',
			src: 'https://lirp.cdn-website.com/56ae7b3d/dms3rep/multi/opt/new-forley-logo-604w.jpg',
		},
		{
			title: 'Renfrow Tools',
			description: 'Jeremy Renfrow: Authorized Matco distributor',
			// url: '',
			// src: '',
		},
		{
			title: 'Dirt Defender',
			description:
				'Dirt Defender LLC is a revolutionary company that manufactures new age racing products. We are currently manufacturing wheel covers for dirt track racing. Our wheel covers fit Aero,Bassett,Real,Circle and more. Our wheel ring allows you to use our cover on your bead- lock or non-bead lock wheels.',
			url: 'https://dirtdefender-com.3dcartstores.com',
			src: 'https://dirtdefender-com.3dcartstores.com/assets/images/logo2018.png',
		},
		{
			title: "Smiley's",
			description:
				"Smiley's Racing Products and Hoosier Tire Southwest has been in the racing business since 1968 in the Dallas/Fort Worth area. All employees at Smiley's Racing Products and Hoosier Tire Southwest are directly involved with race teams either as owners, drivers, pit crew members etc... What this means to you, our customers, is racing advice that has been tested on the track first, then we pass our findings on to you.",
			url: 'https://www.smileysracing.com',
			src: 'https://performancedistributors.com/wp-content/uploads/2022/03/smileys-racing-products-logo-for-vendor-websites.png',
		},
		{
			title: 'WDW Woods Construction',
			description:
				'WDW WOODS CONSTRUCTION LLC is an active carrier & broker registered with the FMCSA since January 2010. Based in FERRIS, TX, They are classified as Both Interstate & Intrastate and operate interstate (within 100 miles). Their inferred equipment specializations include Flatbed and Dump Truck.',
			// url: '',
			// src: ''
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
