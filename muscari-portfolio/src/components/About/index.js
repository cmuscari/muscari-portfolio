import React from 'react'
import aboutImage from "../../assets/images/about/about-image.jpg";
import quoteLeftImage from "../../assets/images/about/left-quote_light.png";
import quoteRightImage from "../../assets/images/about/right-quote_light.png";
import photographyIcon from "../../assets/images/icons/photography.png";

function About() {

    return (
        <div className="about-page d-flex flex-column justify-content-center align-items-center" id="about">
            <div className="section-1 d-flex flex-row align-items-center">
                <div className="section-1-text">
                    <h1 className="section-1-title">Hello!<span className="section-1-subtitle">I'm Cortnie</span></h1>
                    <p className="section-1-text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus.
                    </p>
                </div>
                <div>
                    <img src={aboutImage} className="section-1-image" alt="about image" />
                </div>
            </div>

            <div className="section-2 d-flex flex-row align-items-center">
                <div>
                    <img src={aboutImage} className="section-2-image" alt="my story image" />
                </div>
                <div className="section-2-text">
                    <h1 className="section-2-title">My Story</h1>
                    <p className="section-2-text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus.
                    </p>
                </div>
            </div>

            <div className="section-3 d-flex flex-column align-items-center justify-content-center">
                <h1 className="section-3-title">My hobbies + interests</h1>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <img src={photographyIcon} className="hobby-icon" alt="photography icon" />
                    <p className="hobby-title">p h o t o g r a p h y</p>
                </div>
            </div>

            <div className="section-4 d-flex flex-row align-items-center">
                <div>
                    <img src={quoteLeftImage} className="section-4-image" alt="quotation marks image" />
                </div>
                <div className="section-4-text">
                    <h1 className="section-4-title">Favorite Quote</h1>
                    <p className="section-4-text-content">
                        The grass is greener where you decide to water it.
                    </p>
                </div>
                <div>
                    <img src={quoteRightImage} className="section-4-image" alt="quotation marks image" />
                </div>
            </div>
        </div>
    )
}

export default About;
