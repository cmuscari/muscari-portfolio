import React from "react";
import Project from '../Project';

function Portfolio() {
    const projectArray = [
        {
            image: "./project-images/food-junkies.jpg",
            name: "Food Junkies",
            description: "A restaurant recommendation site that was created using Node.js, Express.js & MySQL",
            url: "https://github.com/cmuscari/food-junkies"
        },
        {
            image: "./project-images/covid-tracker.jpg",
            name: "COVID-19 Risk Tracker",
            description: "A travel information site that was created using server-side API's",
            url: "https://github.com/cmuscari/covid-risk-tracking-site"
        },
        {
            image: "./project-images/scheduler.jpg",
            name: "Work Day Scheduler",
            description: "A daily scheduling application that was created utilizing local storage",
            url: "https://github.com/cmuscari/super-disco"
        },
        {
            image: "./project-images/budget-tracker.jpg",
            name: "Budget Tracker",
            description: "A budget tracking PWA that was created using Node.js, Express.js, MongoDB & IndexedDB",
            url: "https://github.com/cmuscari/budget-tracker"
        },
        {
            image: "./project-images/social-network.jpg",
            name: "Social Network",
            description: "A social network application that was created using Node.js, Express.js & MongoDB",
            url: "https://github.com/cmuscari/social-network"
        },
        {
            image: "./project-images/placeholder.png",
            name: "<MERN Stack Module Assignment>",
            description: "An application that was created using the MERN Stack & GraphQL",
            url: "https://github.com/cmuscari"
        },
        {
            image: "./project-images/placeholder.png",
            name: "<Group Project 3>",
            description: "An application that was created using the MERN Stack, GraphQL & Redux",
            url: "https://github.com/cmuscari"
        }
    ]

    return (
        <section>
            <div className="projects-section">
                <div className="projects-gallery">
                  {projectArray.map((project) => 
                    <Project image={project.image} name={project.name} description={project.description} url={project.url} />
                  )}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

