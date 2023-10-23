import React from 'react'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Socials from '../../components/Socials'

const CallToAction = () => {
	const navigate = useNavigate()

	return (
		<div className='prose z-30 flex animate-fade-in flex-col items-start gap-6 p-6 md:p-12 lg:p-24 lg:pb-32'>
			<h1 className='m-0'>Kaylee Boyce</h1>
			<p className='m-0'>
				I'm a young athlete who loves dirt track racing and overcame injuries to pursue my
				passion with my own tuner car.
			</p>

			{/* CTA Buttons */}
			<div className='flex items-stretch gap-3'>
				<Button cta onClick={() => navigate('/contact')}>
					get in contact
				</Button>
				<Button alt onClick={() => navigate('/support')}>
					Donate
				</Button>
			</div>

			{/* Socials */}
			<Socials />
		</div>
	)
}

export default CallToAction
