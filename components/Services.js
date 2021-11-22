import {ServicesWrapper} from "../styled/services";
import React from "react";
import Image from "next/image";

export const Services = () => {
    return (
        <ServicesWrapper>
            <div className="container">
                <div className="items">

                    <div className="item"
                         data-aos="fade-down"
                         data-aos-duration="2000">
                        <Image src={"/images/agenda.png"}
                               className="img"
                               alt="services_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />

                        <div className="content">
                            <h3 className="title">Branding</h3>
                            <p className="text">Etiam maximus, justo ut pellentesque egestas, erat sapien
                                mollis massa, nec porta nisl quam eu arcu. Donec sit amet</p>
                        </div>

                    </div>

                    <div className="item"
                         data-aos="fade-down"
                         data-aos-duration="2000">
                        <Image src={"/images/lamp.png"}
                               className="img"
                               alt="services_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />

                        <div className="content">
                            <h3 className="title">Idea & Concept</h3>
                            <p className="text">Etiam maximus, justo ut pellentesque egestas, erat sapien
                                mollis massa, nec porta nisl quam eu arcu. Donec sit amet</p>
                        </div>

                    </div>

                    <div className="item"
                         data-aos="fade-down"
                         data-aos-duration="2000">
                        <Image src={"/images/clock.png"}
                               className="img"
                               alt="services_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />

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
