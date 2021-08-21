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
                {/* Site Attribution */}
                <div className='w4 center-vertical'>
                    {generalData.logo && (
                        <div
                            className='w4 m4 bg-img'
                            style={{
                                backgroundImage: `url(${generalData.logo.fields.file.url})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    )}
                    <article className='w8 m8 title'>
                        <p>Website Developer:</p>
                        <p>Danny Harris</p>
                    </article>
                </div>

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

                {/* Socials */}
                <div className={`w4 ${CSS.logoContainer}`}>
                    {socials.map((social) => {
                        const { name, logo, link } = social.fields;
                        if (!logo || !link) return null;
                        return (
                            <a href={link} key={name}>
                                <img
                                    src={logo.fields.file.url}
                                    alt={name}
                                    className={CSS.socialLogo}
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
