// import React from 'react';
import React, { useState } from "react";
import Header from "./Header";
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function Content() {
    const [currentPage, setCurrentPage] = useState("ABOUT");

    const renderPage = () => {
      if (currentPage === "PORTFOLIO") {
        return <Portfolio />;
      } 
      if (currentPage === "CONTACT") {
        return <Contact />;
      }
      if (currentPage === "RESUME") {
        return <Resume />;
      }
      return <About />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* Pass the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <Header />
        {/* Call the render page function to return a component */}
        {renderPage()}
      </div>
    );
}