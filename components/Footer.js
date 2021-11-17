import {FooterWrapper} from "../styled/footer";
import Link from "next/link";
import {SocialIcon} from "./Icons";

export const Footer = (props) => {

    let currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <div className="container">
                <nav className="nav-footer">
                    <div className="footer-section">
                        <h3>Main Navigation</h3>
                        <div className={"menu-items"}>
                            <Link href={'/'}><a className={"menu-item"}>Homepage</a></Link>
                            <Link href={'/blog'}><a className={"menu-item"}>Our Portfolio</a></Link>
                            <Link href={'/about'}><a className={"menu-item"}>About Us</a></Link>
                            <Link href={'/contacts'}><a className={"menu-item"}>Get In Touch</a></Link>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Brand</h3>
                        <div className={"menu-items"}>
                            <a className={"menu-item"} href="/">Brand Experience</a>
                            <a className={"menu-item"} href="/">Platform & Positioning</a>
                            <a className={"menu-item"} href="/">Trends & Insights</a>
                            <a className={"menu-item"} href="/">Marketing Strategy</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Experience</h3>
                        <div className={"menu-items"}>
                            <a className={"menu-item"} href="/">Web Design</a>
                            <a className={"menu-item"} href="/">Mobile App Design</a>
                            <a className={"menu-item"} href="/">UX / UI design</a>
                            <a className={"menu-item"} href="/">Dashboard & Tool</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Strategy</h3>
                        <div className={"menu-items"}>
                            <a className={"menu-item"} href="/">Logo & Identity</a>
                            <a className={"menu-item"} href="/">Content Management</a>
                            <a className={"menu-item"} href="/">System & guides</a>
                            <a className={"menu-item"} href="/">Communications</a>
                        </div>
                    </div>
                </nav>
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
