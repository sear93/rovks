import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  padding: 200px 0 130px 0;

  .content {
    width: calc(50%);

    .title {
      font-size: 70px;
      color: #232323;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      margin: 0 0 70px 0;

      @media screen and (max-width: 768px) {
        font-size: 50px;
        margin: 0 0 35px 0;
      }
    }

    .text {
      margin: 0 0 60px 0;
      opacity: 0.5;
      color: #232323;
      font-size: 18px;
      font-weight: 400;
    }

    .btns {
      display: flex;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }

      .button {
        margin: 0 30px 0 0;

        @media screen and (max-width: 768px) {
          margin: 0 0 30px 0;
        }
      }

      .play_btn {
        font-size: 16px;
        font-weight: 400;
        color: #232323;
        text-transform: uppercase;

        img {
          margin: 0 0 0 20px;
          transition: all 0.3s ease;
          width: 50px;
        }

        &:hover {
          img {
            transform: scale(1.15);
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: initial;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`
