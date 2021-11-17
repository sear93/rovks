import React from "react";
import {Service} from "../../components/Service";
import {Features} from "../../components/Features";
import {Clients} from "../../components/Clients";

const ServicePage = () => {

    return (
        <>
            <Features/>
            <Service showButton={true}/>
            <Clients/>
        </>
    )
}

export default ServicePage;

export const getStaticProps = async (ctx) => {
    return {props: {}}
}