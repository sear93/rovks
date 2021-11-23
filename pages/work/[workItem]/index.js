import React from "react";
import axios from "axios";
import {WorkWrapper} from "../../../styled/work";
import {changeDate} from "../../../helpers/utils";

const WorkItem = ({work}) => {

    return (
        <WorkWrapper>
            <article>
                <div className={"container"}>
                    <img className={"attachment-post-thumbnail"}
                         src={work?.thumbnail}
                         alt={work?.title}/>
                    <div className={"entry-header"}>
                        <h1 className={"entry-title"}>{work?.title}</h1>
                        <div className={"entry-meta"}>
                            <span className={"posted-on"}>{work?.date}</span>
                        </div>
                    </div>
                </div>
            </article>
        </WorkWrapper>
    )
}

export default WorkItem;

export const getStaticPaths = async () => {

    const works_paths = await axios.get(`${process.env.API_URI}/works`)

    const paths = works_paths?.data?.data?.works.map(item => ({
        params: {workItem: item.slug}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {

    const work = await axios.get(`${process.env.API_URI}/work/${ctx.params.workItem}`)
    const date = changeDate(work.data.data.date)

    return {
        props: {
            'work': {
                ...work.data.data,
                date
            }
        },
        revalidate: 30
    }

}
