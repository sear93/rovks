import React, {useState} from 'react';
import styled from "styled-components";
import {useRouter} from 'next/router'

const Pagination = (props) => {

    const router = useRouter()
    const pages = Math.ceil(props.total / props.limit)
    const [activeClass, setActiveClass] = useState(props.currentPage)
    let paged = []


    for (let i = 1; i <= pages; i++) {
        paged.push(i)
    }

    const onSetPageHandler = (pageNumber) => {
        router.push(`${router.pathname}?page=${pageNumber}`)
        setActiveClass(pageNumber)
        document.cookie = `currentPage=${pageNumber}; secure; samesite=strict`;
    }

    return <PaginationWrapper>
        {paged.map((index) => <button
            className={index === activeClass ? 'active' : ''}
            onClick={() => onSetPageHandler(index)}
            disabled={activeClass === index}
            key={index}>{index}</button>)}
    </PaginationWrapper>
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 10px;
  margin: 0 0 40px 0;

  button {
    padding: 5px 30px;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
    border: 2px solid #ff6d04;
    transition: all 0.6s ease;
    font-weight: 700;

    &.active {
      background: #ff6d04;
      color: #fff;
      border: 2px solid #000;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
