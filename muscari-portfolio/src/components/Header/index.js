import React from "react";
import Nav from '../Nav';

function Header() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">CORTNIE MUSCARI</a>
            </h2>
            <h3>WEB DEVELOPER</h3>
            <Nav></Nav>
        </header>
    );
}

export default Header;