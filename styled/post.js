import styled from "styled-components";

export const PostWrapper = styled.div`
  .attachment-post-thumbnail {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .entry {
    &-header,
    &-content,
    &-footer {
      margin: 0 auto;
      max-width: 680px;
    }

    &-header {
      padding: 30px 0 0 0;
    }

    &-title {
      font-size: 30px;
      color: #232323;
      font-weight: 700;
    }

    &-meta {
      margin: 38px 0;
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        width: 36px;
        margin: 0 10px 0 0;
      }

      * {
        color: black;
        text-decoration: none;
      }

      .byline {
        margin: 0 50px 0 0;
        opacity: 0.5;
        color: #232323;
        font-size: 14px;
        font-weight: 400;
      }

      .posted-on {
        margin: 0 0 0 50px;
        opacity: 0.5;
        color: #232323;
        font-size: 14px;
        font-weight: 400;
      }
    }

    &-content {
      p {
        opacity: 0.5;
        color: #232323;
        line-height: 24px;
        font-size: 18px;
        font-weight: 400;
        margin: 0 0 50px 0;
      }
    }
  }

  .wp-block-quote {
    border-left: 5px solid #6cc800;
    margin: 50px 60px 50px 0;
    padding: 0 0 0 60px;
    opacity: 0.5;
    font-style: italic;
    color: #232323;
    font-size: 22px;
    letter-spacing: 1px;
    line-height: 28px;
  }
`
