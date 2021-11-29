import React, {useContext} from "react";
import Head from "next/head";
import {Footer} from "./Footer";
import {Header} from "./Header";
import GlobalContext from "../store/global-context";
import Notification from "./Notification";
import {AnimatePresence, motion} from "framer-motion";

export const Layout = (props) => {

    const ctx = useContext(GlobalContext);

    return (
        <>
            <Head>
                <title>{"Rovks"}</title>
                <link rel="icon" href={"/images/favicon.ico"}/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Header logo={props.logo} menuItems={props.menuItems}/>
            <main className="site-content">
                {props.children}
            </main>
            <Footer options={props.options}/>
            <AnimatePresence exitBeforeEnter>
                {ctx.notification && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            position: "fixed",
                            width: '100%',
                            bottom: '-90px'
                        }}
                        animate={{
                            opacity: 1,
                            position: "fixed",
                            bottom: 0
                        }}
                        exit={{
                            opacity: 0,
                            position: "fixed",
                            bottom: '-90px'
                        }}
                        transition={{
                            type: 'spring',
                            duration: 0.8
                        }}>
                        <Notification status={ctx.notification?.status}
                                      message={ctx.notification?.message}
                                      hideNotification={ctx.hideNotification}/>
                    </motion.div>)}
            </AnimatePresence>
        </>
    )
}
