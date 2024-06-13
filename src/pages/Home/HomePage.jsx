import React, { useEffect } from 'react'
import CallToAction from './CallToAction'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Article from '../../components/Article'
import ImageModal from '../../components/ImageModal'
import { History } from './History'
import { Carousel } from './Carousel'

const HomePage = () => {
	useEffect(() => {
		document.title = 'KNB Racing'
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<main className='w-full bg-overlay'>
			{/* Home CTA */}
			<CallToAction />

			{/* Transition */}
			<Transition showCar />

			{/* Intro Article */}
			<Section className='pt-12 lg:pt-36'>
				<Article>
					<h2>Who is Kaylee?</h2>
					<p>
						As a young athlete with a passion for racing, I have always been drawn to
						the thrill and excitement of dirt track racing. Prior to racing I
						participated in cheer for 5 years and despite facing a few setbacks,
						including a broken arm, foot, and thumb, I never let my injuries hold me
						back. In fact, it was a move closer to The Devils Bowl dirt track that
						sparked my interest in racing even further. At just 13 years old, my dad
						took me to my first race, the Outlaw Race of 2020, and I was immediately
						hooked. With the support of my parents, I was able to start working on my
						own tuner car and prepare for the 2021 racing season. I am eager to continue
						pursuing my love for racing and am confident that with hard work and
						determination, I can achieve my goals on and off the track.
					</p>
					<figure>
						<ImageModal
							src='https://i.postimg.cc/htXHjMq2/knb-kaylee-1200.jpg'
							modalSrc='https://i.postimg.cc/htNN7xDc/knb-kaylee-full.jpg'
							srcset='https://i.postimg.cc/gk299mtF/knb-kaylee-400.jpg 400w, https://i.postimg.cc/htXHjMq2/knb-kaylee-1200.jpg 1200w'
							alt='article image'
						/>
						<figcaption>Kaylee posing with her trophy</figcaption>
					</figure>
				</Article>
			</Section>

			<Section>
				<Article>
					<h2>We're Seeking Sponsors!</h2>
					<p>
						Attention all racing fans! We have a new up-and-coming dirt track racer on
						the scene, and she needs your support. Meet Kaylee Boyce, a fierce and
						determined competitor with a passion for speed and a drive to win. She has
						already made a name for herself on the local circuit, and we can't wait to
						see what she can do on a bigger stage. But to take her career to the next
						level, she needs sponsorships to help cover the costs of equipment and
						travel.
					</p>
					<p>
						We believe in Kaylee's talent and potential, and we know that with the right
						support, she can make it to the top. If you or someone you know is
						interested in becoming a sponsor, please reach out to us <a href=''>here</a>{' '}
						or at <a href=''>knbracer@gmail.com</a>. Let's help this talented young
						racer achieve her dreams and make history on the track!
					</p>
					<figure>
						<ImageModal
							src='https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg'
							modalSrc='https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg'
							srcset='https://i.postimg.cc/Pf4GFP4Q/knb-car-400.jpg 400w, https://i.postimg.cc/NfJ3BSZy/knb-car-full.jpg 1000w'
							alt='article image'
						/>
						<figcaption>Kaylee during a race</figcaption>
					</figure>
				</Article>
			</Section>

			<Section>
				<History />
			</Section>

			<Section>
				<Carousel />
			</Section>
		</main>
	)
}

export default HomePage
