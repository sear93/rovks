import {ServiceWrapper} from "../styled/service";
import React from "react";
import Image from "next/image";
import {modalNames} from "./ModalManager";

export const Service = (props) => {
    return (<ServiceWrapper>
        <div className="container">
            <div className="service-content">
                <h3>
                    Nullam Fermentum Tempus Semper
                </h3>
                <p>
                    Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est.
                    laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium dolore mque
                    laudantium totam rem aperiam.
                </p>
                {
                    props.showButton
                        ? <button data-modal={modalNames.earlyAccess} className="button">GET EARLY ACCESS</button>
                        : null
                }
            </div>

            <div className="service-items">
                <div className="service-item">
                    <div className="service-item-img">
                        <Image src="/images/clock.png"
                               alt="service_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />
                    </div>
                    <div className="service-item-content">
                        <h3 className="service-item-title">
                            Development
                        </h3>
                        <p className="service-item-text">
                            Etiam maximus, justo ut pellentesque egestas, erat sapien mollis massa, nec porta nisl
                            quam eu arcu
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-item-img">
                        <Image src="/images/lamp.png"
                               alt="service_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />
                    </div>
                    <div className="service-item-content">
                        <h3 className="service-item-title">
                            Development
                        </h3>
                        <p className="service-item-text">
                            Etiam maximus, justo ut pellentesque egestas, erat sapien mollis massa, nec porta nisl
                            quam eu arcu
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-item-img">
                        <Image src="/images/lamp.png"
                               alt="service_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />
                    </div>
                    <div className="service-item-content">
                        <h3 className="service-item-title">
                            Development
                        </h3>
                        <p className="service-item-text">
                            Etiam maximus, justo ut pellentesque egestas, erat sapien mollis massa, nec porta nisl
                            quam eu arcu
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-item-img">
                        <Image src="/images/clock.png"
                               alt="service_image"
                               placeholder={"blur"}
                               width={42}
                               height={42}
                        />
                    </div>
                    <div className="service-item-content">
                        <h3 className="service-item-title">
                            Development
                        </h3>
                        <p className="service-item-text">
                            Etiam maximus, justo ut pellentesque egestas, erat sapien mollis massa, nec porta nisl
                            quam eu arcu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </ServiceWrapper>)
}
