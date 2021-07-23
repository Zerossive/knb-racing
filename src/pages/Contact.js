import React from "react";
import { bgImages } from "../data";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Contact() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

    return (
        <main
            className='bg'
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            {/* Title */}
            <div className='grid-item w12'>
                <div className='w4'></div>
                <h1 className='w4 title underline'>Contact Us</h1>
                <div className='w4'></div>
            </div>

            <div className='grid-container'>
                {/* Facebook */}
                <div className='grid-item w4' style={{ minWidth: "300px" }}>
                    <div className='card w12'>
                        <article className='w9'>
                            <h3>Facebook</h3>
                            <p>
                                Visit us on Facebook at
                                <a href='https://www.facebook.com/deanboyce1304'>
                                    {" "}
                                    Kaylee Boyce
                                </a>
                                , where we post...
                            </p>
                        </article>
                        <a
                            className='w3 center-vertical'
                            href='https://www.facebook.com/deanboyce1304'
                        >
                            <FaFacebook className='social-icon' />
                        </a>
                    </div>
                </div>

                {/* Twitter */}
                <div className='grid-item w4' style={{ minWidth: "300px" }}>
                    <div className='card w12'>
                        <article className='w9'>
                            <h3>Twitter</h3>
                            <p>
                                Visit us on Twitter at
                                <a href='http://www.twitter.com'>
                                    {" "}
                                    Kaylee Boyce
                                </a>
                                , where we post...
                            </p>
                        </article>
                        <a
                            className='w3 center-vertical'
                            href='http://www.twitter.com'
                        >
                            <FaTwitter className='social-icon' />
                        </a>
                    </div>
                </div>

                {/* YouTube */}
                <div className='grid-item w4' style={{ minWidth: "300px" }}>
                    <div className='card w12'>
                        <article className='w9'>
                            <h3>YouTube</h3>
                            <p>
                                Visit us on YouTube at
                                <a href='https://www.youtube.com/user/deanboyce1304'>
                                    {" "}
                                    Kaylee Boyce
                                </a>
                                , where we post...
                            </p>
                        </article>
                        <a
                            className='w3 center-vertical'
                            href='https://www.youtube.com/user/deanboyce1304'
                        >
                            <FaYoutube className='social-icon' />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
