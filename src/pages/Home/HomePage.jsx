import React, { useEffect } from 'react'
import CallToAction from './CallToAction'
import Transition from '../../components/Transition'
import Section from '../../components/Section'
import Article from '../../components/Article'

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
						<img
							src='https://images.ctfassets.net/fx0qfimg9jd6/6eYMgjhTB2wewuZCJGCgkx/f0f244b172577210f10150a2425c2785/may_8_1.jpg?w=1920&h=540&fm=webp'
							alt='article image'
							className='w-full rounded-custom border-2 border-light'
							loading='lazy'
							onLoad={(e) => {
								e.target.classList.add('animate-fade-in')
							}}
						/>
						<figcaption>Kaylee posing with her first trophy</figcaption>
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
						<img
							src='https://images.ctfassets.net/fx0qfimg9jd6/7ktKBDxR0hU2v8WFpkWknn/c2d7f388c47ddb1b93662422e12e2547/Racing_Photo.jpg?w=1920&h=540&fm=webp'
							alt='article image'
							className='w-full rounded-custom border-2 border-light'
							loading='lazy'
							onLoad={(e) => {
								e.target.classList.add('animate-fade-in')
							}}
						/>
						<figcaption>Kaylee during a race</figcaption>
					</figure>
				</Article>
			</Section>
		</main>
	)
}

export default HomePage
