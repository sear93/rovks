import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Pagination = (props) => {

    const pages = Math.ceil(props.total / props.limit)

    const [activeClass, setActiveClass] = useState(props.currentPage)
    const [pageNumber, setPageNumber] = useState(props.currentPage)

    let paged = [];

    for (let i = 1; i <= pages; i++) {
        paged.push(i)
    }

    useEffect(() => {
        setActiveClass(pageNumber)
        props.setCurrentPage(pageNumber)
        window.localStorage.setItem('currentPage', pageNumber)
        document.cookie = `currentPage=${pageNumber}; secure`;
    }, [pageNumber])

    return (
        <PaginationWrapper>
            {paged.map((index) => <button
                className={index === activeClass ? 'active' : ''}
                onClick={() => setPageNumber(index)}
                disabled={activeClass === index}
                key={index}>{index}</button>)}
        </PaginationWrapper>
    );
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
