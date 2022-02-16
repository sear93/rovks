import React from "react";
import {BlogWrapper} from "../../styled/blog";
import axios from "axios";
import {changeDate} from "../../helpers/utils";
import Pagination from "../../components/Pagination";
import {motion} from "framer-motion";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";
import BlogItem from "../../components/BlogItem";

const Blog = (props) => {

    return (
        <motion.div initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
            <BlogWrapper>
                <div className="container">
                    <div className="blog">
                        <div className="heading">
                            <h1 className="title">
                                Blog News
                            </h1>
                            <p className="subtitle">
                                Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est
                            </p>
                        </div>
                        <div className="blog-section">
                            {props.posts?.map(post => <BlogItem key={post.id} post={post}/>)}
                        </div>
                    </div>
                    <Pagination total={props.pagination.total}
                                limit={props.pagination.limit}
                                currentPage={props.pagination.page}
                    />
                </div>
            </BlogWrapper>
        </motion.div>
    )
}

export default Blog;

export const getServerSideProps = async (ctx) => {

    const pageNumber = ctx.query.page
    let pageFromCookie = ctx.req.cookies?.currentPage

    const response = await axios
        .get(`${process.env.API_URI}/posts?count=9&size=large&page=${pageNumber && pageFromCookie}`)

    return {
        props: {
            posts: response?.data?.posts.map(i => {
                return {
                    ...i, date: changeDate(i.date)
                }
            }),
            pagination: response?.data?.pagination,
            currentPage: pageFromCookie
        }
    }
}
