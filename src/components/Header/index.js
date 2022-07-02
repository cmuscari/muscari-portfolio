import React from "react";

function Header() {
    return (
        <header className="d-flex flex-column justify-content-center align-items-center header-container">
            <h2 className="d-flex flex-column mt-3 mb-0 align-items-center justify-content-center">
                <a href="/" className="header-title">CORTNIE MUSCARI</a>
            </h2>
            <h3 className="header-subtitle">WEB DEVELOPER</h3>
        </header>
    );
}

export default Header;
