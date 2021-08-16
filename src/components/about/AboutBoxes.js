import React from 'react';
import aboutIcon1 from '../../assets/images/about-icon-1.png';
import aboutIcon2 from '../../assets/images/about-icon-2.png';
import aboutIcon3 from '../../assets/images/about-icon-3.png';

export const AboutBoxes = () => {
    return (
        <div className="about__boxs-container row">
            <div className="about__box-container col-md-4">
                <div className="about__box about__box-1">
                    <img src={aboutIcon1} alt="about icon" />
                    <h3>Complete business Control</h3>
                    <p>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud excersi tation</p>
                </div>
            </div>
            <div className="about__box-container col-md-4">
                <div className="about__box about__box-2">
                    <img src={aboutIcon2} alt="about icon" />
                    <h3>Complete Business Control</h3>
                    <p>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud excersi tation</p>
                </div>
            </div>            <div className="about__box-container col-md-4">
                <div className="about__box about__box-3">
                    <img src={aboutIcon3} alt="about icon" />
                    <h3>Complete Business Control</h3>
                    <p>Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud excersi tation</p>
                </div>
            </div>
        </div>
    )
}
