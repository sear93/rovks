import styled from "styled-components";

export const RelatedUpdated = styled.div`
  margin: 100px 0 0 0;

  @media screen and (max-width: 768px) {
    margin: 30px 0 0 0;
  }

  .related-posts {
    &-title {
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      margin: 0 0 20px 0;
      color: #232323;
      font-size: 30px;
      font-weight: 700;
    }

    &-subtitle {
      opacity: 0.5;
      font-style: normal;
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
      margin: 50px 0 120px 0;

      @media screen and (max-width: 768px) {
        margin: 40px 0 60px 0;
      }

      .grid-item {
        width: 100%;
        max-width: 33.33%;

        .link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: black;
          font-size: 0;
        }

        @media screen and (max-width: 768px) {
          max-width: initial;
          width: initial;
        }
      }

      h5 {
        margin: 24px 0 30px 0;
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
