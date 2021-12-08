import React from "react";
import {Service} from "../../components/Service";
import {Features} from "../../components/Features";
import {Clients} from "../../components/Clients";
import {motion} from "framer-motion";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";

const ServicePage = () => {

    return (
        <motion.div initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
            <Features/>
            <Service showButton={true}/>
            <Clients/>
        </motion.div>
    )
}

export default ServicePage;

export const getStaticProps = async (ctx) => {
    return {props: {}}
}