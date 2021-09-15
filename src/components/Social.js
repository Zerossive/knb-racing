import React from "react";

const Social = ({ data }) => {
    const { name, body, logo, link } = data;
    return (
        <div className='w4 pad' style={{ minWidth: "300px" }}>
            <div className='card w12 pad'>
                <article className={`${!logo ? "w12" : "w9 m9"} pad`}>
                    <h3>{name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: body }}></p>
                </article>
                <a className='w3 m3 center-vertical' href={link}>
                    {logo && (
                        <img
                            src={logo.fields.file.url + "?w=75&h=75&fm=webp"}
                            alt={name}
                            style={{ width: "75px" }}
                        />
                    )}
                </a>
            </div>
        </div>
    );
};

export default Social;
