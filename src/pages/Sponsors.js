import { React, useEffect, useState } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useGlobalContext } from "../context";

const Sponsors = () => {
	const generalData = useGlobalContext().generalData;

	const [sponsors, setSponsors] = useState([]);

	useEffect(() => {
		client
			.getEntries({
				content_type: "sponsors",
			})
			.then((response) => {
				let sortedItems = response.items.sort((a, b) => {
					return a.fields.index - b.fields.index;
				});
				sortedItems.map((item) => {
					item.fields.body = documentToHtmlString(item.fields.body);
					return item;
				});
				setSponsors(sortedItems);
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
			}}
		>
			<div className='grid-container'>
				{/* Title */}
				<div className='grid-item w12'>
					<div className='w4'></div>
					<h1 className='w4 title underline'>Sponsors</h1>
					<div className='w4'></div>
				</div>

				{/* Sponsors */}
				<div className='grid-container w12 pad'>
					{sponsors.map((sponsor) => {
						const { logo, sponsorName, body, websiteAddress } =
							sponsor.fields;

						return (
							<div
								className='grid-item card w12'
								key={sponsorName}
							>
								<img
									src={
										logo.fields.file.url +
										`?w=${
											window.screen.width
										}&h=${Math.round(
											window.screen.height / 3
										)}&fm=webp`
									}
									// src={
									//     logo.fields.file.url +
									//     "?w=600&h=300&fm=webp"
									// }
									alt={sponsorName}
									className='w4'
									style={{ objectFit: "contain" }}
								/>
								<article className='w8 pad'>
									<h2>{sponsorName}</h2>
									<div
										dangerouslySetInnerHTML={{
											__html: body,
										}}
									></div>
									<a href={websiteAddress}>
										<button className='btn w12 marT'>
											Visit {sponsorName}
										</button>
									</a>
								</article>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default Sponsors;
