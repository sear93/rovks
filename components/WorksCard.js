import React from 'react';
import Link from "next/link";
import Image from 'next/image'

const WorksCard = ({post}) => {

    const workItemImg = "https://picsum.photos/300/300.webp"
    let terms = post?.terms.map(term => term.description)
    let preparedTerms = terms?.join(', ')

    return (
        <>
            <div className="works-item"
                 data-aos="fade-in"
                 data-aos-duration="3000">
                <Link href={`/work/${post.slug}`}>
                    <a>
                        <Image className="works-item__img"
                               src={post.thumbnail ?? workItemImg}
                               placeholder={"blur"}
                               layout='fill'
                               alt="image"/>
                        {/*<img className="works-item__img"*/}
                        {/*     src={post.thumbnail ?? workItemImg}*/}
                        {/*     alt="image"/>*/}
                        <div className="works-item-content">
                            <h3 className="works-item__name">{post.title}</h3>
                            <h3 className="works-item__type">
                                {post.terms.length ? preparedTerms : `Without category`}
                            </h3>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default WorksCard;
