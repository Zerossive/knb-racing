import React from 'react'
import track from '../assets/track.svg'
import { twMerge } from 'tailwind-merge'

const Section = (props) => {
	const { className, children } = props

	return (
		<section
			className={twMerge([
				'group relative z-10 overflow-hidden bg-base py-6 lg:py-12',
				className,
			])}
		>
			{/* Background */}
			<img
				src={track}
				className='absolute left-0 top-1/2 -z-10 h-full w-full -translate-y-1/2 select-none bg-transparent object-cover object-bottom group-even:hidden'
				alt='track background'
				loading='lazy'
				onLoad={(e) => {
					e.target.classList.add('animate-fade-in')
				}}
			/>

			{/* Fade Top */}
			<div className='absolute top-0 -z-10 h-1/4 w-full bg-gradient-to-b from-base to-transparent group-even:hidden'></div>

			{/* Child Elements */}
			<div className='flex flex-col gap-24'>{children}</div>

			{/* Fade Bottom */}
			<div className='absolute bottom-0 -z-10 h-1/4 w-full bg-gradient-to-t from-base to-transparent group-even:hidden'></div>
		</section>
	)
}

export default Section
