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
                {/* <img src="./Media/phoneIcon.svg" alt="" /> <h3>Tel: 0744 444 444</h3> */}
                <img src="./Media/mailIcon.svg" alt="" /> <h3>E-mail: scoala_calarasi_jud_bt@yahoo.com</h3>
                <a target="_blank" href="https://www.facebook.com/Școala-Gimnazială-Nr1-Călărași-Botoșani-135362940443812">
                    <img src="./Media/facebookIcon.svg" alt="" />
                    <h3>Facebook</h3>
                </a>
            </div>
            <div className="carouselPictures">
                {Array.from({ length: 5 }).map((image, index) => {
                    return <img key={index} className={imgIndex === index + 1 ? "activeImg cImg" : "cImg"} src={`./Media/${index + 1}.png`} alt="" />;
                })}
            </div>
        </div>
    );
}

export default Carousel;
