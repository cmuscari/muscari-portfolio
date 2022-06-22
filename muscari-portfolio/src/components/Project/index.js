import React from "react";

function Project(props) {
    return (
        <div className="project-cell">
            <img src={props.image} alt="" className="project-cell-image" />
            <div className="project-cell-text">{props.name}</div>
            <div className="project-cell-text">{props.description}</div>
            <p className="project-cell-text">Check out the</p>
            <a className="project-cell-text" href={props.appLink}>Deployed Application</a>
            <a className="project-cell-text" href={props.githubLink}>GitHub Repository</a>
        </div>
    )
};


export default Project;


