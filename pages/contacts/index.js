import React from "react";
import {ContactsWrapper} from "../../styled/contacts";
import Form from "../../components/Form";
import Map from "../../components/Map";
import {motion} from "framer-motion";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";

const Contacts = () => {

    return (
            <motion.div initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}>
            <ContactsWrapper>
                <div className="container">
                    <Map/>
                    <div className="contacts-heading"
                         data-aos="fade-up"
                         data-aos-duration="2000">
                        <p className="subtitle">
                            We have clients all over the world
                        </p>
                        <h1 className="title">
                            Request a Quote Today!
                        </h1>
                    </div>

                    <div className="form-container"
                         data-aos="fade-up"
                         data-aos-duration="2000">
                        <h2 className="title">
                            Get In Touch
                        </h2>
                        <Form/>
                    </div>
                </div>
            </ContactsWrapper>
        </motion.div>
    )
}

export default Contacts;

export const getStaticProps = async (ctx) => {
    return {props: {}}
}
