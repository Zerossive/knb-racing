import React from 'react'
import { twMerge } from 'tailwind-merge'
import VisibilitySensor from 'react-visibility-sensor'

const Article = (props) => {
	const { className, children } = props

	return (
		<VisibilitySensor partialVisibility minTopValue={150}>
			{({ isVisible }) => (
				<article
					className={twMerge([
						'prose prose-invert mx-auto scale-95 px-6 opacity-0 duration-500 ease-in-out lg:prose-xl',
						isVisible && 'scale-100 opacity-100',
						className,
					])}
				>
					{/* Child Elements */}
					{children}
				</article>
			)}
		</VisibilitySensor>
	)
}

export default Article
