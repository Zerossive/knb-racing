import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import { FaCar, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);
    return (
        <nav>
            <div className='nav-header'>
                <div className='logo-container'>
                    <FaCar className='react-icon' />
                </div>
                <Link to='/' className='title'>
                    <h1>KNB Racing</h1>
                </Link>
                <div
                    className={`menu-btn ${isMenuShown && "flip"}`}
                    onClick={() => setIsMenuShown(!isMenuShown)}
                >
                    {/* <Link to=''>
                    </Link> */}
                    <FaAngleDown className='react-icon' />
                </div>
            </div>
            <div
                className={`links-container ${isMenuShown && "show-links"}`}
                // style={{ height: `${isMenuShown ? "100%" : "0px"}` }}
            >
                <ul className='links'>
                    {links.map((link) => {
                        const { name, url } = link;
                        return (
                            <Link
                                key={name}
                                to={`${url}`}
                                onClick={() => setIsMenuShown(false)}
                            >
                                <li>{name}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
