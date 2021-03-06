import styled from "styled-components";

export const FeaturesWrapper = styled.section`
  padding: 70px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }

  .row,
  .row-reverse {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .feature-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 540px;

      h3 {
        font-weight: 700;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        margin: 0 0 30px 0;
        color: #08150a;
        font-size: 50px;

        @media screen and (max-width: 768px) {
          font-size: 42px;
          margin: 0 0 20px 0;
        }
      }

      p {
        opacity: 0.5;
        color: #08150a;
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
      }

      button {
        margin: 80px 0 0 0;
        align-self: flex-start;

        @media screen and (max-width: 768px) {
          align-self: center;
        }

        @media screen and (max-width: 768px) {
          margin: 40px 0 0 0;
        }
      }
    }

    .feature-img {
      margin: 0 20px;

      img {
        transform: ${props => props.reverse ? '' : 'rotateY(180deg);'};
      }

      @media screen and (max-width: 768px) {
        margin: 0 20px 30px 20px;
        width: 80%;
      }
    }
  }

  .row {
    flex-direction: row;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    &-reverse {
      flex-direction: row-reverse;
      @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
      }

      .feature-img {
        transform: rotateY(0deg);
      }
    }
  }
`
