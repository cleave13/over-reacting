import React from 'react';

export default function Project(props) {
    return (
        <div className="portfolio-cards">
            <div className="card full-width-card">
                <header>Stockdemic Analysis Tool</header>
                <a href={props.liveUrl} target="_blank" rel="noreferrer">
                    <picture>
                        <source srcset={props.imgPath} media="(min-width:500px)"></source>
                        <img src={props.imgPath} alt={props.alt} />
                    </picture>
                </a>
                <a className="src-link" href={props.srcUrl} target="_blank" rel="noreferrer">View Source Code</a>
            </div>
        </div>
    );
}