import { React, useEffect, useState } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { bgImages } from "../data";

const Sponsors = () => {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

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
                backgroundImage: `url(${url})`,
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
                {sponsors.map((sponsor) => {
                    const { logo, sponsorName, body, websiteAddress, index } =
                        sponsor.fields;

                    return (
                        <div className='grid-item card w12' key={index}>
                            <img
                                src={logo.fields.file.url}
                                alt={sponsorName}
                                className='w4'
                                style={{ objectFit: "contain" }}
                            />
                            <article className='w8 pad'>
                                <h2>{sponsorName}</h2>
                                <p
                                    dangerouslySetInnerHTML={{ __html: body }}
                                ></p>
                                <a href={websiteAddress}>
                                    <button className='btn w12'>
                                        Visit {sponsorName}
                                    </button>
                                </a>
                            </article>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Sponsors;
