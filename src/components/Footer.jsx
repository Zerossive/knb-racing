import React from 'react'
import Socials from './Socials'
import { Link } from 'react-router-dom'
import { FaInfoCircle, FaMailBulk } from 'react-icons/fa'

const Footer = (props) => {
	const {
		logo = '/logo.svg',
		links = [
			{ title: 'Home', url: '/' },
			{ title: 'Races', url: '/races' },
			{ title: 'Sponsors', url: '/sponsors' },
			{ title: 'Support', url: '/support' },
			{ title: 'Contact', url: '/contact' },
		],
	} = props

	return (
		<footer className='grid justify-center overflow-x-hidden bg-crust xl:grid-cols-[repeat(3,max-content)] xl:justify-between'>
			<section className='flex items-center justify-end gap-6 p-6 xl:flex-col xl:items-start xl:p-12'>
				<img src={logo} className='h-12 w-auto' alt='logo' />

				<ul className='flex flex-wrap gap-3'>
					{links.map((link) => (
						<li
							key={link.title}
							className='font-bold duration-150 hover:text-secondary'
						>
							<Link to={link.url}>{link.title}</Link>
						</li>
					))}
				</ul>
			</section>

			<section className='order-last flex flex-col justify-end p-6 xl:order-none xl:p-12'>
				<p className='text-center opacity-50'>Copyright © 2023 Kaylee Boyce</p>
			</section>

			<section className='px-6 xl:py-6'>
				<div className='flex flex-col items-start gap-6 rounded-custom bg-surface p-6'>
					<p>Want a website designed for you or your business?</p>
					<div className='flex flex-wrap gap-3'>
						<a
							href='https://dannyharris.info'
							className='flex items-center gap-3 font-bold duration-150 hover:text-secondary'
						>
							<FaInfoCircle />
							dannyharris.info
						</a>
						<a
							href='mailto:knbracer@gmail.com'
							className='flex items-center gap-3 font-bold duration-150 hover:text-secondary'
						>
							<FaMailBulk />
							knbracer@gmail.com
						</a>
					</div>
					<Socials small className='' grayscale />
				</div>
			</section>
			{/* TESTING */}
			{/* <section className='m-3 bg-light p-12 text-dark'>
				light
				<div className='bg-crust m-3 p-12 text-light'>
				crust
				<div className='bg-mantle m-3 p-12'>
				mantle
				<div className='bg-base m-3 p-12'>
				base
				<div className='flex gap-3'>
				<Button>Button</Button>
				<Button cta>Button</Button>
				<Button alt>Button</Button>
				</div>
				<div className='bg-surface m-3 p-12'>
				surface
				<div className='bg-overlay m-3 p-12 text-dark'>
				overlay
				<div className='flex gap-3'>
				<Button>Button</Button>
				<Button cta>Button</Button>
				<Button alt>Button</Button>
				</div>
				</div>
				</div>
				</div>
				</div>
				</div>
			</section> */}
		</footer>
	)
}

export default Footer
