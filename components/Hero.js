import React, {useContext} from "react";
import {HeroWrapper} from "../styled/hero";
import Image from "next/image";
import GlobalContext from "../store/global-context";
import {modalNames} from "./ModalManager";

export const Hero = (props) => {

    const ctx = useContext(GlobalContext)

    return (
        <HeroWrapper>
            <div className="container">
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
                        <button data-modal={modalNames.earlyAccess} className="button">GET EARLY ACCESS</button>
                        <button onClick={props.openModal} data-modal={modalNames.video} className="play_btn">
                            <p>Live Video</p>
                            <Image src={"/images/play_btn.svg"}
                                   placeholder={"blur"}
                                   width={50}
                                   height={50}
                                   alt="play_btn"/>
                        </button>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    )
}
