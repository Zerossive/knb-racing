import React from 'react'
import Button from './Button'
import Socials from './Socials'

const Footer = () => {
	return (
		<footer className='flex flex-col justify-between gap-3 overflow-auto bg-crust p-6 lg:flex-row'>
			Copyright © 2023 Kaylee Boyce
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
			<Socials small />
		</footer>
	)
}

export default Footer
