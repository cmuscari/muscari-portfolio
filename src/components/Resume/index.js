import React from 'react'
import resumeIcon from "../../assets/images/icons/resume.jpg";


function Resume() {

    return (
        <div className="resume-page-container" >
            <div className="skills-container d-flex flex-column align-items-center">
                <ul className="skills-list">
                    <h1 className="skills-title">I'm skilled at using:</h1>
                    <li>HTML</li>
                    <li>CSS / Bootstrap</li>
                    <li>JavaScript</li>
                    <li>MERN Stack - MongoDB, Express.js, React + Node.js</li>
                    <li>GraphQL</li>
                    <li>Global State Management / React Context API</li>
                    <li>Relational Databases / MySQL</li>
                    <li>Object-Oriented Programming</li>
                    <li>TDD / Jest</li>
                    <li>Progressive Web Applications</li>
                    <li>IndexedDB</li>
                    <li>JSON Web Tokens</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>
            <div className="resume-container d-flex flex-row justify-content-center align-items-center">
                <div className="resume-container-inner d-flex flex-row justify-content-center align-items-center">
                    <div className="resume-container-inner-inner d-flex flex-column justify-content-center align-items-center">
                        <a href="https://docdro.id/Sz11wGe" target="_blank" className="resume-icon">
                            <img src={resumeIcon} className="resume-icon" alt="resume icon" />
                        </a>
                        <br></br>
                        <br></br>
                        <p className="resume-text">DOWNLOAD MY RESUME HERE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
