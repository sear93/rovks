import React, {useState, useEffect} from "react";
import {BlogWrapper} from "../../styled/blog";
import axios from "axios";
import Link from "next/link";
import {changeDate} from "../../helpers/utils";
import Pagination from "../../components/Pagination";
import {useRouter} from "next/router";
import {LoaderComponent} from "../../components/Loader";
import Image from "next/image";
import {motion} from "framer-motion";
import {pageTransition, pageVariants} from "../../styled/pageTransitions";
// import useSWR from 'swr'

const Blog = (props) => {

    const router = useRouter();
    const [posts, setPosts] = useState(props.posts)
    const [isLoading, setIsLoading] = useState(false)

    console.log(props.currentPage)

    useEffect(() => {
        if(props.currentPage) {
            router.query.page = props.currentPage
             router.replace(router)
        }
    } , [])

    const onPageChangedHandler = async (pageNumber) => {

        setIsLoading(true)

        const response = await axios.get(`${process.env.API_URI}/posts?&size=large&count=${props.pagination.limit}&page=${pageNumber}`)

        router.query.page = pageNumber
        await router.replace(router)

        let result = await response.data.posts.map((item) => {
            return ({
                ...item, date: changeDate(item.date)
            })
        })

        setIsLoading(false)
        setPosts(result)
    }


    return (<motion.div initial="initial"
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
                        {isLoading ? <LoaderComponent/> : posts?.map(post => {
                            return (<div key={post.id} className="item">
                                    <Link href={`/blog/${post.slug}`}>
                                        <a>
                                            <Image src={post?.thumbnail}
                                                   alt={post?.title}
                                                   className="img"
                                                   width={500}
                                                   height={500}
                                            />
                                            <div className="content">
                                                <h4 className="title">{post?.title}</h4>
                                                <p className="date">
                                                    {post?.date}
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                        })}
                    </div>
                </div>
                <Pagination total={props.pagination.total}
                            limit={props.pagination.limit}
                            currentPage={props.pagination.page}
                            setCurrentPage={onPageChangedHandler}/>
            </div>
        </BlogWrapper>
    </motion.div>)
}

export default Blog;

export const getServerSideProps = async (ctx) => {

    const pageNumber = ctx.query.page
    let pageFromCookie = ctx.req.cookies?.currentPage

    const response = await axios
        .get(`${process.env.API_URI}/posts?count=9&size=large${pageNumber ? `&page=${pageNumber}` : `&page=${pageFromCookie}`}`)

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
