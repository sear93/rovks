import styled from "styled-components";

export const RelatedUpdated = styled.div`
  margin: 100px 0 0 0;

  .related-posts {
    &-title {
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: center;
      margin: 0 0 20px 0;
      color: #232323;
      font-size: 60px;
      font-weight: 700;
    }

    &-subtitle {
      opacity: 0.5;
      font-style: normal;
      text-align: center;
      letter-spacing: normal;
      line-height: normal;
      color: #232323;
      font-size: 22px;
      font-weight: 400;
    }

    &-grid {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      grid-gap: 30px;
      margin: 80px 0 120px 0;

      .grid-item {
        width: 100%;
        max-width: 33.33%;

        &-link {
          text-decoration: none;
          color: black;
        }

        @media screen and (max-width: 768px) {
          max-width: initial;
        }
      }

      img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        margin: 0 0 24px 0;
      }

      h5 {
        margin: 0 0 30px 0;
        color: #232323;
        font-size: 24px;
        font-weight: 700;
      }

      p {
        color: #232323;
        font-weight: 400;
        font-size: 14px;
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`
