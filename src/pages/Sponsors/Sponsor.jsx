import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { twMerge } from 'tailwind-merge'
import Button from '../../components/Button'
import { FaInfoCircle } from 'react-icons/fa'
import ImageModal from '../../components/ImageModal'

const Sponsor = ({ sponsor }) => {
	const { url, title, description, src, srcset, modalSrc } = sponsor
	return (
		<VisibilitySensor partialVisibility minTopValue={150}>
			{({ isVisible }) => (
				<section
					className={twMerge([
						'mx-auto flex scale-95 flex-wrap items-start justify-center gap-6 px-6 opacity-0 duration-500 ease-in-out',
						isVisible && 'scale-100 opacity-100',
					])}
				>
					<ImageModal
						src={src}
						srcset={srcset}
						modalSrc={modalSrc}
						className='w-96 bg-overlay'
						altclassName='w-auto'
						alt='sponsor image'
					/>
					<section className='prose prose-invert flex grow flex-col lg:prose-xl'>
						<h2>{title}</h2>
						<p>{description}</p>
						{url && (
							<Button fullWidth cta href={url}>
								<FaInfoCircle />
								Visit {title}
							</Button>
						)}
					</section>
				</section>
			)}
		</VisibilitySensor>
	)
}

export default Sponsor
