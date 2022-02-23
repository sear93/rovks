import React, {useEffect} from "react";
import {BlogWrapper} from "../../styled/blog";
import axios from "axios";
import {changeDate} from "../../helpers/utils";
import Pagination from "../../components/Pagination";
import {motion} from "framer-motion";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";
import BlogItem from "../../components/BlogItem";
import {useRouter} from "next/router";

const Blog = (props) => {

    const router = useRouter()

    useEffect(() => {
        router.push(`${router.pathname}?page=${props.currentPage}`)
    }, [])

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
                    <Pagination total={props.pagination.total_posts}
                                limit={props.pagination.posts_per_page}
                                currentPage={props.currentPage ?? props.pagination.current_page}
                    />
                </div>
            </BlogWrapper>
        </motion.div>
    )
}

export default Blog;

export const getServerSideProps = async ({query, req}) => {

    let page = query.page ?? req.cookies?.currentPage;

    const response = await axios.get(`${process.env.API_URI}/posts?count=9&size=large&page=${page}`)

    return {
        props: {
            posts: response?.data?.posts.map(i => {
                return {
                    ...i, date: changeDate(i.date)
                }
            }),
            pagination: response?.data?.pagination,
            currentPage: +page
        }
    }
}
