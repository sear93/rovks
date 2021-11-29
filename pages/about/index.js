import React from "react";
import {Features} from "../../components/Features";
import {Services} from "../../components/Services";
import {Team} from "../../components/Team";
import {motion} from 'framer-motion'

const About = () => {
    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <Features showButton={true}/>
            <Features reverse={true}/>
            <Services/>
            <Team/>
        </motion.div>
    )
}

export default About

export const getStaticProps = async (ctx) => {
    return {props: {}}
}