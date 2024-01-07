import React, { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import Modal from './Modal'

const ImageModal = (props) => {
	const {
		src = '',
		modalSrc = src,
		alt = '',
		border = true,
		rounded = true,
		loading = 'lazy',
		className,
		altclassName = '',
	} = props

	const imageModal = useRef(0)

	return (
		<>
			<img
				src={src}
				alt={alt}
				loading={loading}
				className={twMerge([
					'w-full cursor-zoom-in opacity-0',
					border && 'border-2 border-light',
					rounded && 'rounded-custom',
					className,
				])}
				onLoad={(e) => {
					e.target.classList.remove('opacity-0')
					e.target.classList.add('animate-fade-in')
				}}
				onClick={() => imageModal.current?.showModal()}
			/>
			<Modal
				modal={imageModal}
				className='not-prose'
				tabIndex={-1}
				noPadding
				noMaxWidth
				border
			>
				<img
					src={modalSrc}
					alt={alt}
					loading={loading}
					className={twMerge([
						'max-h-[80vh] w-full cursor-zoom-out',
						border && 'border-0 border-light',
						rounded && 'rounded-custom',
						className,
						altclassName,
					])}
					onLoad={(e) => {
						e.target.classList.add('animate-fade-in')
					}}
					onClick={() => imageModal.current?.close()}
				/>
				<figcaption className='absolute bottom-0 left-0 m-3 rounded-custom bg-overlay px-1 text-dark drop-shadow-md'>
					tap anywhere to close
				</figcaption>
			</Modal>
		</>
	)
}

export default ImageModal
