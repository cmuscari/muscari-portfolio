import React from "react";

function Header() {
    // const {
    //     categories = [],
    //     setCurrentCategory,
    //     currentCategory,
    //     contactSelected,
    //     setContactSelected
    // } = props;


    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    // };

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



// <Nav
//     categories={categories}
//     setCurrentCategory={setCurrentCategory}
//     currentCategory={currentCategory}
//     contactSelected={contactSelected}
//     setContactSelected={setContactSelected}
// ></Nav>