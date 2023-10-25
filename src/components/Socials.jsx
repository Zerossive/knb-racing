import React from 'react'
import Button from './Button'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { SiKofi } from 'react-icons/si'
import { twMerge } from 'tailwind-merge'

const Socials = (props) => {
	const { showLabels = false, small = false, block = false, grayscale = false, className } = props
	const socials = [
		{
			name: 'Youtube',
			url: 'https://www.youtube.com/@KNB_Racing',
			logo: <FaYoutube className={twMerge(['h-12 w-auto', small && 'h-8'])} />,
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/knb_racing18',
			logo: <FaInstagram className={twMerge(['h-12 w-auto', small && 'h-8'])} />,
		},
		{
			name: 'TikTok',
			url: 'https://www.tiktok.com/@kayleeboyce_18',
			logo: <FaTiktok className={twMerge(['h-12 w-auto', small && 'h-8'])} />,
		},
		{
			name: 'Ko-fi',
			url: 'https://ko-fi.com/knbracing',
			logo: <SiKofi className={twMerge(['h-12 w-auto', small && 'h-8'])} />,
		},
	]
	return (
		<div className={twMerge(['flex flex-wrap gap-3', className])}>
			{socials.map((social) => (
				<Button
					transparent
					className={twMerge([
						'p-0 text-secondary',
						block && 'rounded-custom bg-overlay px-6 py-3',
						grayscale && 'grayscale hover:grayscale-0',
					])}
					href={social.url}
					key={social.name}
				>
					{social.logo}
					{showLabels && <span className='text-dark'>{social.name}</span>}
					{!showLabels && <span className='sr-only'>{social.name}</span>}
				</Button>
			))}
		</div>
	)
}

export default Socials
