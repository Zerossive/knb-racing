import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ImageModal from '../../components/ImageModal'
import VisibleWrapper from '../../components/VisibleWrapper'

export const Carousel = () => {
	const options = { loop: true, skipSnaps: true, align: 'start' } // other options: https://www.embla-carousel.com/api/options/
	const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

	const slides = [
		{
			src: 'https://i.postimg.cc/DwPzjqfc/knb-old-car-frame-1200.jpg',
			srcset: 'https://i.postimg.cc/7PjbfHQS/knb-old-car-frame-400.jpg 400w, https://i.postimg.cc/DwPzjqfc/knb-old-car-frame-1200.jpg 1200w, https://i.postimg.cc/26V8SMQH/knb-old-car-frame-full.jpg 3000w',
			imgModal: 'https://i.postimg.cc/26V8SMQH/knb-old-car-frame-full.jpg',
		},
		{
			src: 'https://i.postimg.cc/438xZs97/knb-old-car-full.jpg',
			srcset: 'https://i.postimg.cc/g2WJHMpJ/knb-old-car-400.jpg 400w, https://i.postimg.cc/438xZs97/knb-old-car-full.jpg 1200w',
			imgModal: 'https://i.postimg.cc/438xZs97/knb-old-car-full.jpg',
		},
		{
			src: 'https://i.postimg.cc/rpywvKK2/knb-old-car-race-full.jpg',
			srcset: 'https://i.postimg.cc/sDSxWktq/knb-old-car-race-400.jpg 400w, https://i.postimg.cc/rpywvKK2/knb-old-car-race-full.jpg 900w',
			imgModal: 'https://i.postimg.cc/rpywvKK2/knb-old-car-race-full.jpg',
		},
	]

	return (
		<VisibleWrapper className='embla prose prose-invert mx-auto w-full px-6 lg:prose-xl'>
			<h2>more photos</h2>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{slides.map((slide, index) => (
						<div className='embla__slide' key={index}>
							<ImageModal
								src={slide.src}
								srcset={slide.srcset}
								imgModal={slide.imgModal}
								className='aspect-square object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</VisibleWrapper>
	)
}
