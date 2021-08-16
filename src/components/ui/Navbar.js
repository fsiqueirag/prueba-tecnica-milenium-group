import React from 'react';
import logo from '../../assets/images/mg-logo.png';



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <img src={logo} className="navbar-brand" alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Service</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#blog" className="nav-link">News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>        
                        <li className="nav-item">
                            <button className="navbar__button">
                                Get A Quote
                            </button>
                        </li>            
                        <div className="hero__social-icons-container">
                            <li className="nav-item  hero__social-icon-container">
                                <span className="fab fa-facebook-f hero__social-icon hero__facebook" />
                            </li>
                            <li className="nav-item  hero__social-icon-container">
                                <span className="fab fa-twitter hero__social-icon hero__twitter" />
                            </li>
                            <li className="nav-item  hero__social-icon-container">
                                <span className="fab fa-youtube hero__social-icon hero__youtube" />
                            </li>
                            <li className="nav-item  hero__social-icon-container">
                                <span className="fab fa-instagram hero__social-icon hero__instagram" />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
