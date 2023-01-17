import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style/burger.css";

function BurgerNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="burger">
            <div
                className="burgerButton"
                onClick={() => {
                    setIsOpen(old => !old);
                }}
            >
                <h3 style={{ marginLeft: "2rem" }}>Meniu</h3>
                <div className="burgerIcon">
                    <div className={isOpen ? "line" : "linePlus line"}></div>
                    <div className={isOpen ? "line" : "line2Plus line"}></div>
                </div>
            </div>
            <div className="burgerMenu" style={{ height: isOpen ? "auto" : "0" }}>
                <ButtonLink link="/" name="Acasa" setIsOpen={setIsOpen} />
                <ButtonLink link="istorie" name="Istoric" setIsOpen={setIsOpen} />
                <ButtonLink link="resurse-umane" name="Resurse umane" setIsOpen={setIsOpen} />
                <ButtonLink link="activitati" name="Activitati" setIsOpen={setIsOpen} />
                <ButtonLink link="documente-utile" name="Documente utile" setIsOpen={setIsOpen} />
                <ButtonLink link="orar" name="Orar" setIsOpen={setIsOpen} />
                <ButtonLink link="contact" name="Contact" setIsOpen={setIsOpen} />
            </div>
        </div>
    );
}

const ButtonLink = ({ link, name, setIsOpen }) => {
    return (
        <div
            className="burgerLink"
            onClick={() => {
                setIsOpen(false);
            }}
        >
            <Link to={link}>{name}</Link>
        </div>
    );
};

export default BurgerNav;
