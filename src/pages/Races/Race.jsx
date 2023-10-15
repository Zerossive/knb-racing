import React from 'react'
import VisibleWrapper from '../../components/VisibleWrapper'
import ReactPlayer from 'react-player'

const Race = ({ race }) => {
	const { url = '', title = '', description = '' } = race
	return (
		<VisibleWrapper id={`${title}-wrapper`} className='flex flex-col'>
			{title && <h2 className='p-3 text-xl'>{title}</h2>}
			{url && (
				<div className='aspect-video h-auto w-full overflow-hidden rounded-custom bg-crust'>
					<ReactPlayer
						url={url}
						width='100%'
						height='100%'
						controls
						light
						// onReady={() => {
						// 	document
						// 		.getElementById(`${title}-wrapper`)
						// 		.classList.add('animate-fade-in')
						// }}
					/>
				</div>
			)}
			{description && <p className='p-3'>{description}</p>}
		</VisibleWrapper>
	)
}

export default Race