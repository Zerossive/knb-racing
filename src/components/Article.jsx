import React from 'react'
import { twMerge } from 'tailwind-merge'
import VisibilitySensor from 'react-visibility-sensor'
import VisibleWrapper from './VisibleWrapper'

const Article = (props) => {
	const { className, children } = props

	return (
		<VisibleWrapper>
			<article
				className={twMerge(['prose prose-invert mx-auto px-6 lg:prose-xl', className])}
			>
				{/* Child Elements */}
				{children}
			</article>
		</VisibleWrapper>
	)
}

export default Article
