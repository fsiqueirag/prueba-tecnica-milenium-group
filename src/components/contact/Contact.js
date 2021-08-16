import React from 'react';
import contactIcon1 from '../../assets/images/contact-icon-1.png';
import contactIcon2 from '../../assets/images/contact-icon-2.png';
import contactIcon3 from '../../assets/images/contact-icon-3.png';

export const Contact = () => {
    return (
        <section className="contact__section container-fluid" id="contact">
            <span className="contact__subtitle">CONTACT US</span>
            <h2 className="contact__title">Stay connected with us for any reason</h2>
            <div className="contact__container row">
                <div className="contact__form col-md-6">
                    <h3 className="mb-5">Write us a message</h3>
                    <form className="contact__form">
                        <input className="form-control mb-4" type="text" placeholder="Your name" />
                        <input className="form-control mb-4" type="email" placeholder="Your email" />
                        <input className="form-control mb-4" type="text" placeholder="Subject" />
                        <textarea className="form-control mb-4" placeholder="Start writing message here" />
                        <button>
                            Get Started
                        </button>
                    </form>
                </div>
                <div className="contact__info col-md-6">
                    <p className="mb-4 contact__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="contact__items row">
                        <li className="contact__item col-12 col-sm-4 col-md-12 row">
                            <img src={contactIcon1} alt="phone" className="col-md-6"/>
                            <div className="contact__item-text col-md-6">
                                <p>Phone</p>
                                <span>0123-4567-8910</span>
                            </div>
                        </li>
                        <li className="contact__item col-12 col-sm-4 col-md-12 row">
                            <img src={contactIcon2} alt="email" className="col-md-6"/>
                            <div className="contact__item-text col-md-6">
                                <p>Email</p>
                                <span>hello@rainydesign.com</span>
                            </div>
                        </li>
                        <li className="contact__item col-12 col-sm-4 col-md-12 row">
                            <img src={contactIcon3} alt="gps" className="col-md-6"/>
                            <div className="contact__item-text col-md-6">
                                <p>Address</p>
                                <span>20, Bordeshi, Amin Bazar</span>
                                <span>Savar, Dhaka</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
