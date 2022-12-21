import React from "react";
import Carousel from "./Carousel";
import Nav from "./Nav";

function Header() {
    return (
        <div className="header">
            <Carousel />
            <Nav />
        </div>
    );
}

export default Header;
