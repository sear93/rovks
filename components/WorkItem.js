import React from 'react';
import {WorkWrapper} from "../styled/work";

const WorkItem = ({work}) => {
    return (
        <WorkWrapper>
            <article>
                <div className={"container"}>
                    <img className={"attachment-post-thumbnail"}
                         src={work?.thumbnail}
                         alt={work?.title}/>
                    <div className={"entry-header"}>
                        <h1 className={"entry-title"}>{work?.title}</h1>
                        <div className={"entry-meta"}>
                            <span className={"posted-on"}>{work?.date}</span>
                        </div>
                    </div>
                </div>
            </article>
        </WorkWrapper>
    );
};

export default WorkItem;
