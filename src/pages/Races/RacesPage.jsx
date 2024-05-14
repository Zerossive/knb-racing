import React, { useEffect, useState } from 'react'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Race from './Race'
import Button from '../../components/Button'
import { FaTimesCircle } from 'react-icons/fa'

const RacesPage = () => {
	const races = [
		{
			title: '2024-05-11',
			url: 'https://www.youtube.com/watch?v=7i2vpdW5YM0',
			description: '',
		},
		{
			title: '2024-05-04',
			url: 'https://www.youtube.com/watch?v=N-E3RmNl3dc',
			description: '',
		},
		{
			title: '2024-04-13',
			url: 'https://www.youtube.com/watch?v=9AWkO7yyh3w',
			description: '',
		},
		{
			title: '2024-04-06',
			url: 'https://www.youtube.com/watch?v=1J94LX7UM4M',
			description: '',
		},
		{
			title: '2024-03-30',
			url: 'https://www.youtube.com/watch?v=LYVmLM0RWX0',
			description: '',
		},
		{
			title: '2024-03-23',
			url: 'https://www.youtube.com/watch?v=PZRzn0oNURI',
			description: '',
		},
		{
			title: '2024-03-09',
			url: 'https://www.youtube.com/watch?v=QRPCPqelyvY',
			description: '',
		},
		{
			title: '2024-03-02',
			url: 'https://www.youtube.com/watch?v=wCbbkcW7Fls',
			description: '',
		},
		{
			title: '2024-02-24',
			url: 'https://www.youtube.com/watch?v=pR1J7JkS8_g',
			description: '',
		},
		{
			title: '2024-01-13',
			url: 'https://www.youtube.com/watch?v=Czc1SVYUhvY',
			description: '',
		},
		{
			title: '2023-11-19',
			url: 'https://www.youtube.com/watch?v=w-I8Z9HlXUU',
			description: '',
		},
		{
			title: '2023-10-14',
			url: 'https://www.youtube.com/watch?v=tBzEk_cP7rE',
			description: '',
		},
		{
			title: '2023-10-07',
			url: 'https://www.youtube.com/watch?v=Mo0D9BP72oM',
			description: '',
		},
		{
			title: '2023-09-30',
			url: 'https://www.youtube.com/watch?v=RIxeirLT4pQ',
			description: '',
		},
		{
			title: '2023-09-23',
			url: 'https://www.youtube.com/watch?v=ovyJow8Q-U0&t=15s',
			description: '',
		},
		{
			title: '2023-09-02',
			url: 'https://www.youtube.com/watch?v=mMO01c0Viw4',
			description: '',
		},
		{
			title: '2023-08-19 Crash',
			url: 'https://www.youtube.com/watch?v=crb-Z5NgPZs',
			description: '',
		},
		{
			title: '2023-08-12 Fire',
			url: 'https://www.youtube.com/watch?v=Z3s-qmgXnFc',
			description: '',
		},
		{
			title: '2023-08-06',
			url: 'https://www.youtube.com/watch?v=yv0sCNqFt9I',
			description: '',
		},
		{
			title: '2023-07-29',
			url: 'https://www.youtube.com/watch?v=Z5TDP-eRyA4',
			description: '',
		},
		{
			title: '2023-07-15 Spinouts',
			url: 'https://www.youtube.com/watch?v=AYu1D1y4egk',
			description: '',
		},
		{
			title: '2023-07-01 Spinout',
			url: 'https://www.youtube.com/watch?v=2M1VNomQIGw',
			description: '',
		},
		{
			title: '2023-06-17',
			url: 'https://www.youtube.com/watch?v=1PZ1reB5MfY',
			description: '',
		},
		{
			title: '2023-05-27',
			url: 'https://www.youtube.com/watch?v=73kBrFyNo1E',
			description: '',
		},
		{
			title: '2023-04-15 Crash into Tire',
			url: 'https://www.youtube.com/watch?v=Si3pDlXvR24',
			description: '',
		},
		{
			title: '2023-04-01 Crash into Flip',
			url: 'https://www.youtube.com/watch?v=eb4YQ_8bZEE',
			description: '',
		},
		{
			title: '2023-03-18',
			url: 'https://www.youtube.com/watch?v=gA5qkUT3YFw',
			description: '',
		},
		{
			title: '2022-08-26 Crash',
			url: 'https://www.youtube.com/watch?v=u0aE3rCkdJE',
			description: '',
		},
		{
			title: '2022-05-17',
			url: 'https://www.youtube.com/watch?v=CyYRgRvveAk&t=8s',
			description: '',
		},
	]

	const [filteredRaces, setFilteredRaces] = useState(races)

	const searchRaces = (e) => {
		const newRaceList = races.filter((race) => {
			if (
				race.title.toUpperCase().includes(e.toUpperCase()) ||
				race.description.toUpperCase().includes(e.toUpperCase())
			) {
				return 1
			}
			return 0
		})
		setFilteredRaces(newRaceList)
	}

	useEffect(() => {
		document.title = 'Races - KNB Racing'
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<main className='w-full bg-overlay'>
			{/* Title */}
			<div className='prose px-12 py-6 text-dark lg:p-24'>
				<h1>Race History</h1>
			</div>

			{/* Transition */}
			<Transition />

			{/* Example Article */}
			<Section>
				<div className='mx-auto animate-fade-in px-6'>
					<div className='flex flex-col rounded-custom bg-overlay p-6 text-dark'>
						<label htmlFor='search'>Search</label>
						<div className='flex flex-wrap gap-6'>
							<input
								type='text'
								id='search'
								name='search'
								className='w-full flex-grow rounded-custom bg-surface bg-opacity-10 p-2 lg:w-auto'
								onChange={(e) => {
									searchRaces(e.target.value)
								}}
							/>
							<Button
								className='flex-grow'
								onClick={() => {
									document.getElementById('search').value = ''
									setFilteredRaces(races)
								}}
							>
								<FaTimesCircle />
								Clear
							</Button>
						</div>
					</div>
				</div>
			</Section>
			<Section>
				<div className='grid w-full gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{filteredRaces.map((race) => (
						<Race race={race} key={race.url} />
					))}
				</div>
			</Section>
		</main>
	)
}

export default RacesPage
