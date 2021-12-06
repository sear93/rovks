import React, {useState} from "react";
import {BlogWrapper} from "../../styled/blog";
import axios from "axios";
import Link from "next/link";
import {changeDate} from "../../helpers/utils";
import Pagination from "../../components/Pagination";
import {useRouter} from "next/router";
import {LoaderComponent} from "../../components/Loader";
import Image from "next/image";
import {motion} from "framer-motion";

const Blog = (props) => {

    const router = useRouter();
    const [posts, setPosts] = useState(props.posts)
    const [isLoading, setIsLoading] = useState(false)

    const onPageChangedHandler = async (pageNumber) => {

        setIsLoading(true)

        const response = await axios.get(`${process.env.API_URI}/posts?count=${props.pagination.limit}&page=${pageNumber}`)

        router.query.page = pageNumber
        await router.replace(router)

        let result = await response.data.posts.map((item) => {
            return ({
                ...item,
                date: changeDate(item.date)
            })
        })

        setIsLoading(false)
        setPosts(result)
    }

    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <BlogWrapper>
                <div className="container">
                    <div className="blog">
                        <div className="heading"
                             data-aos="fade-down"
                             data-aos-duration="2000">
                            <h1 className="title">
                                Blog News
                            </h1>
                            <p className="subtitle">
                                Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est
                            </p>
                        </div>
                        <div className="blog-section">
                            {isLoading ? <LoaderComponent/> : posts?.map(post => {
                                return (
                                    <div key={post.id} className="item" data-aos="fade-in"
                                         data-aos-duration="3000">
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
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Pagination total={props.pagination.total}
                                limit={props.pagination.limit}
                                currentPage={props.pagination.page}
                                setCurrentPage={onPageChangedHandler}/>
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
        .get(`${process.env.API_URI}/posts?count=9${pageNumber ? `&page=${pageNumber}` : `&page=${pageFromCookie}`}`)

    return {
        props: {
            posts: response.data.posts.map(i => {
                return {
                    ...i,
                    date: changeDate(i.date)
                }
            }),
            pagination: response.data.pagination,
        }
    }
}
