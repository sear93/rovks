import React, {useContext} from "react";
import Head from "next/head";
import {Footer} from "./Footer";
import {Header} from "./Header";
import GlobalContext from "../store/global-context";
import Notification from "./Notification";

export const MainLayout = (props) => {

    const ctx = useContext(GlobalContext);

    console.log(ctx)

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
            {ctx?.notification && <Notification status={ctx.notification?.status}
                                                message={ctx.notification?.message}
                                                hideNotification={ctx.hideNotification}/>}
        </>
    )
}
