import React from "react";
import Project from '../Project';

function Portfolio() {
    const projectArray = [
        {
            image: "./project-images/10.jpg",
            name: "Food Junkies",
            description: "lorem"
        },
        {
            image: "./project-images/11.jpg",
            name: "Food Junkies2",
            description: "lorem"
        },
        {
            image: "./project-images/12.jpg",
            name: "Food Junkies3",
            description: "lorem"
        }
    ]

    return (
        <section>
            <div className="projects-section">
                <div className="projects-gallery">
                  {projectArray.map((project) => 
                    <Project image={project.image} name={project.name} description={project.description} />
                  )}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
