import {FooterWrapper} from "../styled/footer";
import {SocialIcon} from "./Icons";

export const Footer = (props) => {

    let currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <div className="container">
                <div className="bottom-section">
                    <div className="social">
                        {props.options.social_links.map((item, index) => {
                            return (
                                <a href={item.link}
                                   target="_blank"
                                   key={index}
                                   className="social__link">
                                    <SocialIcon type={item.type}/>
                                </a>
                            )
                        })}
                    </div>
                    <div className="copyright">
                        <p>Copyright © {currentYear}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}
