import React from 'react';
import logo from '../../assets/images/mg-logo.png';

export const Footer = () => {
    return (
        <footer className="footer__section">
            <div className="footer__container row">
                <div className="col-md-5">
                    <div className="col-md-4 footer__column footer__column-1">
                        <img src={logo} alt="logo" className="footer__logo"/>
                        <p>
                            Fectetur adipiscing elit, sed do eius mod tempor Lorem ipsum dolor sit amet, con sectetur adipisicing elitt ut labore
                        </p>
                        <form>
                            <input type="email" className="form-control" placeholder="Submit email" />
                            <span className="far fa-envelope" />
                        </form>
                    </div>
                </div>
                <div className="col-md-2 footer__column">
                    <ul>
                        <h3>About</h3>
                        <li>
                            About Us
                        </li>
                        <li>
                            Service
                        </li>
                        <li>
                            Our Story
                        </li>
                        <li>
                            Success
                        </li>
                        <li>
                            Support
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 footer__column">
                    <ul>
                        <h3>Service</h3>
                        <li>
                            Development
                        </li>
                        <li>
                            Maintenance
                        </li>
                        <li>
                            Consultancy
                        </li>
                        <li>
                            Design
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 footer__column footer__column-4">
                    <ul>
                        <h3>Get in Touch</h3>
                        <li>
                            <div>
                                <span className="fas fa-map-marker-alt" />
                            </div>
                            <div>
                                <p>22/1 Bardeshi, Amin Bazar</p>
                                <p>Dhaka 1348</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="far fa-envelope" />
                            </div>
                            <p>xuwelkhan@gmail.com</p>
                        </li>
                        <li>
                            <div>
                                <span className="fas fa-phone-alt" />
                            </div>
                            <p>+88 01679 252595</p>
                        </li>
                    </ul>
                </div>
                <div className="footer__social-container">
                    <p>Follow Us</p>
                    <li className="footer__social-icon-container">
                        <span className="fab fa-facebook-f footer__social-icon footer__facebook" />
                    </li>
                    <li className="footer__social-icon-container">
                        <span className="fab fa-twitter footer__social-icon footer__twitter" />
                    </li>
                    <li className="footer__social-icon-container">
                        <span className="fab fa-youtube footer__social-icon footer__youtube" />
                    </li>
                    <li className="footer__social-icon-container">
                        <span className="fab fa-instagram footer__social-icon footer__instagram" />
                    </li>
                </div>
            </div>
        </footer>
    )
}
