import React from "react";
import GridItem from "../components/GridItem";
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
                {/* <div className='grid-item w12'>
                    <div className='grid-item-content'>
                        <img
                            src='https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                            alt='image'
                            className='grid-image w4'
                        />
                        <article className='w8'>
                            <h1>Grid Item</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Soluta, quasi! Lorem ipsum
                                dolor, sit amet consectetur adipisicing elit.
                                Soluta, quasi! Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Soluta, quasi!
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Soluta, quasi! Lorem ipsum
                                dolor, sit amet consectetur adipisicing elit.
                                Soluta, quasi! Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Soluta, quasi!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Soluta, quasi!
                            </p>
                        </article>
                    </div>
                </div> */}
                <div className='grid-item card w12'>
                    <img
                        src='https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                        alt='image'
                        className='grid-image w4'
                    />
                    <article className='w8'>
                        <h1>Grid Item</h1>
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
                        src='https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                        alt='image'
                        className='grid-image w3'
                    />
                    <div className='card w9'>
                        <article className='w12'>
                            <h1>Grid Item</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Soluta, quasi! Lorem ipsum
                                dolor, sit amet consectetur adipisicing elit.
                                Soluta, quasi! Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Soluta, quasi!
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Soluta, quasi! Lorem ipsum
                                dolor, sit amet consectetur adipisicing elit.
                                Soluta, quasi! Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Soluta, quasi!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Soluta, quasi!
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
                </div>
                {/* <section className='card'>
                    <h1>asdf</h1>
                    <iframe
                        width='auto'
                        height='auto'
                        src='https://www.youtube.com/embed/I0KIFlzVAHk'
                    ></iframe>
                </section>
                <GridItem width={10}>
                    <h1>asdf</h1>
                    <iframe
                        width='auto'
                        height='auto'
                        src='https://www.youtube.com/embed/I0KIFlzVAHk'
                    ></iframe>
                </GridItem> */}
            </div>
        </main>
    );
}
