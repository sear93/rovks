import React from "react";
import {Hero} from "../components/Hero";
import {Services} from "../components/Services";
import {Features} from "../components/Features";
import {Service} from "../components/Service";
import {Clients} from "../components/Clients";
import {Works} from "../components/Works";
import axios from "axios";
import {NewsComponent} from "../components/RelatedNews";
import {changeDate} from "../helpers/utils";

export default function Home(props) {

    return (
        <>
            <Hero/>
            <Services/>
            <Features showButton={true}/>
            <Service showButton={true}/>
            <Works workTypes={props.workTypes} worksItems={props.worksItems}/>
            <Clients/>
            <NewsComponent title={"Our Update News"}
                           subtitle={"Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est"}
                           posts={props.posts}/>
        </>
    )
}

export const getStaticProps = async () => {

    const posts = await axios.get(`${process.env.API_URI}/posts?count=3`)
    const works = await axios.get(`${process.env.API_URI}/works`)
    const workTypes = await axios.get(`${process.env.API_URI}/workTypes`)

    return {
        props: {
            posts: posts.data.data.posts.map(i => {
                return {
                    ...i,
                    date: changeDate(i.date)
                }
            }),
            worksItems: works.data.data.works,
            workTypes: workTypes.data.data.types,
        }
    }
}
