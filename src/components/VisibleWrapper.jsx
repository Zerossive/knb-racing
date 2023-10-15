import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { twMerge } from 'tailwind-merge'

const VisibleWrapper = (props) => {
	const { children, className } = props
	return (
		<VisibilitySensor partialVisibility minTopValue={150}>
			{({ isVisible }) => (
				<div
					className={twMerge([
						'scale-95 opacity-0 duration-500 ease-in-out',
						isVisible && 'scale-100 opacity-100',
						className,
					])}
				>
					{children}
				</div>
			)}
		</VisibilitySensor>
	)
}

export default VisibleWrapper
