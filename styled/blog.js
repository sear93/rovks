import styled from "styled-components";

export const BlogWrapper = styled.div`
  .blog-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    min-height: 600px;
    margin: 0 -15px 50px;

    @media screen and (max-width: 768px) {
      margin: 0 0 50px;
    }
  }

  .heading {
    text-align: center;
    margin: 160px 0 80px 0;

    .title {
      font-size: 60px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      margin: 0 0 20px 0;
    }

    .subtitle {
      opacity: 0.5;
      color: #232323;
      font-size: 22px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
    }

    @media screen and (max-width: 768px) {
      margin: 0 0 40px 0;
    }
  }

  .item {
    width: calc(33.333% - 30px);
    margin: 15px;

    a {
      text-decoration: none;
    }

    .img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      object-position: center;
    }

    .content {
      margin: 24px 10% 0 0;

      .title {
        color: black;
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
      }

      .date {
        color: black;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        margin: 28px 0 0 0;
      }
    }

    @media screen and (max-width: 768px) {
      width: calc(50% - 10px);
      margin: 5px;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      margin: 0 0 30px 0;
    }
  }
`
