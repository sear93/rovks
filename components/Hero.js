import React, {useContext} from "react";
import {HeroWrapper} from "../styled/hero";
import Image from "next/image";
import Modal from "./Modal";
import GlobalContext from "../store/global-context";

export const Hero = () => {

    const ctx = useContext(GlobalContext)

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
                        <a onClick={() => ctx.showModal(true)} className="button">GET EARLY ACCESS</a>
                        <a onClick={() => ctx.showModal(true)} className="play_btn">
                            <p>Live Video</p>
                            <Image src={"/images/play_btn.svg"}
                                   placeholder={"blur"}
                                   width={50}
                                   height={50}
                                   alt="play_btn"/>
                        </a>
                    </div>
                </div>
                <Modal>
                    <p>Modal</p>
                    <p>Hero 1</p>
                </Modal>

                <Modal>
                    <p>Modal</p>
                    <p>Hero 2</p>
                </Modal>
            </div>
        </HeroWrapper>
    )
}
