import React from 'react';
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({post}) => {
    return (
        <div className="item"
             data-aos="fade-up"
             data-aos-duration="2000"
        >
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
    );
};

export default BlogItem;
