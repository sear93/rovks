import Link from "next/link";
import {RelatedUpdated} from "../styled/relatedPosts";
import React from "react";
import Image from "next/image";

export const NewsComponent = (props) => {

    return (<RelatedUpdated>
        <div className="container">
            <div className="related-posts">
                <h3 className="related-posts-title">{props.title}</h3>
                <p className="related-posts-subtitle">{props.subtitle}</p>
                <div className="related-posts-grid">
                    {props?.posts?.map(post => {
                        return (<div key={post.id}
                                     className="grid-item">
                            <Link href={`/blog/${post.slug}`}>
                                <a className="link">
                                    <Image src={post.thumbnail}
                                           alt={post.slug}
                                           className={'grid-item-img'}
                                           placeholder={"blur"}
                                           width={700}
                                           height={700}
                                    />
                                    <h5>
                                        {post.title}
                                    </h5>
                                    <p className="blog-item-content-date">
                                        {props.date ?? post.date}
                                    </p>
                                </a>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    </RelatedUpdated>)
}
