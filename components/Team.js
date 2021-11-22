import {TeamWrapper} from "../styled/team";
import React from "react";
import Image from 'next/image'

export const Team = (props) => {
    return (
        <TeamWrapper>
            <div className="container"
                 data-aos="fade-down"
                 data-aos-duration="2000">
                <h2 className="team-title">Our Team</h2>
                <div className="team-items">

                    <div className="team-item">
                        {/*<img  src="/images/img_avatar.png" alt="team_image"/>*/}
                        <Image src={"/images/img_avatar.png"}
                               className="team-item-img"
                               placeholder={"blur"}
                               layout='fill'
                        />

                        <div className="team-item-content">
                            <h3 className="team-item-name">Jake Spiral</h3>
                            <p className="team-item-position">CEO</p>
                        </div>
                    </div>
                    <div className="team-item">
                        {/*<img className="team-item-img" src="/images/img_avatar.png" alt="team_image"/>*/}
                        <Image src={"/images/img_avatar.png"}
                               className="team-item-img"
                               placeholder={"blur"}
                               layout='fill'
                        />
                        <div className="team-item-content">
                            <h3 className="team-item-name">Jake Spiral</h3>
                            <p className="team-item-position">CEO</p>
                        </div>
                    </div>
                    <div className="team-item">
                        {/*<img className="team-item-img" src="/images/img_avatar.png" alt="team_image"/>*/}
                        <Image src={"/images/img_avatar.png"}
                               className="team-item-img"
                               placeholder="blur"
                               alt="team_image"
                               layout='fill'
                        />
                        <div className="team-item-content">
                            <h3 className="team-item-name">Jake Spiral</h3>
                            <p className="team-item-position">CEO</p>
                        </div>
                    </div>

                </div>
            </div>
        </TeamWrapper>
    )
}
