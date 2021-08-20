import React, { useEffect, useState } from "react";
import { client } from "../client";
import { useGlobalContext } from "../context";

export default function Races() {
    const generalData = useGlobalContext().generalData;

    const [races, setRaces] = useState([]);
    const [showImages, setShowImages] = useState(true);

    useEffect(() => {
        client
            .getEntries({
                content_type: "races",
            })
            .then((response) => {
                const sortedItems = response.items.sort((a, b) => {
                    return a.fields.index - b.fields.index;
                });
                setRaces(sortedItems);
            })
            .catch(console.error);
    }, []);

    return (
        <main
            className='bg'
            style={{
                backgroundImage: `url(${
                    generalData.backgroundImage &&
                    generalData.backgroundImage.fields.file.url
                })`,
            }}
        >
            {/* Races v2 */}
            <div
                className='grid-container'
                style={{ justifyContent: "center" }}
            >
                {/* Title */}
                <div className='grid-item w12'>
                    <div className='w4'></div>
                    <h1 className='w4 title underline'>Race History</h1>
                    <div className='w4'></div>
                </div>

                {/* Buttons */}
                <div className='w12 center-vertical'>
                    {/* Show/Hide Images */}
                    <div className='pad'>
                        <button
                            className='btn'
                            onClick={() => setShowImages(!showImages)}
                        >
                            {showImages ? "hide images" : "show images"}
                        </button>
                    </div>
                </div>

                {/* Races (CMS) */}
                {races.map((race) => {
                    const {
                        placement,
                        image1,
                        trackName,
                        location,
                        date,
                        image2,
                    } = race.fields;
                    return (
                        <div className='grid-item w12' key={date}>
                            <div className='card w12'>
                                {/* Left Image */}
                                {showImages && (
                                    <div
                                        className='w3 bg-img'
                                        style={{
                                            backgroundImage: `url(${image1.fields.file.url})`,
                                            minHeight: "250px",
                                        }}
                                    />
                                )}
                                {/* Body */}
                                <div className='w6 grid-item'>
                                    {/* Placement */}
                                    <h1 className='w6 m4 pad center-vertical'>
                                        <span
                                            style={{
                                                // WebkitTextStroke: "2px black",
                                                fontSize: "5rem",
                                            }}
                                        >
                                            #{placement}
                                        </span>
                                    </h1>
                                    {/* Race Info */}
                                    <article className='w6 m8 pad center-vertical'>
                                        <h2 className='w12'>
                                            <span>{trackName}</span>
                                        </h2>
                                        <h3 className='w12'>{location}</h3>
                                        <h3 className='w12'>{date}</h3>
                                    </article>
                                </div>
                                {/* Right Image */}
                                {showImages && (
                                    <div
                                        className='w3 bg-img'
                                        style={{
                                            backgroundImage: `url(${image2.fields.file.url})`,
                                            minHeight: "250px",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
