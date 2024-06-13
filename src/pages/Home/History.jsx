import React from 'react'
import Article from '../../components/Article'
import ImageModal from '../../components/ImageModal'

export const History = () => {
	const history = [
		{
			date: '2020',
			description: "Outlaw Race of 2020 sparks Kaylee's interest in racing",
			// src: 'https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg',
			// modalsrc: 'https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg',
		},
		{
			date: '2021',
			description: 'Kaylee enters her first racing season in a newly built tuner car',
			// src: 'https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg',
			// modalsrc: 'https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg',
		},
		{
			date: '2024',
			description: 'Switch to a new car',
			src: 'https://i.postimg.cc/Xq6c7FZX/knb-new-car-1200.jpg',
			srcset: 'https://i.postimg.cc/B6KB0Nnd/knb-new-car-400.jpg 400w, https://i.postimg.cc/Xq6c7FZX/knb-new-car-1200.jpg 1200w, https://i.postimg.cc/FzbbfRcp/knb-new-car-full.jpg 3000w',
			modalSrc: 'https://i.postimg.cc/FzbbfRcp/knb-new-car-full.jpg',
		},
		{
			date: 'Present',
			description: 'Kaylee continues her racing journey',
		},
	]

	return (
		<Article>
			<h2>history</h2>

			<p>A timeline of notable events in Kaylee's racing career</p>

			<div className='flex flex-col'>
				{history.map((event) => {
					return (
						<div className='group/parent flex flex-row'>
							<div className='flex translate-y-[0.6rem] flex-col items-center'>
								<div className='aspect-square h-[20px] rounded-full bg-light'></div>
								<div className='w-1 flex-grow bg-light group-last/parent:hidden'></div>
							</div>

							<div className='mb-0 flex flex-col pb-12 pl-6 group-last/parent:mb-0 group-last/parent:pb-0'>
								<h3 className='mt-0 sm:mt-0'>{event.date}</h3>
								<div>{event.description}</div>
								{event.src && (
									<ImageModal
										src={event.src}
										srcset={event.srcset}
										modalSrc={event.modalSrc}
										alt='timeline image'
										className='mb-0 w-2/3 sm:mb-0 lg:w-1/3'
										altclassName='w-full lg:w-full'
									/>
								)}
							</div>
						</div>
					)
				})}
			</div>
		</Article>
	)
}
