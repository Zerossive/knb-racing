import React, { useEffect, useState } from "react";
import { client } from "../client";
import { raceData, bgImages } from "../data";

export default function Races() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

    const [races, setRaces] = useState([]);

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
                backgroundImage: `url(${url})`,
            }}
        >
            {/* <div className='race-container'>
                {raceData.map((race) => {
                    const { place, name, location, date, image } = race;
                    return (
                        <section key={name} className='event-card'>
                            <div
                                className='event-card-image'
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            >
                                <h1>{place}</h1>
                            </div>
                            <article>
                                <h2>
                                    <span>{name}</span>
                                </h2>
                                <p>{location}</p>
                                <p>{date}</p>
                            </article>
                        </section>
                    );
                })}
            </div> */}

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

                {/* Races */}
                {/* {raceData.map((race) => {
                    const { place, name, location, date, image1, image2 } =
                        race;
                    return (
                        <div
                            className='grid-item w12 card-list-item'
                            key={date}
                        >
                            <div className='card w12'>
                                <div
                                    className='grid-image bg-image w3 '
                                    style={{
                                        backgroundImage: `url(${image1})`,
                                    }}
                                >
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                    <h1 className=''>
                                        <span>{place}</span>
                                    </h1>
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                </div>
                                <article className='w6 grid-item'>
                                    <h2 className='title w4 center-vertical'>
                                        <span>{name}</span>
                                    </h2>
                                    <h3 className='title w4 center-vertical'>
                                        {location}
                                    </h3>
                                    <h3 className='title w4 center-vertical'>
                                        {date}
                                    </h3>
                                </article>
                                <div
                                    className='grid-image bg-image-right bg-image w3 center-vertical'
                                    style={{
                                        backgroundImage: `url(${image2})`,
                                    }}
                                >
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                    <h1 className='title'>
                                        <span></span>
                                    </h1>
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                </div>
                            </div>
                        </div>
                    );
                })} */}

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
                        <div
                            className='grid-item w12 card-list-item'
                            key={date}
                        >
                            <div className='card w12'>
                                <div
                                    className='grid-image bg-image w3 '
                                    style={{
                                        backgroundImage: `url(${image1.fields.file.url})`,
                                    }}
                                >
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                    <h1 className=''>
                                        <span>#{placement}</span>
                                    </h1>
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                </div>
                                <article className='w6 grid-item'>
                                    <h2 className='title w4 center-vertical'>
                                        <span>{trackName}</span>
                                    </h2>
                                    <h3 className='title w4 center-vertical'>
                                        {location}
                                    </h3>
                                    <h3 className='title w4 center-vertical'>
                                        {date}
                                    </h3>
                                </article>
                                <div
                                    className='grid-image bg-image-right bg-image w3 center-vertical'
                                    style={{
                                        backgroundImage: `url(${image2.fields.file.url})`,
                                    }}
                                >
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                    <h1 className='title'>
                                        <span></span>
                                    </h1>
                                    <div className='w12'></div>
                                    <div className='w12'></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
