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
      font-size: 48px;
    }

    &-meta {
      font-size: 14px;
      margin: 20px 0;
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
        margin: 0 25px 0 0;
      }

      .posted-on {
        margin: 0 0 0 25px;
      }
    }

    &-content {
      p {
        opacity: 0.5;
        color: black;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  .wp-block-quote {
    border-left: 3px solid #6cc800;
    margin: 30px 30px 30px 0;
    padding: 0 0 0 30px;
    opacity: 0.5;
    color: black;
    font-size: 18px;
    font-style: italic;
    letter-spacing: normal;
    line-height: 14px;
  }
`
