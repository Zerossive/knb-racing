import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import { useGlobalContext } from "../context";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import CSS from "./Footer.module.css";

const Footer = () => {
	const generalData = useGlobalContext().generalData;

	const [socials, setSocials] = useState([]);

	useEffect(() => {
		client
			.getEntries({
				content_type: "socials",
			})
			.then((response) => {
				let sortedItems = response.items.sort((a, b) => {
					return a.fields.index - b.fields.index;
				});
				sortedItems.map((item) => {
					item.fields.body = documentToHtmlString(item.fields.body);
					return item;
				});
				setSocials(sortedItems);
			})
			.catch(console.error);
	}, []);

	return (
		<footer className='grid-container'>
			<div className='grid-item w12'>
				{/* Page Links */}
				<div className='w4 center-vertical pad'>
					<article className='w12'>
						<ul className={CSS.linkList}>
							{links.map((link) => {
								const { name, url } = link;
								return (
									<Link key={name} to={`${url}`}>
										<li
											className={CSS.pageLink}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											{name}
										</li>
									</Link>
								);
							})}
						</ul>
					</article>
				</div>
				<div className='w4 center-vertical'>
					{/* Logo */}
					{generalData.logo && (
						<div
							className='w4 m4 bg-img'
							style={{
								backgroundImage: `url(${generalData.logo.fields.file.url}?w=75&h=75&fm=webp)`,
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								height: "100%",
							}}
						/>
					)}
					{/* Site Attribution */}
					{/* <article className='w8 m8 title'>
						<p>Website Developer:</p>
						<p>Danny Harris</p>
					</article> */}
				</div>

				{/* Socials */}
				<div className={`w4 ${CSS.logoContainer} pad`}>
					{socials.map((social) => {
						const { name, logo, link } = social.fields;
						if (!logo || !link) return null;
						return (
							<a href={link} key={name}>
								<img
									src={
										logo.fields.file.url +
										"?w=75&h=75&fm=webp"
									}
									alt={name}
									className={CSS.socialLogo}
								/>
							</a>
						);
					})}
				</div>
			</div>
			{/* Footer Bottom */}
			<div className={`grid-item w12 pad ${CSS.footerBottom}`}>
				<article className='m12 w4 pad'>
					<p>Get in touch at:</p>
					<a href='mailto:knbracer@gmail.com'>knbracer@gmail.com</a>
				</article>
				<article className='m12 w4 pad'>
					<p>Copyright © 2023 Kaylee Boyce</p>
				</article>
				<article className='m12 w4 pad'>
					<p>Want a website designed for you or your business?</p>
					<p>
						{""}
						<a href='https://dannyharris.info/contact'>
							dannyharris.info
						</a>
					</p>
				</article>
			</div>
		</footer>
	);
};

export default Footer;
