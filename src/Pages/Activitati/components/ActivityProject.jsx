import React from "react";
import { Link } from "react-router-dom";
import "./activityCard.css";
import "../activitati.css";

function ActivityProject({ activity }) {
    return (
        <div>
            <h1 className="title">{activity.title}</h1>

            <p>{activity.text}</p>
            <div className="activityPictures">
                {Array.from({ length: activity.imgCount }).map((img, index) => {
                    return <img key={index} src={`./Activitati/${activity.imgFolder}/${index}.jpg`} alt="" />;
                })}
            </div>
            <Link to={"/activitati"}>
                <button className="backButton">Înapoi</button>
            </Link>
        </div>
    );
}

export default ActivityProject;
