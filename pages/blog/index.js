import React, {useState, useEffect} from "react";
import {BlogWrapper} from "../../styled/blog";
import axios from "axios";
import Link from "next/link";
import {changeDate} from "../../helpers/utils";
import Pagination from "../../components/Pagination";
import {useRouter} from "next/router";
import {LoaderComponent} from "../../components/Loader";

const Blog = (props) => {

    const router = useRouter();
    const [posts, setPosts] = useState(props.posts)
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     (async function () {
    //
    //     })()
    // }, [currentPage]);

    const onPageChangedHandler = async (pageNumber) => {

        setIsLoading(true)

        const response = await axios.get(`${process.env.API_URI}/posts?count=${props.pagination.limit}&page=${pageNumber}`)

        router.query.page = pageNumber
        await router.replace(router)

        let result = await response.data.data.posts.map((item) => {
            return ({
                ...item,
                date: changeDate(item.date)
            })
        })

        setIsLoading(false)
        setPosts(result)
    }

    return (
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
                                            <img className="img"
                                                 alt={post?.title}
                                                 src={post?.thumbnail}/>
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
    )
}

export default Blog;

export const getServerSideProps = async (ctx) => {

    const pageNumber = ctx.query.page

    const response = await axios.get(`${process.env.API_URI}/posts?count=9${pageNumber ? `&page=${pageNumber}` : ''}`)

    return {
        props: {
            posts: response.data.data.posts.map(i => {
                return {
                    ...i,
                    date: changeDate(i.date)
                }
            }),
            pagination: response.data.data.pagination,
        }
    }
}
