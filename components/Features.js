import {FeaturesWrapper} from "../styled/features";
import React from "react";

export const Features = (props) => {
    return (
        <FeaturesWrapper reverse={props.reverse}>
            <div className={`container ${props.reverse ? 'row-reverse' : 'row'}`}
                 data-aos="fade-down"
                 data-aos-duration="2000">
                <img className="feature-img" src="/images/2-layers.png" alt=""/>
                <div className="feature-content">
                    <h3>
                        Nullam Fermentum Tempus Semper
                    </h3>
                    <p>
                        Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est.
                        laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium dolore mque
                        laudantium totam rem aperiam.

                        Dicta sunt explicabo. nemo enim ipsam voluptatem quia magni voluptassit aspernatur aut odit aut
                        fugit sed quia consequuntur magni dolores eos.
                    </p>
                    {props.showButton ? <button className="button">GET EARLY ACCESS</button> : null}
                </div>
            </div>
        </FeaturesWrapper>
    )
}
