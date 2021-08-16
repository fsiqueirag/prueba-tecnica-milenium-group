import React from 'react';
import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';

export const Portfolio = () => {
    return (
        <section className="portfolio__section" id="portfolio">
            <span className="portfolio__subtitle">OUR PROJECTS</span>
            <h2 className="portfolio__title">Check the real innovation of problem solving</h2>
            <div className="portfolio__container container-fluid">
                <div className="portfolio__item-container portfolio__item-container-1 row">
                    <div className="portfolio-picture-container col-md-4">
                        <div className="portfolio-picture-border portfolio-picture-border-1" />
                        <img src={project1} alt="cactus"/>
                    </div>
                    <div className="portfolio__item-text col-md-8">
                        <span>Development</span>
                        <h3>Jodi kokhono vul hoye jay tumi oporadh nio na</h3>
                        <p>Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>View Project</button>
                    </div>
                </div>
                <div className="portfolio__item-container portfolio__item-container-2 row">
                    <div className="portfolio__item-text-middle col-md-8">
                        <span>Research & Analytics</span>
                        <h3>Ei biristi veja rate tuminei bole somoy amar katena</h3>
                        <p>Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>View Project</button>
                    </div>
                    <div className="portfolio-picture-container portfolio-picture-container-middle col-md-4">
                        <div className="portfolio-picture-border portfolio-picture-border-2" />
                        <img src={project2} alt="orange"/>
                    </div>
                </div>
                <div className="portfolio__item-container portfolio__item-container-3 row">
                    <div className="portfolio-picture-container col-md-4">
                        <div className="portfolio-picture-border portfolio-picture-border-3" />
                        <img src={project3} alt="phone"/>
                    </div>
                    <div className="portfolio__item-text col-md-8">
                        <span>UI/UX Engineering</span>
                        <h3>Ami jare chaire se thake mori ontore</h3>
                        <p>Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>View Project</button>
                    </div>
                </div>
                <button className="portfolio__link">
                    Go to Portfolio
                </button>
            </div>
        </section>
    )
}
