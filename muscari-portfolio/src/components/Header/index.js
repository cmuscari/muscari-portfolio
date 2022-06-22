import React from "react";

function Header() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">CORTNIE MUSCARI</a>
            </h2>
            <h3>WEB DEVELOPER</h3>
        </header>
    );
}

export default Header;