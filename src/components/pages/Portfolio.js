import React from 'react';

export default function Portfolio() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (

    <article class="white-background">
      <div class="content" id="portfolio">
        <h2 class="article-header">Portfolio</h2>
        <div class="portfolio-cards">
          <div class="card full-width-card">
            <header>Stockdemic Analysis Tool</header>
            <a href="https://cleave13.github.io/stockdemic-project-1/" target="_blank" rel="noreferrer">
              <picture>
                <source srcset="./assets/images/stockdemic-mobile-compressed.png" media="(min-width:500px)"></source>
                <img src="./assets/images/stockdemic-mobile-compressed.png" alt="Stockdemic application" />
              </picture>
            </a>
            <button class="src-button" onclick={() => openInNewTab('https://github.com/cleave13/stockdemic-project-1')}>View Source Code</button>
          </div>

          <div class="card half-width-card">
            <header>JavaScript Code Quiz</header>
            <a href="https://cleave13.github.io/code-quiz/" target="_blank" rel="noreferrer">
              <picture>
                <source srcset="./assets/images/code-quiz-full-compressed.png" media="(min-width:500px)"></source>
                <img src="./assets/images/code-quiz-mobile-compressed.png"
                  alt="Child swimming" />
              </picture>
            </a>
            <button class="src-button" onclick=" window.open('https://github.com/cleave13/code-quiz','_blank')">View Source Code</button>
          </div>

          <div class="card half-width-card">
            <header>Weather Application</header>
            <a href="https://cleave13.github.io/weather-app/" target="_blank" rel="noreferrer">
              <picture>
                <source srcset="./assets/images/weather-full-compressed.png" media="(min-width:500px)"></source>
                <img src="./assets/images/weather-mobile-compressed.png"
                  alt="Resume writing" />
              </picture>
            </a>
            <button class="src-button" onclick=" window.open('https://github.com/cleave13/weather-app','_blank')">View Source Code</button>
          </div>

          <div class="card half-width-card">
            <header>Children's Books Ecommerce Site</header>
            <a href="#">
              <picture>
                <source srcset="./assets/images/books-full-compressed.jpg" media="(min-width:500px)"></source>
                <img src="./assets/images/books-mobile-compressed.jpg"
                  alt="Books with children's blocks" />
              </picture>
            </a>
            <button class="src-button">View Source Code</button>
          </div>

          <div class="card half-width-card">
            <header>Ellie's Awesome Lemonade Stand</header>
            <a href="#">
              <picture>
                <source srcset="./assets/images/lemons-full-compressed.jpg" media="(min-width:500px)"></source>
                <img src="./assets/images/lemons-mobile-compressed.jpg"
                  alt="Sliced and whole lemons" />
              </picture>
            </a>
            <button class="src-button">View Source Code</button>
          </div>
        </div>
      </div>
    </article>
  );
}