import React, {useEffect, useState} from "react";
import {WorksWrapper} from "../styled/works";
import WorksButton from "./WorksButton";
import WorksCard from "./WorksCard";

export const Works = ({worksItems, workTypes}) => {

    const [works, setWorks] = useState(worksItems);
    const [activeClass, setActiveClass] = useState(0)
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(+window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('load', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('load', handleResize)
        }
    }, [])

    const filter = (e) => {

        e.preventDefault()
        setActiveClass(+e.target.dataset.id)

        if (!e.target.dataset.name) return setWorks(worksItems)

        const filteredPosts = worksItems.filter((element) => {
            return element?.terms?.some((subElement) => {
                return subElement.slug === e.target.dataset.name
            })
        })

        setWorks(filteredPosts)
    }

    return (
        <WorksWrapper>
            <div className="container"
                 data-aos="fade-down"
                 data-aos-duration="2000">
                <div className="works-content">
                    <h4>Latest Works</h4>
                    <div className="works-group">
                        <button onClick={filter}
                                data-name={null}
                                data-id={0}
                                className={`works__btn ${activeClass === 0 ? 'red' : ''}`}>
                            All
                        </button>
                        {workTypes.map((type, index) => {
                            return (
                                <WorksButton
                                    key={index}
                                    type={type}
                                    index={index}
                                    activeClass={activeClass}
                                    filter={filter}/>
                            )
                        })}
                    </div>
                </div>

                <div className="works-items">
                    {works.slice(0, windowSize <= 768 ? 3 : 6).map((post) => {
                        return <WorksCard post={post} key={post.id}/>
                    })}
                </div>
            </div>
        </WorksWrapper>
    )
}
