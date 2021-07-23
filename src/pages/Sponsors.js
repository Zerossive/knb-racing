import React from "react";
import { sponsorData, bgImages } from "../data";

const Sponsors = () => {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

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

                {/* Sponsor 1 */}
                {sponsorData.map((sponsor) => {
                    const { name, desc, image } = sponsor;

                    return (
                        <div className='grid-item card w12' key={name}>
                            <img
                                src={image}
                                alt={name}
                                className='grid-image w4'
                            />
                            <article className='w8'>
                                <h1>{name}</h1>
                                <p>{desc}</p>
                                <div className='grid-item w12'>
                                    <p className='w6'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sequi eum non labore
                                        velit voluptatum veniam. Suscipit
                                        laborum officia totam commodi?
                                    </p>
                                    <p className='w6'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sequi eum non labore
                                        velit voluptatum veniam. Suscipit
                                        laborum officia totam commodi?
                                    </p>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Sponsors;
