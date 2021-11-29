import React from "react";
import {Service} from "../../components/Service";
import {Features} from "../../components/Features";
import {Clients} from "../../components/Clients";
import {motion} from "framer-motion";

const ServicePage = () => {

    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
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