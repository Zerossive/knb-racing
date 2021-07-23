import React from "react";
import { bgImages } from "../data";

export default function Home() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

    return (
        <main
            className='bg'
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            <div className='grid-container'>
                <div className='grid-item card w12'>
                    <img
                        // src={first_win}
                        src={`${process.env.PUBLIC_URL}/assets/images/first_win.jpg`}
                        alt='image'
                        className='grid-image w4'
                    />
                    <article className='w8'>
                        <h1>kaylee boyce</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Soluta, quasi! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Soluta, quasi! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit.
                            Soluta, quasi! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Soluta, quasi! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit.
                            Soluta, quasi! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Soluta, quasi!
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Soluta, quasi!
                        </p>
                        <div className='grid-item w12'>
                            <p className='w6'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sequi eum non labore velit
                                voluptatum veniam. Suscipit laborum officia
                                totam commodi?
                            </p>
                            <p className='w6'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sequi eum non labore velit
                                voluptatum veniam. Suscipit laborum officia
                                totam commodi?
                            </p>
                        </div>
                    </article>
                </div>
                <div className='grid-item w12'>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/car_trailer.jpg`}
                        alt='image'
                        className='grid-image w3'
                    />
                    <div className='card w6'>
                        <div className='w12'>
                            <article className='w12'>
                                <h1>Title</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Soluta, quasi! Lorem ipsum
                                    dolor, sit amet consectetur adipisicing
                                    elit. Soluta, quasi! Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Soluta,
                                    quasi! Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Soluta, quasi!
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Soluta, quasi! Lorem ipsum
                                    dolor, sit amet consectetur adipisicing
                                    elit. Soluta, quasi!
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Soluta, quasi!
                                </p>
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
                    </div>
                    <iframe
                        // width='400px'
                        // height='300px'
                        className='w3'
                        src='https://www.youtube.com/embed/I0KIFlzVAHk'
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
