import React from "react";

function Project(props) {
    return (
        <div id="project-cell" className="project-cell">
            <img src={props.image} alt="" id="project-cell-image" className="project-cell-image" />
            <p id="project-cell-text" className="project-cell-text">
                {props.name}
                <br></br>
                <br></br>
                {props.description}
            </p>
        </div>
    )
};


export default Project;


