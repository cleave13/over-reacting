import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      {/* Pass the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <section className="hero-image">
        <div className="hero-content">
          <h1 className="hero-title hero-item">Chris Leavengood</h1>
          <h2 className="hero-subtitle hero-item">I build web applications that bring ideas to life.</h2>
          <button
            type="button"
            className={currentPage === 'PORTFOLIO' ? 'nav-link-active hero-button hero-item' : 'nav-link hero-button hero-item'}
            name="View Portfolio"
            onClick={() => handlePageChange('PORTFOLIO')}>
            View portfolio
          </button>
        </div>
      </section>
    </header>
  );
}