import React, { useState, useEffect } from "react";
import { client } from "../client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useGlobalContext } from "../context";
import Social from "../components/Social";
import emailjs from "emailjs-com";

export default function Contact() {
    const generalData = useGlobalContext().generalData;

    const [socials, setSocials] = useState([]);
    const [contactNotif, setContactNotif] = useState("");

    useEffect(() => {
        client
            .getEntries({
                content_type: "socials",
            })
            .then((response) => {
                let sortedItems = response.items.sort((a, b) => {
                    return a.fields.index - b.fields.index;
                });
                sortedItems.map((item) => {
                    item.fields.body = documentToHtmlString(item.fields.body);
                    return item;
                });
                setSocials(sortedItems);
            })
            .catch(console.error);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "contact_template",
                e.target,
                "user_cjRJiYDs4DwXgmCzpIluL"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setContactNotif("Submitted Successfully");
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    const autoGrow = (e) => {
        e.target.style.height = "0px";
        e.target.style.height = e.target.scrollHeight + 2 + "px";
    };

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
                {/* Title */}
                <div className='grid-item w12'>
                    <div className='w4'></div>
                    <h1 className='w4 title underline'>Contact Us</h1>
                    <div className='w4'></div>
                </div>

                {/* Contact Form */}
                <div className='w12 pad'>
                    <div className='w12 card pad-2'>
                        <h3>Contact Us Here</h3>
                        <form className='w12 flex' onSubmit={sendEmail}>
                            <div className='w4 pad'>
                                <input
                                    type='text'
                                    className='search w12'
                                    placeholder='Name'
                                    name='name'
                                    required
                                />
                            </div>
                            <div className='w4 pad'>
                                <input
                                    type='text'
                                    className='search w12'
                                    placeholder='Email Address'
                                    name='email'
                                    required
                                />
                            </div>
                            <div className='w4 pad'>
                                <input
                                    type='text'
                                    className='search w12'
                                    placeholder='Phone # (optional)'
                                    name='number'
                                />
                            </div>
                            <div className='w8 pad'>
                                <textarea
                                    type='text'
                                    className='search w12'
                                    placeholder='Message'
                                    name='message'
                                    style={{
                                        resize: "none",
                                        minHeight: "100px",
                                    }}
                                    onInput={(e) => {
                                        autoGrow(e);
                                    }}
                                    required
                                />
                            </div>
                            <div className='w4 pad'>
                                <input
                                    type='submit'
                                    className='btn w12 full-height'
                                    value='Submit'
                                    onClick={() => setContactNotif("")}
                                />
                            </div>
                            {contactNotif && (
                                <div className='w12 pad'>
                                    <article
                                        className='card pad center'
                                        style={{
                                            background: "var(--clr-green-dark)",
                                            color: "white",
                                        }}
                                    >
                                        <p>{contactNotif}</p>
                                    </article>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Socials */}
                {socials.map((social) => {
                    return (
                        <Social data={social.fields} key={social.fields.name} />
                    );
                })}
            </div>
        </main>
    );
}
