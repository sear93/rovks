 import React from "react";
import {Features} from "../../components/Features";
import {Services} from "../../components/Services";
import {Team} from "../../components/Team";

const About = () => {
    return (
        <>
            <Features showButton={true}/>
            <Features reverse={true}/>
            <Services/>
            <Team/>
        </>
    )
}

export default About

export const getStaticProps = async (ctx) => {
    return {props: {}}
}