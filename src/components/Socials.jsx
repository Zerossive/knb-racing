import React from 'react'
import Button from './Button'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { SiKofi } from 'react-icons/si'
import { twMerge } from 'tailwind-merge'

const Socials = (props) => {
	const { showLabels = false, small = false, block = false, className } = props
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
				<a
					key={social.name}
					href={social.url}
					aria-label={social.name}
					className={twMerge([
						'flex flex-col gap-3',
						block &&
							'rounded-custom flex-row items-center bg-overlay px-6 py-3 text-dark',
					])}
				>
					{showLabels && social.name}
					<Button transparent className='p-0 text-secondary'>
						{social.logo}
					</Button>
				</a>
			))}
		</div>
	)
}

export default Socials
