import React from "react";
import {Features} from "../../components/Features";
import {Services} from "../../components/Services";
import {Team} from "../../components/Team";
import {motion} from 'framer-motion'
import {pageTransition, pageVariants} from "../../styled/pageTransitions";

const About = () => {
    return (
        <motion.div initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
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