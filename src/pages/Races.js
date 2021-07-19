import React from "react";
import { raceData, bgImages } from "../data";

export default function Races() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

    return (
        <main
            className='bg'
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            <div className='race-container'>
                {raceData.map((race) => {
                    const { place, name, location, date, image } = race;
                    return (
                        <section key={name} className='event-card'>
                            <div
                                className='event-card-image'
                                // style={{
                                //     backgroundImage:
                                //         "url(https://picsum.photos/1360/768)",
                                // }}
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
            </div>
        </main>
    );
}
