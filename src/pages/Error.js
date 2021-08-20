import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <main className='bg'>
            <div className='grid-container'>
                <div className='grid-item w12 center-vertical'>
                    <div className='card pad-2 center title'>
                        <h2>
                            <span style={{ lineHeight: "3rem" }}>
                                this page does not exist
                            </span>
                        </h2>
                        <Link to='/'>
                            <div>
                                <button className='btn'>go home</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Error;
