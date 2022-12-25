import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contact">
            <img src="./Media/scoala.png" alt="" className="gmap" />
            <div className="contactInfo">
                <h1>Școala GimnazialĂ nr.1 CĂlĂraȘi</h1>
                <div className="row">
                    <img className="icon" src="./Media/adressIcon.svg" alt="" />
                    <h2>Str. Principală, Loc. Călărași, Jud. Botoșani</h2>
                </div>
                <div className="row">
                    <img src="./Media/phoneIcon.svg" alt="" className="icon" />
                    <h2>0231.548.829</h2>
                </div>
                <div className="row">
                    <img src="./Media/emailIcon.svg" alt="" className="icon" />
                    <h2>scoala_calarasi_jud_bt@yahoo.com</h2>
                </div>
                <div className="row">
                    <img src="./Media/facebookIconRed.svg" alt="" className="icon" />
                    <a target="_blank" href="https://www.facebook.com/Școala-Gimnazială-Nr1-Călărași-Botoșani-135362940443812">
                        <h2>Școala Gimnazială Nr.1 Călărași, Botoșani</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
