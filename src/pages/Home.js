import React from "react";
import { bgImages, raceData } from "../data";

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
                        src={raceData[0].image1}
                        // src={`${process.env.PUBLIC_URL}/assets/images/first_win.jpg`}
                        alt='image'
                        className='grid-image w4'
                    />
                    <article className='w8'>
                        <h1>kaylee boyce</h1>
                        <p>
                            I was born on November 28, 2006 in Mesquite TX. When
                            I was 5 I started cheer stayed in it for 5yrs not
                            constit cause of a broken arm then a couple years
                            later broke my foot then a few months after that I
                            broke my thumb.Then we moved to a new location still
                            in Mesquite but closer to The Devils Bowl dirt track
                            I could here the cars racing while swimming in the
                            pool at night.So I asked my Mom if I could go to a
                            race and watch , she said yes I was thirteen When my
                            dad finally took me to the Outlaw Race of 2020 and
                            from there I was hooked on dirt track racing. That
                            summer mom and dad bought me a tuner car. It was the
                            best, dad and I started working on it to get it
                            ready for the 2021 season
                        </p>
                    </article>
                </div>
                <div className='w12 center-vertical'>
                    <div className='grid-item  w4 center-vertical'>
                        <h1 className='w12 title'>
                            first time behind the wheel
                        </h1>
                        <iframe
                            // width='400px'
                            // height='800px'
                            style={{
                                border: "none",
                                overflow: "hidden",
                                aspectRatio: "9/16",
                                // minHeight: "700px",
                            }}
                            className='w12'
                            src='https://www.youtube.com/embed/I0KIFlzVAHk'
                        ></iframe>
                    </div>
                    <div className='grid-item  w4 center-vertical'>
                        <h1 className='w12 title'>first race</h1>
                        <iframe
                            src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdeanboyce1304%2Fvideos%2F1037324196676505%2F&width=500&show_text=false&height=888&appId'
                            // width='500'
                            // height='888'
                            style={{
                                // border: "none",
                                // overflow: "hidden",
                                aspectRatio: "9/16",
                                // minHeight: "800px",
                            }}
                            className='w12'
                            // scrolling='no'
                            frameborder='0'
                            allowfullscreen='true'
                            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                            allowFullScreen='true'
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
