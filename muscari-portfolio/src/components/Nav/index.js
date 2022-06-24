import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="nav-container d-flex flex-row align-items-center justify-content-center mb-0">
      <li className="nav-list-item m-2">
        <a
          href="/"
          onClick={() => handlePageChange('About')}
        // className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          about
        </a>
      </li>
      <li className="nav-list-item m-2">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        // className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          portfolio
        </a>
      </li>
      <li className="nav-list-item m-2">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        // className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          resume
        </a>
      </li>
      <li className="nav-list-item m-2">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          contact
        </a>
      </li>
    </div>
  );
}

export default Nav;
