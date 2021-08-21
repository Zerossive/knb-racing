import React from "react";

const Race = ({ raceData, showImages }) => {
    const { placement, image1, trackName, location, date, image2 } = raceData;

    return (
        <div className='grid-item w12'>
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
};

export default Race;
