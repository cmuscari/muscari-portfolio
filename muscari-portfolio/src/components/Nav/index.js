import React from "react";

function Nav() {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a>ABOUT</a>
                </li>
                <li className="mx-2">
                    <a>PORTFOLIO</a>
                </li>
                <li className="mx-2">
                    <a>RESUME</a>
                </li>
                <li className="mx-2">
                    <a>CONTACT</a>
                </li>
            </ul>
        </nav>
    )
};


export default Nav;
