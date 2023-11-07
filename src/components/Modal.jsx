import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

const Modal = (props) => {
	const {
		modal,
		children,
		fullWidth = false,
		noMaxWidth = false,
		alt = false,
		rounded = true,
		border = false,
		gradient = false,
		square = false,
		blur = false,
		noPadding = false,
		appendToRoot = true,
		className,
	} = props

	// Close modal on clicking outside
	const handleModalClick = (e) => {
		if (e.target === modal.current) modal.current.close()
	}

	if (appendToRoot) {
		useEffect(() => {
			document.getElementById('root').appendChild(modal.current)
		}, [])
	}

	return (
		<dialog
			ref={modal}
			className={twMerge([
				// Default Style
				'z-50 animate-fade-in bg-transparent backdrop:bg-dark backdrop:bg-opacity-80',

				// Max width handling (fullWidth sets to the full window, noMaxWidth lets content stretch the modal, default is for max prose width)
				fullWidth || noMaxWidth ? `${fullWidth && 'w-full'}` : 'max-w-prose',
			])}
			onClick={(e) => handleModalClick(e)}
		>
			<div
				className={twMerge([
					// Default Style
					'flex flex-col items-start gap-3 overflow-hidden bg-base p-6 text-light duration-150 ease-in-out',

					// Alternate General Styles
					alt && 'border border-secondary bg-surface',

					// Base Properties
					rounded && 'rounded-custom',
					border && 'border-2 border-secondary',
					gradient && 'bg-gradient-to-tr from-primary to-purple-400 text-light',
					square && 'aspect-square grow-0 items-center justify-center',
					blur && 'bg-opacity-50 backdrop-blur-xl',
					noPadding && 'p-0',

					// Custom Styles
					className,
				])}
			>
				{children}
			</div>
		</dialog>
	)
}

export default Modal
