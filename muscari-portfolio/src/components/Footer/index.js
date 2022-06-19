import React from "react";
import githubImage from "../../assets/images/icons/github_black.png";
import linkedinImage from "../../assets/images/icons/linkedin_black.png";
import leetcodeImage from "../../assets/images/icons/leetcode_black.png";

function Footer() {
    return (
        <footer className="flex-row px-1">
            <a href="https://github.com/cmuscari">
                <img src={githubImage} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/cortnie-muscari/">
                <img src={linkedinImage} alt="LinkedIn Icon" />
            </a>
            <a href="https://leetcode.com/cmuscari/">
                <img src={leetcodeImage} alt="LeetCode Icon" />
            </a>
        </footer>
    );
}

export default Footer;
