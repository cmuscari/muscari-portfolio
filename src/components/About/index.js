import React from 'react'
import aboutImage1 from "../../assets/images/about/about-image-1.jpg";
import aboutImage2 from "../../assets/images/about/about-image-2.jpg";
import quoteLeftImage from "../../assets/images/about/left-quote_light.png";
import quoteRightImage from "../../assets/images/about/right-quote_light.png";
import travelIcon from "../../assets/images/icons/travel.png";
import paddleboardingIcon from "../../assets/images/icons/paddleboarding.png";
import photographyIcon from "../../assets/images/icons/photography.png";
import hikingIcon from "../../assets/images/icons/hiking.png";

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
                    <img src={aboutImage1} className="section-1-image" alt="about image" />
                </div>
            </div>

            <div className="section-2 d-flex flex-row align-items-center">
                <div>
                    <img src={aboutImage2} className="section-2-image" alt="my story image" />
                </div>
                <div className="section-2-text">
                    <h1 className="section-2-title">My Story</h1>
                    <p className="section-2-text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus.
                    </p>
                </div>
            </div>

            <div className="section-3 d-flex flex-column align-items-center justify-content-center">
                <h1 className="section-3-title">Hobbies + Interests</h1>
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <img src={travelIcon} className="hobby-icon" alt="travel icon" />
                        <p className="hobby-title">w o r l d - t r a v e l</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <img src={paddleboardingIcon} className="hobby-icon" alt="paddleboarding icon" />
                        <p className="hobby-title">p a d d l e b o a r d i n g</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <img src={photographyIcon} className="hobby-icon" alt="photography icon" />
                        <p className="hobby-title">p h o t o g r a p h y</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center hobby-group">
                        <img src={hikingIcon} className="hobby-icon" alt="hiking icon" />
                        <p className="hobby-title">h i k i n g</p>
                    </div>
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
