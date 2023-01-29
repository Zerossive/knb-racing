import { React, useState, useEffect } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useGlobalContext } from "../context";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
	const { generalData } = useGlobalContext();

	const [images, setImages] = useState([]);
	const [articles, setArticles] = useState([]);
	const [videos, setVideos] = useState([]);
	const [showArticles, setShowArticles] = useState(true);
	const [showVideos, setShowVideos] = useState(true);

	useEffect(() => {
		// Get carousel data
		client
			.getEntries({
				content_type: "homeCarousel",
			})
			.then((response) => {
				// Sort and format rich text
				let sortedItems = response.items.sort((a, b) => {
					return a.fields.index - b.fields.index;
				});
				setImages(sortedItems);
			})
			.catch(console.error);
		// Get articles
		client
			.getEntries({
				content_type: "homeArticles",
			})
			.then((response) => {
				// Sort and format rich text
				let sortedItems = response.items.sort((a, b) => {
					return a.fields.index - b.fields.index;
				});
				sortedItems.map((item) => {
					item.fields.body = documentToHtmlString(item.fields.body);
					return item;
				});
				setArticles(sortedItems);
			})
			.catch(console.error);
		// Get videos
		client
			.getEntries({
				content_type: "homeVideos",
			})
			.then((response) => {
				// Sort and format rich text
				let sortedItems = response.items.sort((a, b) => {
					return a.fields.index - b.fields.index;
				});
				sortedItems.map((item) => {
					item.fields.description = documentToHtmlString(
						item.fields.description
					);
					return item;
				});
				setVideos(sortedItems);
			})
			.catch(console.error);
	}, []);

	return (
		<main
			className='bg'
			style={{
				backgroundImage: `url(${
					generalData.backgroundImage &&
					generalData.backgroundImage.fields.file.url +
						`?w=${window.screen.width}&h=${window.screen.height}&fm=webp`
				})`,
				// backgroundImage: `url(${
				// 	generalData.backgroundImage &&
				// 	generalData.backgroundImage.fields.file.url +
				// 		"?w=1920&h=1080&fm=webp"
				// })`,
			}}
		>
			{/* Carousel */}
			{images[0] && (
				<div
					className='grid-container full-width center'
					style={{ marginBottom: "10px" }}
				>
					<Carousel
						autoPlay={true}
						infiniteLoop={true}
						dynamicHeight={true}
						showStatus={false}
						showThumbs={false}
						swipeable={true}
						emulateTouch={true}
						// interval={3000}
						// transitionTime={1000}
					>
						{images.map((article) => {
							const { image, description, index } =
								article.fields;
							return (
								<div className='' key={index}>
									<img
										src={
											image.fields.file.url +
											`?w=${
												window.screen.width
											}&h=${Math.round(
												window.screen.height / 2
											)}&fm=webp`
										}
										// src={
										// 	image.fields.file.url +
										// 	"?w=1080&h=720&fm=webp"
										// }
										className='grid-img'
										alt={description}
										style={{
											height: "50vh",
											minHeight: "300px",
										}}
									/>
									<p
										className='legend'
										style={{ opacity: "0.75" }}
									>
										{description}
									</p>
								</div>
							);
						})}
					</Carousel>
				</div>
			)}
			<div className='grid-container marT'>
				{/* Buttons */}
				{(articles.length > 1 || videos.length > 2) && (
					<div className='w12 center-vertical anim-fade'>
						{/* Show All */}
						{
							<div className='pad m12 center'>
								<button
									className='btn'
									onClick={() => {
										setShowArticles(true);
										setShowVideos(true);
									}}
								>
									show all
								</button>
							</div>
						}
						{/* Show Articles */}
						<div className='pad m12 center'>
							<button
								className='btn'
								onClick={() => setShowArticles(!showArticles)}
							>
								{showArticles
									? "hide articles"
									: "show articles"}
							</button>
						</div>
						{/* Show Videos */}
						<div className='pad m12 center'>
							<button
								className='btn'
								onClick={() => setShowVideos(!showVideos)}
							>
								{showVideos ? "hide videos" : "show videos"}
							</button>
						</div>
					</div>
				)}

				{/* Articles */}
				{showArticles &&
					articles.map((article) => {
						const { image, title, body, index } = article.fields;

						return (
							<div className='grid-item card w12' key={index}>
								{/* Image */}
								<div
									className='w4 bg-img'
									style={{
										backgroundImage: `url(${
											image.fields.file.url
										}?w=${
											window.screen.width
										}&h=${Math.round(
											window.screen.height / 2
										)}&fm=webp)`,
										// backgroundImage: `url(${image.fields.file.url}?w=1000&h=500&fm=webp)`,
										minHeight: "350px",
									}}
								/>
								{/* Body */}
								<article className='w8 pad-2 center-vertical'>
									<h2
										className='w12'
										style={{ textAlign: "justify" }}
									>
										{title}
									</h2>
									<p
										className='w12'
										style={{
											fontSize: "1.1rem",
											lineHeight: "2.2rem",
										}}
										dangerouslySetInnerHTML={{
											__html: body,
										}}
									></p>
								</article>
							</div>
						);
					})}

				<div className='w12 grid-item center-vertical'>
					{/* Videos */}
					{showVideos &&
						videos.map((video) => {
							const { title, videoUrl, description, index } =
								video.fields;

							return (
								<div className='w6 pad' key={index}>
									<div className='w12 card'>
										{/* Title */}
										{title && (
											<h2 className='w12 title'>
												{title}
											</h2>
										)}
										{/* Video */}
										<ReactPlayer
											url={videoUrl}
											controls={true}
											light={true}
											playing={true}
											width='100%'
											height='auto'
											style={{
												aspectRatio: "16/9",
												minHeight: "200px",
											}}
										/>
										{/* Description */}
										{description && (
											<article className='w12 pad'>
												<p
													dangerouslySetInnerHTML={{
														__html: description,
													}}
												></p>
											</article>
										)}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</main>
	);
}
