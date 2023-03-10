import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Nav from "./Nav";
import BurgerNav from "./burgerNav";

function Header() {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <div className="header">
            <Carousel />
            {width > 700 ? <Nav /> : <BurgerNav />}
        </div>
    );
}

export default Header;
