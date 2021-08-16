import React from 'react';
import member1 from '../../assets/images/member-1.png';
import member2 from '../../assets/images/member-2.png';
import member3 from '../../assets/images/member-3.png';
import member4 from '../../assets/images/member-4.png';
import testimonial from '../../assets/images/testimonial.png';
import testimonialBorder from '../../assets/images/testimonial-border.png';
import quotes from '../../assets/images/quotes.png';
import nav from '../../assets/images/nav.png';

export const Team = () => {
    return (
        <section className="team__section container-fluid">
            <span className="team__subtitle">MEET OUR TEAM</span>
            <h2 className="team__title">Awesome people with great business skills</h2>
            <div className="team__container row">
                <div className="team__member-container col-sm-6 col-md-3">
                    <img src={member1} alt="team member"/>
                    <h4>Bruce Wayne</h4>
                    <p>Founder & CEO</p>
                </div>
                                <div className="team__member-container col-sm-6 col-md-3">
                    <img src={member2} alt="team member"/>
                    <h4>Clark Kent</h4>
                    <p>Manager</p>
                </div>
                <div className="team__member-container col-sm-6 col-md-3">
                    <img src={member3} alt="team member"/>
                    <h4>Jessica Parker</h4>
                    <p>Developer</p>
                </div>
                <div className="team__member-container col-sm-6 col-md-3">
                    <img src={member4} alt="team member"/>
                    <h4>Justin Pakerman</h4>
                    <p>Designer</p>
                </div>
            </div>
            <div className="team__testimonials-container row">
                <div className="team__testimonial-content col-md-6">
                    <img src={quotes} alt="quotes icon" className="team__quotes" />
                    <span className="team__subtitle">TESTIMONIAL</span>
                    <div className="team__testimonial-text active" data-bs-interval="900">
                        <h3>They are awesome!</h3>
                        <p className="team__testimonial-content">Kollit a do eiusmod tempor incididunt ut labore et do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="team__testimonial-author">
                            <i className="team__dash"></i>
                            Kabir Manja 
                            <span>Music Producer</span>
                        </p>
                        <img src={nav} alt="nav icon" className="team__nav"/>
                    </div>
                </div>
                <div className="team__testimonial-image-container col-md-6">
                    <img src={testimonial} alt="testimonial" className="team__testimonial-image"/>
                    <img src={testimonialBorder} alt="testimonial border" className="team__testimonial-image-border"/>
                </div>
            </div>
        </section>
    )
}
