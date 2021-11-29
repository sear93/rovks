import React from "react";
import axios from "axios";
import {PostWrapper} from "../../../styled/post";
import {NewsComponent} from "../../../components/RelatedNews";
import {changeDate} from "../../../helpers/utils";
import Image from "next/image";
import {motion} from "framer-motion";

const Post = ({post, relatedPosts}) => {

    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
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
                            <h1 data-aos="fade-in"
                                data-aos-duration="2000"
                                className={"entry-title"}>{post?.title}</h1>
                            <div className={"entry-meta"}
                                 data-aos="fade-in"
                                 data-aos-duration="2000">
                                <img src={post?.author?.avatar} alt="avatar"/>
                                <span className={"byline"}>By {post?.author?.slug}</span>
                                <span className={"posted-on"}>{post?.date}</span>
                            </div>
                        </div>
                        <div className={"entry-content"}
                             data-aos="fade-in"
                             data-aos-duration="2000">
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

    const paths = response?.data?.data?.posts.map(post => ({
        params: {post: post.slug}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (cxt) => {

    const post = await axios.get(`${process.env.API_URI}/post/${cxt.params.post}`)
    const category = post.data.data.category.slug
    const relatedPosts = await axios.get(`${process.env.API_URI}/posts?category=${category}&count=3`)

    return {
        props: {
            relatedPosts: relatedPosts.data.data.posts.map(post => {
                return {
                    ...post,
                    date: changeDate(post.date)
                }
            }),
            post: {
                ...post.data.data,
                date: changeDate(post.data.data.date)
            },
        },
        revalidate: 30,
    }
}
