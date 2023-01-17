import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./activityCard.css";

function ActivityCard({ project, setActivity }) {
    const [hover, setHover] = useState(false);

    return (
        <Link to={"/activitate"}>
            <div
                onClick={() => {
                    setActivity(project);
                }}
                className="activityCard"
            >
                <img src={`./Activitati/${project.imgFolder}/0.jpg`} alt="" />
                <div className="mask">
                    <h1 className="ACTitle">{project.title}</h1>
                </div>
            </div>
        </Link>
    );
}

export default ActivityCard;
