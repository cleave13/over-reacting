import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <section className="hero-image">
        <div className="hero-content">
          <h1 className="hero-title hero-item">Chris Leavengood</h1>
          <h2 className="hero-subtitle hero-item">I build web applications that bring ideas to life.</h2>
        </div>
      </section>
    </header>
  );
}