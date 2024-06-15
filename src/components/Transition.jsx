import React from 'react'
import carink from '../assets/carink.svg'

const Transition = ({ showCar }) => {
	return (
		<div className='pointer-events-none relative z-20 h-0 bg-transparent pt-12'>
			{/* Triangle */}
			<svg
				className='w-full origin-bottom -translate-y-[calc(100%-1px)] scale-y-125 fill-base'
				viewBox={`0 0 100 ${showCar ? '20' : '10'}`}
				preserveAspectRatio='none'
			>
				<polygon points={`100,0 0,${showCar ? '20' : '10'} 100,${showCar ? '20' : '10'}`} />
			</svg>

			{/* Car */}
			{showCar && (
				<img
					src={carink}
					alt='car'
					className='pointer-events-none absolute bottom-0 right-5 max-h-[clamp(50px,66vh,700px)] w-2/3 origin-top-right translate-y-1/3 object-contain object-right transition md:right-10 md:translate-y-1/4 lg:right-24'
					// loading='lazy'
					onLoad={(e) => {
						e.target.classList.add('animate-fade-in', 'animate-grow')
					}}
				/>
			)}
		</div>
	)
}

export default Transition
