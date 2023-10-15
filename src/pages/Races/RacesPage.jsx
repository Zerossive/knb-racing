import React from 'react'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Article from '../../components/Article'
import Race from './Race'

const RacesPage = () => {
	const races = [
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
				<div className='grid w-full gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{races.map((race) => (
						<Race race={race} key={race.url} />
					))}
				</div>
			</Section>
		</main>
	)
}

export default RacesPage
