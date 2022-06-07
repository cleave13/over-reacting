import React from 'react';
import Project from '../Project';

export default function Portfolio() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (

    <article class="white-background">
      <div class="content" id="portfolio">
        <h2 class="article-header">Portfolio</h2>
        <div class="portfolio-cards">

          <Project
          classes={'card full-width-card'} 
          liveUrl={'https://cleave13.github.io/stockdemic-project-1/'} 
          imgPath={'./assets/images/stockdemic-mobile-compressed.png'}
          alt={'Stockdemic application'} 
          srcUrl={'https://github.com/cleave13/stockdemic-project-1/'}
          />

          <Project 
          classes={'card half-width-card'} 
          liveUrl={'https://cleave13.github.io/code-quiz/'} 
          imgPath={'./assets/images/code-quiz-mobile-compressed.png'}
          alt={'Code quiz'} 
          srcUrl={'https://github.com/cleave13/code-quiz'}
          />

          <Project 
          classes={'card half-width-card'} 
          liveUrl={'https://cleave13.github.io/code-quiz/'} 
          imgPath={'./assets/images/code-quiz-mobile-compressed.png'}
          alt={'Code quiz'} 
          srcUrl={'https://github.com/cleave13/code-quiz'}
          />

          <Project 
          classes={'card half-width-card'} 
          liveUrl={'https://cleave13.github.io/weather-app/'} 
          imgPath={'./assets/images/weather-mobile-compressed.png'}
          alt={'Weather app'} 
          srcUrl={'https://github.com/cleave13/weather-app'}
          />

          <Project 
          classes={'card half-width-card'} 
          liveUrl={'#'} 
          imgPath={'./assets/images/books-mobile-compressed.jpg'}
          alt={'Books and blocks'} 
          srcUrl={'https://github.com/cleave13/stockdemic-project-1/'}
          />

          <Project 
          classes={'card half-width-card'} 
          liveUrl={'#'} 
          imgPath={'./assets/images/lemons-full-compressed.jpg'}
          alt={'Sliced and whole lemons'} 
          srcUrl={'https://github.com/cleave13/stockdemic-project-1/'}
          />

        </div>
      </div>
    </article>
  );
}