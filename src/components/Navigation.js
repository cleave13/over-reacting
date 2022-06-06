import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar green-background">
      <a href="#" class="nav-branding">Chris Leavengood</a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a
            href="#about1"
            onClick={() => handlePageChange('ABOUT')}
            // Check to see if the currentPage is `ABOUT`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'ABOUT' ? 'nav-link-active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio1"
            onClick={() => handlePageChange('PORTFOLIO')}
            // Check to see if the currentPage is `PORTFOLIO`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'PORTFOLIO' ? 'nav-link-active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact1"
            onClick={() => handlePageChange('CONTACT')}
            // Check to see if the currentPage is `CONTACT`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'CONTACT' ? 'nav-link-active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume1"
            onClick={() => handlePageChange('RESUME')}
            // Check to see if the currentPage is `RESUME`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'RESUME' ? 'nav-link-active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  );
}