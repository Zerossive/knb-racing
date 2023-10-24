import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Button = (props) => {
	const {
		children,
		cta = false,
		alt = false,
		rounded = true,
		pill = false,
		gradient = false,
		gradientText = false,
		border = false,
		transparent = false,
		caps = true,
		fullWidth = false,
		square = false,
		scale = true,
		raise = true,
		glow = false,
		changeText = '',
		small = false,
		large = false,
		gradientBorder = false,
		underline = false,
		simulate = false,
		href = '',
		link = '',
		onClick,
		className,
	} = props

	const CustomButton = ({ children, onClick, className }) => {
		if (href) {
			return (
				<a onClick={onClick} className={className} href={href}>
					{children}
				</a>
			)
		} else if (link) {
			return (
				<Link onClick={onClick} className={className} to={link}>
					{children}
				</Link>
			)
		} else {
			return (
				<button onClick={onClick} className={className}>
					{children}
				</button>
			)
		}
	}

	return (
		<CustomButton
			className={twMerge(
				// Default Style
				'group relative inline-flex items-center justify-center gap-3 bg-surface px-6 py-3 font-bold text-light no-underline duration-150 ease-in-out hover:opacity-90 active:opacity-80',

				// Alternate General Styles
				cta && 'bg-primary text-light',
				alt &&
					'border-2 border-surface bg-overlay text-dark hover:border-primary hover:text-primary',

				// Base Properties
				transparent && 'bg-transparent text-primary',
				gradient && 'bg-gradient-to-tr from-primary to-secondary text-light',
				gradientText &&
					'bg-gradient-to-tr from-primary to-purple-400 bg-clip-text text-transparent',
				border && 'border border-primary',
				rounded && 'rounded-custom', //adjust complex effects below when changing rounded amount
				pill && 'rounded-full',
				caps && 'uppercase',
				square && 'aspect-square p-3',
				fullWidth && 'w-full',
				small && 'px-2 py-1',
				large && 'px-8 py-4 text-2xl',

				// Effects
				raise && 'hover:-translate-y-1 active:-translate-y-1',
				scale && 'active:scale-95 active:opacity-100',

				// Complex Style Modifiers
				changeText && 'overflow-hidden',
				gradientBorder && 'bg-gradient-to-tr from-primary to-purple-400 p-[1px]', // pading effects border width
				simulate &&
					'border-b border-blue-400 bg-blue-500 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] active:translate-y-1 active:border-b-0 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]',

				// Custom Styles
				className,
			)}
			onClick={onClick}
		>
			{/* Child Elements */}
			{!gradientBorder && !simulate && children}

			{/* More Complex Effects */}
			{glow && (
				<div
					className={twMerge([
						'absolute left-0 top-0 h-full w-full shadow-[0_0_5px_1px_#74c7ec] duration-150 ease-in-out hover:shadow-[0_0_10px_3px_#74c7ec] group-hover:animate-pulse group-active:shadow-[0_0_15px_5px_#74c7ec]',
						rounded && 'rounded-custom',
						pill && 'rounded-full',
					])}
				></div>
			)}
			{changeText && (
				<div
					className={twMerge([
						'absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center bg-mantle text-light opacity-0 duration-150 group-hover:-translate-y-0 group-hover:opacity-100',
					])}
				>
					{changeText}
				</div>
			)}
			{gradientBorder && (
				<div
					className={twMerge([
						'grow bg-mantle px-4 py-3',
						small && 'px-2 py-1',
						rounded && 'rounded-custom',
						pill && 'rounded-full',
					])}
				>
					{children}
				</div>
			)}
			{underline && (
				<div
					className={twMerge([
						'absolute left-1/2 top-full h-1 w-3/4 -translate-x-1/2 bg-primary opacity-0 duration-150 ease-in-out group-hover:-translate-y-3 group-hover:opacity-100 group-active:w-5/6 group-active:opacity-100',
						(rounded || pill) && 'rounded-full',
					])}
				></div>
			)}
			{simulate && (
				<div className={twMerge(['', rounded && 'rounded-custom', pill && 'rounded-full'])}>
					{children}
				</div>
			)}
		</CustomButton>
	)
}

export default Button
