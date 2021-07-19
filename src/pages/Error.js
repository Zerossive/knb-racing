import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <main className='bg'>
            <div
                className='container'
                style={{
                    flexFlow: "column wrap",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "red" }}>this page does not exist</h1>
                <Link to='/'>
                    <div>
                        <button className='btn'>go home</button>
                    </div>
                </Link>
            </div>
        </main>
    );
};

export default Error;
