import React, { useState } from 'react'
import Button from '../../components/Button'
import Section from '../../components/Section'
import Article from '../../components/Article'
import Transition from '../../components/Transition'
import VisibleWrapper from '../../components/VisibleWrapper'
import Socials from '../../components/Socials'
import emailjs from '@emailjs/browser'
import { FaTimes, FaCheck } from 'react-icons/fa'

const ContactPage = () => {
	const [contactStatus, setContactStatus] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		emailjs.sendForm('gmail', 'contact_template', e.target, 'user_cjRJiYDs4DwXgmCzpIluL').then(
			(result) => {
				setContactStatus('Submitted Successfully')
				console.log('email sent', result.text)
			},
			(error) => {
				setContactStatus('An error occurred, please try again.')
				console.log(error.text)
			},
		)
	}
	return (
		<main className='w-screen bg-overlay'>
			{/* Title */}
			<div className='prose px-12 py-6 text-dark lg:p-24'>
				<h1>Contact Us</h1>
			</div>

			{/* Transition */}
			<Transition />

			{/* Example Article */}
			<Section>
				<VisibleWrapper className='mx-auto flex flex-col gap-6 px-6'>
					<form
						className='rounded-custom flex w-full flex-wrap gap-6 bg-overlay p-6 text-dark'
						onSubmit={handleSubmit}
					>
						<div className='grow'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								name='name'
								className='rounded-custom w-full bg-surface bg-opacity-10 p-2'
							/>
						</div>
						<div className='grow'>
							<label htmlFor='phone'>Phone #</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								className='rounded-custom w-full bg-surface bg-opacity-10 p-2'
							/>
						</div>
						<div className='w-full'>
							<label htmlFor='email'>Email*</label>
							<input
								type='email'
								id='email'
								name='email'
								className='rounded-custom w-full bg-surface bg-opacity-10 p-2'
								required
							/>
						</div>
						<div className='w-full'>
							<label htmlFor='message'>Message*</label>
							<textarea
								type='text'
								id='message'
								name='message'
								className='rounded-custom h-40 w-full bg-surface bg-opacity-10 p-2'
								required
							/>
						</div>
						<Button cta fullWidth type='submit'>
							submit
						</Button>
					</form>
					{contactStatus && (
						<Button
							className={`text-dark ${
								contactStatus === 'Submitted Successfully'
									? 'bg-success'
									: 'bg-error'
							}`}
							onClick={() => setContactStatus('')}
						>
							{contactStatus}
							{contactStatus === 'Submitted Successfully' ? <FaCheck /> : <FaTimes />}
						</Button>
					)}
				</VisibleWrapper>
			</Section>
			<Section>
				<Article>
					<p>
						Feel free to reach out if you have any questions, and check out our socials:
					</p>
					<Socials showLabels block />
				</Article>
			</Section>
		</main>
	)
}

export default ContactPage