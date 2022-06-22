import React from "react";
import Project from '../Project';

function Portfolio() {
    const projectArray = [
        {
            image: "./project-images/13.jpg",
            name: "Food Junkies",
            description: "A restaurant recommendation site that was created using Node.js, Express.js, & MySQL",
            appLink: "https://murmuring-crag-27720.herokuapp.com/",
            githubLink: "https://github.com/cmuscari/food-junkies"
        },
        {
            image: "./project-images/10.jpg",
            name: "COVID-19 Risk Tracker",
            description: "A travel information site that was created using server-side API's",
            appLink: "https://sabotagecat.github.io/covid-risk-tracking-site/",
            githubLink: "https://github.com/cmuscari/covid-risk-tracking-site"
        },
        {
            image: "./project-images/11.jpg",
            name: "Work Day Scheduler",
            description: "A scheduling site that was created utilizing local storage",
            appLink: "https://cmuscari.github.io/super-disco/",
            githubLink: "https://github.com/cmuscari/super-disco"
        },
        {
            image: "./project-images/placeholder.jpg",
            name: "(Module 21 Assignment)",
            description: "A xxxxxx site that was created using the MERN Stack & GraphQL",
            appLink: "https://github.com/cmuscari",
            githubLink: "https://github.com/cmuscari"
        },
        {
            image: "./project-images/placeholder.jpg",
            name: "(Group Project 3)",
            description: "A xxxxxx site that was created using the MERN Stack & GraphQL",
            appLink: "https://github.com/cmuscari",
            githubLink: "https://github.com/cmuscari"
        }
    ]

    return (
        <section>
            <div className="projects-section">
                <div className="projects-gallery">
                  {projectArray.map((project) => 
                    <Project image={project.image} name={project.name} description={project.description} appLink={project.appLink} githubLink={project.githubLink} />
                  )}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
