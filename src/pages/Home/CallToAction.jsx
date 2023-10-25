import React from 'react'
import Button from '../../components/Button'
import Socials from '../../components/Socials'
import { FaDollarSign, FaMailBulk } from 'react-icons/fa'

const CallToAction = () => {
	return (
		<div className='prose z-30 flex flex-col items-start gap-6 p-6 md:p-12 lg:p-24 lg:pb-32'>
			<h1 className='m-0'>Kaylee Boyce</h1>
			<p className='m-0'>
				I'm a young athlete who loves dirt track racing and overcame injuries to pursue my
				passion with my own tuner car.
			</p>
			{/* CTA Buttons */}
			<div className='flex flex-wrap items-stretch gap-3'>
				<Button cta link='/contact'>
					<FaMailBulk />
					get in contact
				</Button>
				<Button alt link='/support'>
					<FaDollarSign />
					Donate
				</Button>
			</div>
			{/* Socials */}
			<Socials />
		</div>
	)
}

export default CallToAction
