import React from 'react';
import service1 from '../../assets/images/service-1.png';
import service2 from '../../assets/images/service-2.png';
import service3 from '../../assets/images/service-3.png';
import service4 from '../../assets/images/service-4.png';
import service5 from '../../assets/images/service-5.png';
import service6 from '../../assets/images/service-6.png';
import serviceArrow from '../../assets/images/service-arrow.png';

export const Services = () => {
    return (
        <div className="services__container container-fluid" id="services">
            <span className="services__subtitle">WHAT WE DO</span>
            <h2 className="services__title">Service to solve all kinds of business problem</h2>
            <div className=" row">
                <div className="col-md-4 services__box-container">
                    <div className="services__box">
                        <img src={service1} alt="service" className="services__icon" />
                        <h3>Business Automation</h3>
                        <p>
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation
                        </p>
                        <img src={serviceArrow} alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 services__box-container">
                    <div className="services__box services__box-middle">
                        <img src={service2} alt="service" className="services__icon" />
                        <h3>Ecommerce Support</h3>
                        <p>
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation
                        </p>
                        <img src={serviceArrow} alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 services__box-container">
                    <div className="services__box services__box-end">
                        <img src={service3} alt="service" className="services__icon" />
                        <h3>Video Production</h3>
                        <p>
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation
                        </p>
                        <img src={serviceArrow} alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 services__box-container">
                    <div className="services__box">
                        <img src={service4} alt="service" className="services__icon" />
                        <h3>Realtime Support</h3>
                        <p>
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation
                        </p>
                        <img src={serviceArrow} alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 services__box-container">
                    <div className="services__box services__box-middle">
                        <img src={service5} alt="service" className="services__icon" />
                        <h3>Location Marking</h3>
                        <p>
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation
                        </p>
                        <img src={serviceArrow} alt="arrow" />
                    </div>
                </div>
                <div className="col-md-4 services__box-container">
                    <div className="services__box services__box-end">
                        <img src={service6} alt="service" className="services__icon" />
                        <h3>File Upload Protocol</h3>
                        <p>
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation
                        </p>
                        <img src={serviceArrow} alt="arrow" />
                    </div>
                </div>
            </div>

        </div>
    )
}
