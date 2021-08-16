import React from 'react';
import { Navbar } from '../ui/Navbar';
import illustration from '../../assets/images/hero-illustration.png';
export const Hero = () => {
    return (
        <section className="hero__section" id="home">
            <Navbar />
            <div className="hero__container row">
                <div className="hero__text col-lg-6">
                    <h1>Work Smartly with Endless Possibility</h1>
                    <p>
                        Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud excertion
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>
                <img 
                    src={illustration} 
                    alt="illustration" 
                    className="col-lg-6" 
                />
            </div>
        </section>
    )
}
