import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import { useGlobalContext } from "../context";
import { FaAngleDown } from "react-icons/fa";
import CSS from "./Navbar.module.css";

const Navbar = () => {
    const generalData = useGlobalContext().generalData;

    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <nav>
            <div className={CSS.navHeader}>
                <div className={CSS.logoContainer}>
                    {generalData.logoWhite && (
                        <Link
                            to='/'
                            onClick={() => {
                                setIsMenuShown(false);
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <img
                                src={
                                    generalData.logoWhite.fields.file.url +
                                    "?w=75&h=75&fm=webp"
                                }
                                alt={`${generalData.brandName} logo`}
                                className={CSS.logo}
                            />
                        </Link>
                    )}
                </div>
                <Link
                    to='/'
                    className={`${CSS.title} title`}
                    onClick={() => {
                        setIsMenuShown(false);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <h1>{generalData.brandName}</h1>
                </Link>
                <div
                    className={`${CSS.menuBtn} ${isMenuShown && CSS.flip}`}
                    onClick={() => setIsMenuShown(!isMenuShown)}
                >
                    <FaAngleDown className={CSS.reactIcon} />
                </div>
            </div>
            <div
                className={`${CSS.linksContainer} ${
                    isMenuShown && CSS.showLinks
                }`}
            >
                <ul className={CSS.links}>
                    {links.map((link) => {
                        const { name, url } = link;
                        return (
                            <Link
                                key={name}
                                to={`${url}`}
                                onClick={() => {
                                    setIsMenuShown(false);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
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
