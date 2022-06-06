import React from 'react';

export default function About() {
    return (
        <article className="green-background">
            <div className="content" id="about">
                <h2 className="article-header">About</h2>
                <div className="about-content">
                    <picture>
                        <source srcSet="./assets/images/profile-full.png" media="(min-width:601px)"></source>
                            <img id="profile-image" src="./assets/images/profile-mobile.png" alt="Profile"
                                align="right" />
                    </picture>
                    <p>
                        My name is Chris Leavengood and I love building applications to help businesses succeed.
                    </p>
                    <p>
                        I started my career at some of the most reknowned hospitality organizations in the world where I learned to deliver exceptional experiences. Today, I pair my high-touch background with my strong technical skills to deliver incredible results for all of my clients.
                    </p>
                    <p>
                        Over the past six years, I have had the opportunity to work with leading in real-estate, hospitality, technology, healthcare, and event services.
                    </p>
                    <p>
                        I take a human approach to technology implementations and would love to work with you on your next project!
                    </p>
                </div>
            </div>
        </article>
    );
}