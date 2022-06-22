import React from "react";

function Project(props) {
    return (
        <div className="project-cell">
            <img src={props.image} alt="" className="project-cell-image" />
            <div className="project-cell-text">{props.name}</div>
        </div>
    )
};


export default Project;


