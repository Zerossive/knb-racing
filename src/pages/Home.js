import { React, useState, useEffect } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useGlobalContext } from "../context";
import ReactPlayer from "react-player";

export default function Home() {
    const generalData = useGlobalContext().generalData;

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
                backgroundImage: `url(${
                    generalData.backgroundImage &&
                    generalData.backgroundImage.fields.file.url
                })`,
            }}
        >
            <div className='grid-container'>
                {/* Articles */}
                {articles.map((article) => {
                    const { image, title, body, index } = article.fields;

                    return (
                        <div className='grid-item card w12' key={index}>
                            {/* Image */}
                            <div
                                className='w4 bg-img'
                                style={{
                                    backgroundImage: `url(${image.fields.file.url})`,
                                    minHeight: "350px",
                                }}
                            />
                            {/* Body */}
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
                <div className='w12 grid-item center-vertical'>
                    {/* YT Video */}
                    <div className='w6 pad'>
                        <div className='w12 card'>
                            {/* Title */}
                            <h2 className='w12 title'>
                                first time behind the wheel
                            </h2>
                            {/* Video */}
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=I0KIFlzVAHk'
                                controls={true}
                                light={true}
                                playing={true}
                                width='100%'
                                height='auto'
                                style={{ aspectRatio: "16/9" }}
                            />
                            {/* Description */}
                            {/* <article className='w12 pad'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aperiam ab libero iste
                                    dolore ipsa pariatur dolores reiciendis
                                    eveniet officiis enim.
                                </p>
                            </article> */}
                        </div>
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
