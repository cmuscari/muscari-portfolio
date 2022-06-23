import React from 'react'
import aboutImage from "../../assets/images/about/about-image.jpg";

function About() {

    return (
        <div className="about-page d-flex flex-column justify-content-center align-items-center" id="about">
            <div className="section-1 d-flex flex-row align-items-center">
                <div className="section-1-text">
                    <h1 className="section-1-title">Hi, I'm Cortnie!</h1>
                    <p className="section-1-text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. 
                    </p>
                </div>
                <div>
                    <img src={aboutImage} className="section-1-image" alt="about image" />
                </div>
            </div>
        </div>
    )
}

export default About;
