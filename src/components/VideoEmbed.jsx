import React from "react";
import ReactPlayer from "react-player";

const VideoEmbed = ({ title, videoUrl, description }) => {
	return (
		<div className='w12 card'>
			{/* Title */}
			{title && (
				<h2
					className='w12 title pad'
					style={{
						paddingLeft: "10px",
						paddingRight: "10px",
					}}
				>
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
	);
};

export default VideoEmbed;
