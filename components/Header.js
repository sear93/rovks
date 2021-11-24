import Link from "next/link";
import {HeaderWrapper} from "../styled/header";
import React, {useState} from "react";

export const Header = (props) => {

    const [activeClass, setActiveClass] = useState(6);
    const [mobileMenu, setMobileMenu] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [lockBody, setLockBody] = useState(false)

    const openMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        setMenuOpen(!menuOpen)
        setLockBody(!lockBody)
    }

    const setMenuItem = (id) => {
        setActiveClass(id)
        setMenuOpen(!menuOpen)
        setLockBody(false)
        setMobileMenu(!mobileMenu)
    }

    return (
        <HeaderWrapper>
            <style jsx global>
                {`
                  body {
                    overflow: ${lockBody ? "hidden" : "auto"}
                  }`}
            </style>
            <div className="banner-overlay"/>
            <div className="container">
                <Link href="/">
                    <a onClick={() => setActiveClass(6)}
                       className={`brand ${activeClass === 6 ? 'active disabled' : ''}`}>
                        {props.logo}
                    </a>
                </Link>
                <div className={`menu-toggler ${mobileMenu ? 'active' : ''}`} onClick={openMobileMenu}>
                    <span/>
                </div>
                <nav className={`nav-primary ${menuOpen ? 'open' : ''}`}>
                    <ul className="menu">
                        {props?.menuItems?.map(item => {
                            return (
                                <li key={item.id} className="menu-item">
                                    <Link prefetch={false} href={item?.slug}>
                                        <a className={activeClass === item.id ? 'active disabled' : ''}
                                           onClick={() => setMenuItem(item.id)}
                                        >{item.title}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </HeaderWrapper>
    )
}
