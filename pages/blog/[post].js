import React from "react";
import axios from "axios";
import Image from "next/image";
import {motion} from "framer-motion";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";
import {changeDate} from "../../helpers/utils";
import {NewsComponent} from "../../components/RelatedNews";
import {PostWrapper} from "../../styled/post";

const Post = ({post, relatedPosts}) => {

    return (
        <motion.div initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
            <PostWrapper>
                <article>
                    <div className={"container"}>
                        <Image src={post?.thumbnail}
                               alt={post?.title}
                               className={"attachment-post-thumbnail"}
                               placeholder={"blur"}
                               width={1200}
                               height={760}
                        />
                        <div className={"entry-header"}>
                            <h1 className={"entry-title"}>{post?.title}</h1>
                            <div className={"entry-meta"}>
                                <img src={post?.author?.avatar} alt="avatar"/>
                                <span className={"byline"}>By {post?.author?.slug}</span>
                                <span className={"posted-on"}>{post?.date}</span>
                            </div>
                        </div>
                        <div className={"entry-content"}>
                            <div dangerouslySetInnerHTML={{__html: post?.content}}/>
                        </div>
                    </div>
                </article>
                <NewsComponent title={"Related News"}
                               subtitle={"Vestibulum posuere, turpis tempus tempus"}
                               posts={relatedPosts}/>
            </PostWrapper>
        </motion.div>
    )
}

export default Post;

export const getStaticPaths = async () => {

    const response = await axios.get(`${process.env.API_URI}/posts`)

    const paths = response?.data?.posts.map(post => ({
        params: {post: post.slug}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {

    const post = await axios.get(`${process.env.API_URI}/post/${ctx.params.post}`)
    const category = post?.data?.category?.slug
    const relatedPosts = await axios.get(`${process.env.API_URI}/posts?category=${category}&size=large&count=3`)

    return {
        props: {
            relatedPosts: relatedPosts?.data?.posts.map(post => {
                return {
                    ...post,
                    date: changeDate(post.date)
                }
            }),
            post: {
                ...post.data,
                date: changeDate(post.data.date)
            },
        },
        revalidate: 30,
    }
}
