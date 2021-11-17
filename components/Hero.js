import React, {useState} from "react";
import {HeroWrapper} from "../styled/hero";

export const Hero = () => {

    const [modal, setModal] = useState(false);

    const showModal = (e) => {
        e.preventDefault()
        setModal(!modal)
    };

    return (
        <HeroWrapper>
            <div className="container"
                 data-aos="fade-right"
                 data-aos-duration="2000">
                <div className="content">
                    <h1 className="title">
                        We Are Creative Digital Agency
                    </h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus, est id placerat
                        feugiat, risus arcu porta tortor, nec convallis purus magna vitae justo. Suspendisse et
                        venenatis ligula.
                    </p>
                    <div className="btns">
                        <a href="/" className="button">GET EARLY ACCESS</a>
                        <a onClick={showModal} className="play_btn">
                            Live Video <img src={"/images/play_btn.svg"} alt="play_btn"/>
                        </a>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    )
}
