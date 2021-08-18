import { React } from "react";
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
                                className='w4'
                                style={{ objectFit: "contain" }}
                            />
                            <article className='w8 pad'>
                                <h1>{name}</h1>
                                <p>{desc}</p>
                                <button className='btn w12'>
                                    <a href='https://jmrbodyworks.com/'>
                                        Visit JM&R
                                    </a>
                                </button>
                            </article>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Sponsors;
