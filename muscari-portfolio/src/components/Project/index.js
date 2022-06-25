import React from "react";

function Project(props) {
    return (
        <a href={props.url} target="_blank" className="project-cell-container">
            <div id="project-cell" className="project-cell">
                <a href="https://github.com/cmuscari" target="_blank">
                    <img src={props.image} alt="" id="project-cell-image" className="project-cell-image" />
                </a>
                <p id="project-cell-text" className="project-cell-text">
                    {props.name}
                    <br></br>
                    <br></br>
                    <span className="project-cell-description">{props.description}</span>
                </p>
            </div>
        </a>

    )
};


export default Project;
