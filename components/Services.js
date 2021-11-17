import {ServicesWrapper} from "../styled/services";
import React from "react";

export const Services = () => {
    return (
        <ServicesWrapper>
            <div className="container">
                <div className="items">

                    <div className="item"
                         data-aos="fade-down"
                         data-aos-duration="2000">
                        <img className="img" src="/images/agenda.png" alt="services_image"/>

                        <div className="content">
                            <h3 className="title">Branding</h3>
                            <p className="text">Etiam maximus, justo ut pellentesque egestas, erat sapien
                                mollis massa, nec porta nisl quam eu arcu. Donec sit amet</p>
                        </div>

                    </div>

                    <div className="item"
                         data-aos="fade-down"
                         data-aos-duration="2000">
                        <img className="img" src="/images/lamp.png" alt="services_image"/>

                        <div className="content">
                            <h3 className="title">Idea & Concept</h3>
                            <p className="text">Etiam maximus, justo ut pellentesque egestas, erat sapien
                                mollis massa, nec porta nisl quam eu arcu. Donec sit amet</p>
                        </div>

                    </div>

                    <div className="item"
                         data-aos="fade-down"
                         data-aos-duration="2000">
                        <img className="img" src="/images/clock.png" alt="services_image"/>

                        <div className="content">
                            <h3 className="title">Development</h3>
                            <p className="text">Etiam maximus, justo ut pellentesque egestas, erat sapien
                                mollis massa, nec porta nisl quam eu arcu. Donec sit amet</p>
                        </div>

                    </div>

                </div>
            </div>
        </ServicesWrapper>
    )
}
