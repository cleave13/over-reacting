import React from 'react';

export default function Footer() {
  return (
    <footer className="white-background">
        <div className="content" id="contact">
            <h2 className="article-header">Contact</h2>
            <div className="footer-content">
                <p>720.234.3597</p>
                <a href="mailto: chrisleavengood@gmail.com">chrisleavengood@gmail.com</a>
                <a href="https://www.github.com/cleave13" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/chris-leavengood/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="../../public/assets/leavengood-resume.pdf" download>Resume</a>
            </div>
        </div>
    </footer>
  );
}