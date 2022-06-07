import React from 'react';

export default function Resume() {
    return (
        <article className="green-background">
            <h2 id="resume-download">Click <a href='./assets/images/leavengood-resume.png' download>here</a> to download</h2>
            <picture id="resume">
                <source srcset="./assets/images/leavengood-resume.png" media="(min-width:500px)"></source>
                  <img src="./assets/images/leavengood-resume.png"
                    alt="Resume" />
            </picture>
        </article>
    );
}