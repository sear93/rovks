import styled from "styled-components";

export const WorkWrapper = styled.section`

  .attachment-post-thumbnail {
    width: 100%;
  }

  .entry {
    &-header {
      padding: 10px 0 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0 0 30px 0;
      }
    }

    &-title {
      font-size: 48px;
      @media screen and (max-width: 768px) {
        margin: 0;
      }
    }

    &-meta {
      font-size: 24px;
      display: flex;
      align-items: center;

      * {
        color: black;
        text-decoration: none;
      }
    }
  }
`
