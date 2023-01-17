import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [activeLink, setActiveLink] = useState("/");

    return (
        <div className="nav">
            <div className="logo">
                <Link
                    to={"/"}
                    onClick={() => {
                        setActiveLink("/");
                    }}
                >
                    <img src="./Media/logo.svg" alt="" />
                </Link>
            </div>
            <div className="btnWrapper">
                <NavBtn activeLink={activeLink} setActiveLink={setActiveLink} title="Acasa" link="/" />
                <NavBtn activeLink={activeLink} setActiveLink={setActiveLink} title="Despre noi" link="istorie">
                    <Link className="dropBtn" to="istorie">
                        Istoric
                    </Link>
                    <Link className="dropBtn" to="resurse-umane">
                        Resurse umane
                    </Link>
                </NavBtn>
                <NavBtn activeLink={activeLink} setActiveLink={setActiveLink} title="Activitati" link="activitati"></NavBtn>
                <NavBtn activeLink={activeLink} setActiveLink={setActiveLink} title="Documente" link="documente-utile">
                    <Link className="dropBtn" to="documente-utile">
                        Documente utile
                    </Link>
                    <Link className="dropBtn" to="orar">
                        Orar
                    </Link>
                </NavBtn>
                <NavBtn activeLink={activeLink} setActiveLink={setActiveLink} title="Contact" link="contact" />
            </div>
        </div>
    );
}

const NavBtn = ({ title, link, children, setActiveLink, activeLink }) => {
    const [isDropped, setIsDropped] = useState(false);

    return (
        <div
            className="navBtn"
            onMouseEnter={() => {
                setIsDropped(true);
            }}
            onMouseLeave={() => {
                setIsDropped(false);
            }}
            onClick={() => {
                setActiveLink(link);
            }}
        >
            <Link className={activeLink === link ? "navLink activeNavLink" : "navLink"} to={link}>
                {title}
            </Link>
            {children && isDropped ? <div className="dropMenu">{children}</div> : null}
        </div>
    );
};

export default Nav;
