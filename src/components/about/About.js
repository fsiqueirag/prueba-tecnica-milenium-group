import React from 'react';
import { AboutBoxes } from './AboutBoxes';
import aboutImage1 from '../../assets/images/about-image-1.png';
import aboutImage2 from '../../assets/images/about-image-2.png';
import { Services } from './Services';

export const About = () => {
    return (
        <section className="about__section" id="about">
            <div className="about__container">
                <span className="about__subtitle">BUILD TRUST FIRST</span>
                <h2 className="about__title">Control your business with a single tap</h2>
                <AboutBoxes />
            </div>
            <div className="about__info-container row">
                <div className="about__info-text col-md-6">
                    <h3>Most innovative creative team</h3>
                    <p>
                        <span>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerction</span>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep teur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum.
                    </p>
                    <button>
                        KNOW MORE
                    </button>
                </div>
                <div className="about__images-container col-md-6 row">
                    <img 
                        className="col-6 about__image-1"
                        src={aboutImage1} 
                        alt="about 1" 
                    />
                    <img 
                        className="col-6 about__image-2"
                        src={aboutImage2} 
                        alt="about 2" 
                    />
                </div>
            </div>
            <Services />
        </section>
    )
}
