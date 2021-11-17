import Link from "next/link";
import {RelatedUpdated} from "../styled/relatedPosts";
import React from "react";

export const NewsComponent = (props) => {

    return (
        <RelatedUpdated>
            <div className="container">
                <div className="related-posts"
                     data-aos="fade-down"
                     data-aos-duration="2000">
                    <h3 className="related-posts-title">{props.title}</h3>
                    <p className="related-posts-subtitle">{props.subtitle}</p>
                    <div className="related-posts-grid">
                        {props?.posts?.map(post => {
                            return (
                                <div key={post.id}
                                     className="grid-item"
                                     data-aos="fade-in"
                                     data-aos-duration="3000">
                                    <Link href={`/blog/${post.slug}`}>
                                        <a className="grid-item-link">
                                            <img src={post.thumbnail}
                                                 alt=""/>
                                            <h5>
                                                {post.title}
                                            </h5>
                                            <p className="blog-item-content-date">
                                                {props.date ?? post.date}
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </RelatedUpdated>
    )
}
