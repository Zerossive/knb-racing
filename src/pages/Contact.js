import React, { useState, useEffect } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { bgImages } from "../data";
import Social from "../components/Social";

export default function Contact() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

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
        <main
            className='bg'
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            <div className='grid-container'>
                {/* Title */}
                <div className='grid-item w12'>
                    <div className='w4'></div>
                    <h1 className='w4 title underline'>Contact Us</h1>
                    <div className='w4'></div>
                </div>

                {/* Socials */}
                <Social
                    data={{
                        name: "Email",
                        body: "Contact us through email at knbracer@gmail.com.",
                        logo: "",
                    }}
                />
                {socials.map((social) => {
                    return (
                        <Social data={social.fields} key={social.fields.name} />
                    );
                })}
            </div>
        </main>
    );
}
