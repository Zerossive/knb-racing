import { React, useState, useEffect } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { bgImages } from "../data";

export default function Home() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client
            .getEntries({
                content_type: "homeArticles",
            })
            .then((response) => {
                let sortedItems = response.items.sort((a, b) => {
                    return a.fields.index - b.fields.index;
                });
                sortedItems.map((item) => {
                    item.fields.body = documentToHtmlString(item.fields.body);
                    return item;
                });
                setArticles(sortedItems);
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
                {/* Articles */}
                {articles.map((article) => {
                    const { image, title, body, index } = article.fields;

                    return (
                        <div className='grid-item card w12' key={index}>
                            <div
                                className='w4 bg-img'
                                style={{
                                    backgroundImage: `url(${image.fields.file.url})`,
                                    minHeight: "350px",
                                }}
                            />
                            <article className='w8 pad-2 center-vertical'>
                                <h2
                                    className='w12'
                                    style={{ textAlign: "justify" }}
                                >
                                    {title}
                                </h2>
                                <p
                                    className='w12'
                                    style={{
                                        fontSize: "1.1rem",
                                        lineHeight: "2.2rem",
                                    }}
                                    dangerouslySetInnerHTML={{ __html: body }}
                                ></p>
                            </article>
                        </div>
                    );
                })}

                {/* Videos */}
                <div className='grid-item w12 center-vertical'>
                    <div className='w4 pad'>
                        <div className='w12 pad card'>
                            <h2 className='w12 title'>
                                first time behind the wheel
                            </h2>
                        </div>
                        <iframe
                            width='auto'
                            height='auto'
                            title='youtube video'
                            style={{
                                // border: "none",
                                // overflow: "hidden",
                                aspectRatio: "9/16",
                                // borderRadius: "45px",
                                // minHeight: "700px",
                            }}
                            className='w12 pad'
                            src='https://www.youtube.com/embed/I0KIFlzVAHk'
                        ></iframe>
                    </div>
                    <div className='w4 pad'>
                        <div className='w12 pad card'>
                            <h2 className='w12 title'>first race</h2>
                        </div>
                        <iframe
                            src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdeanboyce1304%2Fvideos%2F1037324196676505%2F&width=500&show_text=false&height=888&appId'
                            width='auto'
                            height='auto'
                            title='facebook video'
                            style={{
                                // border: "none",
                                // overflow: "hidden",
                                aspectRatio: "9/16",
                                // borderRadius: "45px",
                                // minHeight: "800px",
                            }}
                            className='w12 pad'
                            // scrolling='no'
                            frameborder='0'
                            allowfullscreen='true'
                            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                            allowFullScreen='true'
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* TESTING */}
            {/* <div className='grid-container full-width'>
                <div className='grid-item w12' style={{ background: "white" }}>
                    <iframe
                        width='auto'
                        height='auto'
                        title='youtube video'
                        style={{
                            border: "none",
                            overflow: "hidden",
                            // aspectRatio: "9/16",
                            // minHeight: "700px",
                            minHeight: "300px",
                        }}
                        className='w6'
                        src='https://www.youtube.com/embed/I0KIFlzVAHk'
                    ></iframe>
                    <article className='w6 pad center-vertical'>
                        <h2 className='title pad' style={{ color: "black" }}>
                            Kaylee Boyce
                        </h2>
                        <p
                            className='pad'
                            style={{
                                fontSize: "1.2rem",
                                lineHeight: "2.4rem",
                            }}
                        >
                            I was born on November 28, 2006 in Mesquite TX. I
                            started cheer when i was 5 and stayed in it for 5
                            years, when I wasn't recovering from a broken arm
                            that is. A couple years later I broke my foot, then
                            a few months after that I broke my thumb. Then we
                            moved closer to The Devils Bowl dirt track and I
                            could hear the cars racing while swimming in the
                            pool at night. So I asked my Mom if I could go to a
                            race and watch. She said yes, so at thirteen my dad
                            finally took me to the Outlaw Race of 2020 and from
                            there I was hooked on dirt track racing. That summer
                            mom and dad bought me a tuner car. It was the best,
                            dad and I started working on it to get it ready for
                            the 2021 season and here I am today.
                        </p>
                    </article>
                </div>
            </div> */}

            {/* TESTING */}
            {/* <div className='grid-container full-width'>
                <div className='grid-item w12' style={{ background: "white" }}>
                    <img
                        src={raceData[0].image1}
                        alt='race image'
                        className='w6'
                        style={{
                            objectFit: "cover",
                            height: "auto",
                            backgroundSize: "cover",
                            objectPosition: "center",
                        }}
                    />
                    <article className='w6 pad center-vertical'>
                        <h1 className='title pad' style={{ color: "black" }}>
                            Kaylee Boyce
                        </h1>
                        <p
                            className='pad'
                            style={{
                                fontSize: "1.5rem",
                                lineHeight: "3rem",
                            }}
                        >
                            I was born on November 28, 2006 in Mesquite TX. I
                            started cheer when i was 5 and stayed in it for 5
                            years, when I wasn't recovering from a broken arm
                            that is. A couple years later I broke my foot, then
                            a few months after that I broke my thumb. Then we
                            moved closer to The Devils Bowl dirt track and I
                            could hear the cars racing while swimming in the
                            pool at night. So I asked my Mom if I could go to a
                            race and watch. She said yes, so at thirteen my dad
                            finally took me to the Outlaw Race of 2020 and from
                            there I was hooked on dirt track racing. That summer
                            mom and dad bought me a tuner car. It was the best,
                            dad and I started working on it to get it ready for
                            the 2021 season and here I am today.
                        </p>
                    </article>
                </div>
            </div> */}
        </main>
    );
}
