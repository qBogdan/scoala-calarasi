import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <div className="logo"></div>
            <div className="btnWrapper">
                <NavBtn title="Acasa" link="/" />
                <NavBtn title="Despre noi" link="istorie">
                    <Link className="dropBtn" to="istorie">
                        Istorie
                    </Link>
                    <Link className="dropBtn" to="resurse-umane">
                        Resurse umane
                    </Link>
                </NavBtn>
                <NavBtn title="Activitati" link="activitati">
                    <Link className="dropBtn" to="activitati">
                        Activitati
                    </Link>
                    <Link className="dropBtn" to="proiecte">
                        Proiecte
                    </Link>
                </NavBtn>
                <NavBtn title="Documente" link="documente-utile">
                    <Link className="dropBtn" to="documente-utile">
                        Documente utile
                    </Link>
                    <Link className="dropBtn" to="orar">
                        Orar
                    </Link>
                </NavBtn>
                <NavBtn title="Contact" link="contact" />
            </div>
        </div>
    );
}

const NavBtn = ({ title, link, children }) => {
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
        >
            <Link className="navLink" to={link}>
                {title}
            </Link>
            {children && isDropped ? <div className="dropMenu">{children}</div> : null}
        </div>
    );
};

export default Nav;
