import React, { useState } from "react";
import { useGlobalContext } from "../context";
import VideoEmbed from "../components/VideoEmbed";

export default function Races() {
	const generalData = useGlobalContext().generalData;

	const [videos, setVideos] = useState([
		{
			title: "2023-07-29",
			videoUrl: "https://www.youtube.com/watch?v=Z5TDP-eRyA4",
			description: "",
		},
		{
			title: "2023-07-15 Spinouts",
			videoUrl: "https://www.youtube.com/watch?v=AYu1D1y4egk",
			description: "",
		},
		{
			title: "2023-07-01 Spinout",
			videoUrl: "https://www.youtube.com/watch?v=2M1VNomQIGw",
			description: "",
		},
		{
			title: "2023-06-17",
			videoUrl: "https://www.youtube.com/watch?v=1PZ1reB5MfY",
			description: "",
		},
		{
			title: "2023-05-27",
			videoUrl: "https://www.youtube.com/watch?v=73kBrFyNo1E",
			description: "",
		},
		{
			title: "2023-04-15 Crash into Tire",
			videoUrl: "https://www.youtube.com/watch?v=Si3pDlXvR24",
			description: "",
		},
		{
			title: "2023-04-01 Crash into Flip",
			videoUrl: "https://www.youtube.com/watch?v=eb4YQ_8bZEE",
			description: "",
		},
		{
			title: "2023-03-18",
			videoUrl: "https://www.youtube.com/watch?v=gA5qkUT3YFw",
			description: "",
		},
		{
			title: "2022-08-26 Crash",
			videoUrl: "https://www.youtube.com/watch?v=u0aE3rCkdJE",
			description: "",
		},
		{
			title: "2022-05-17",
			videoUrl: "https://www.youtube.com/watch?v=CyYRgRvveAk&t=8s",
			description: "",
		},
	]);
	const [filteredRaces, setFilteredRaces] = useState([...videos]);

	const searchRaces = (e) => {
		const newRaceList = videos.filter((video) => {
			if (
				video.title.toUpperCase().includes(e.toUpperCase()) ||
				video.description.toUpperCase().includes(e.toUpperCase())
			) {
				return 1;
			}
			return 0;
		});
		setFilteredRaces(newRaceList);
	};

	return (
		<main
			className='bg'
			style={{
				backgroundImage: `url(${
					generalData.backgroundImage &&
					generalData.backgroundImage.fields.file.url +
						`?w=${window.screen.width}&h=${window.screen.height}&fm=webp`
				})`,
			}}
		>
			{/* Races */}
			<div className='grid-container padB'>
				{/* Title */}
				<div className='grid-item w12'>
					<div className='w4'></div>
					<h1 className='w4 title underline'>Race History</h1>
					<div className='w4'></div>
				</div>

				{/* Buttons */}
				{videos[0] && (
					<div className='w12 center-vertical anim-fade'>
						{/* Search */}
						<div className='pad m12 center'>
							<input
								type='text'
								className='search'
								placeholder='Search Races'
								onChange={(e) => {
									searchRaces(e.target.value);
								}}
							/>
						</div>

						{/* YouTube Link */}
						<div className='pad m12 center'>
							<button className='btn'>KNB Racing YouTube</button>
						</div>
					</div>
				)}

				{/* Races */}
				<div className='w12 flex'>
					{filteredRaces.map(({ title, videoUrl, description }) => {
						return (
							<div className='w4 pad' key={videoUrl}>
								<VideoEmbed
									title={title}
									videoUrl={videoUrl}
									description={description}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
