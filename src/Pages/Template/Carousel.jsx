import React, { useEffect, useState } from "react";
import "./Style/carousel.css";

function Carousel() {
    const [imgIndex, setImgIndex] = useState(1);

    useEffect(() => {
        const imgTimeout = setTimeout(() => {
            setImgIndex(old => (old > 4 ? 1 : old + 1));
        }, 4000);
        return () => {
            clearTimeout(imgTimeout);
        };
    }, [imgIndex]);

    return (
        <div className="carousel">
            <div className="topInfo">
                <h3>Tel: 0744 444 444</h3>
                <h3>E-mail: sc.calarsi@gmai.com</h3>
                <a href="https://www.facebook.com/Școala-Gimnazială-Nr1-Călărași-Botoșani-135362940443812">
                    <h3>Facebook</h3>
                </a>
            </div>
            <div className="carouselPictures">
                {Array.from({ length: 5 }).map((image, index) => {
                    return <img key={index} className={imgIndex === index + 1 ? "activeImg cImg" : "cImg"} src={`./Media/${index + 1}.jpg`} alt="" />;
                })}
            </div>
        </div>
    );
}

export default Carousel;
