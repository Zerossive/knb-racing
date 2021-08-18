import React from "react";
import { bgImages } from "../data";
import {
    FaTwitter,
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaRegEnvelope,
} from "react-icons/fa";

export default function Contact() {
    const { url } = bgImages[Math.floor(Math.random() * bgImages.length)];

    return (
        <main
            className='bg'
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            <div className='grid-container center-vertical'>
                {/* Title */}
                <div className='grid-item w12'>
                    <div className='w4'></div>
                    <h1 className='w4 title underline'>Contact Us</h1>
                    <div className='w4'></div>
                </div>

                {/* Email */}
                <div className='grid-item w4 pad' style={{ minWidth: "300px" }}>
                    <div className='card w12 pad'>
                        <article className='w9'>
                            <h3>Email</h3>
                            <p>
                                Contact us through email at{" "}
                                <a
                                    href='#'
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            "knbracer@gmail.com"
                                        );
                                    }}
                                >
                                    knbracer@gmail.com
                                </a>
                                . Click text or icon to copy email to clipboard.
                            </p>
                        </article>
                        <a
                            className='w3 center-vertical '
                            href='#'
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "knbracer@gmail.com"
                                );
                            }}
                        >
                            <FaRegEnvelope className='social-icon' />
                        </a>
                    </div>
                </div>

                {/* Facebook */}
                <div className='grid-item w4 pad' style={{ minWidth: "300px" }}>
                    <div className='card w12 pad'>
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
                <div className='grid-item w4 pad' style={{ minWidth: "300px" }}>
                    <div className='card w12 pad'>
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
                <div className='grid-item w4 pad' style={{ minWidth: "300px" }}>
                    <div className='card w12 pad'>
                        <article className='w9'>
                            <h3>YouTube</h3>
                            <p>
                                Visit us on YouTube at
                                <a href='https://www.youtube.com/channel/UCIXZTX6nqppy094SViYq96A'>
                                    {" "}
                                    Kaylee Boyce
                                </a>
                                , where we post clips of Kaylee driving.
                            </p>
                        </article>
                        <a
                            className='w3 center-vertical'
                            href='https://www.youtube.com/channel/UCIXZTX6nqppy094SViYq96A'
                        >
                            <FaYoutube className='social-icon' />
                        </a>
                    </div>
                </div>

                {/* Instagram */}
                <div className='grid-item w4 pad' style={{ minWidth: "300px" }}>
                    <div className='card w12 pad'>
                        <article className='w9'>
                            <h3>Instagram</h3>
                            <p>
                                Visit us on Instagram at
                                <a href='https://www.instagram.com'>
                                    {" "}
                                    KNB Racing
                                </a>
                                , where we post...
                            </p>
                        </article>
                        <a
                            className='w3 center-vertical'
                            href='https://www.instagram.com'
                        >
                            <FaInstagram className='social-icon' />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
