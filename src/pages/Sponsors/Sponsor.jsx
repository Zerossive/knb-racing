import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { twMerge } from 'tailwind-merge'
import Button from '../../components/Button'

const Sponsor = ({ sponsor }) => {
	const { url, title, description, image } = sponsor
	return (
		<VisibilitySensor partialVisibility minTopValue={150}>
			{({ isVisible }) => (
				<section
					className={twMerge([
						'mx-auto flex scale-95 flex-wrap items-center justify-center gap-6 px-6 opacity-0 duration-500 ease-in-out',
						isVisible && 'scale-100 opacity-100',
					])}
				>
					<img
						src={image}
						alt='article image'
						className='rounded-custom w-full border-2 border-light bg-overlay md:w-3/4 lg:w-1/2 xl:w-1/3'
						loading='lazy'
					/>
					<section className='prose prose-invert flex grow flex-col lg:prose-xl'>
						<h2 className='!mt-0'>{title}</h2>
						<p className=''>{description}</p>
						<Button fullWidth cta onClick={() => window.open(url)}>
							Visit {title}
						</Button>
					</section>
				</section>
			)}
		</VisibilitySensor>
	)
}

export default Sponsor
