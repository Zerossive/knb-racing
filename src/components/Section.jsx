import React from 'react'
import track from '../assets/track.svg'
import { twMerge } from 'tailwind-merge'

const Section = (props) => {
	const { className, children } = props

	return (
		<section
			className={twMerge(['bg-base group relative z-10 overflow-hidden py-12', className])}
		>
			{/* Background */}
			<img
				src={track}
				className='absolute left-0 top-1/2 -z-10 h-full w-full -translate-y-1/2 bg-transparent object-cover object-bottom group-even:hidden'
				loading='lazy'
			/>

			{/* Fade Top */}
			<div className='from-base absolute top-0 -z-10 h-1/4 w-full bg-gradient-to-b to-transparent'></div>

			{/* Child Elements */}
			<div className='flex flex-col gap-24'>{children}</div>

			{/* Fade Bottom */}
			<div className='from-base absolute bottom-0 -z-10 h-1/4 w-full bg-gradient-to-t to-transparent'></div>
		</section>
	)
}

export default Section
