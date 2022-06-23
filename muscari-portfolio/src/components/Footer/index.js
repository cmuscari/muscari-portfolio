import React from "react";
import githubImage from "../../assets/images/icons/github_color.png";
import linkedinImage from "../../assets/images/icons/linkedin_color.png";
import leetcodeImage from "../../assets/images/icons/leetcode_color.png";

function Footer() {
    return (
        <footer className="footer d-flex flex-row justify-content-center align-items-center">
            <a href="https://github.com/cmuscari" target="_blank">
                <img src={githubImage} alt="Github Icon" className="icon m-2" />
            </a>
            <a href="https://www.linkedin.com/in/cortnie-muscari/" target="_blank">
                <img src={linkedinImage} alt="LinkedIn Icon" className="icon m-2" />
            </a>
            <a href="https://leetcode.com/cmuscari/" target="_blank">
                <img src={leetcodeImage} alt="LeetCode Icon" className="icon m-2" />
            </a>
        </footer>
    );
}

export default Footer;
