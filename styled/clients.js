import styled from "styled-components";

export const ClientsWrapper = styled.section`
  .container {
    background: url("/images/slider-bg.png");
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 260px 50px;

    @media screen and (max-width: 768px) {
      background-size: cover;
      padding: 60px 0 50px;
      margin: 0 0 50px 0;
    }
  }

  .clients-title {
    text-align: left;
    width: 100%;
    max-width: 450px;
    margin: 0 0 0 auto;
    color: #08150a;
    font-size: 50px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      margin: 30px 0;
      max-width: initial;
      text-align: center;
    }
  }

  .clients-slider {
    max-width: 540px;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto 0 45px;

    @media screen and (max-width: 768px) {
      margin: 0 auto;
      padding: 0 20px;
    }

    .swiper-pagination {
      &-bullets {
        width: 92%;
      }

      &-bullet {
        width: 6px;
        height: 6px;
        transition: all 0.5s ease;

        &-active {
          background: #ff6d03;
        }
      }
    }
  }

  .clients-slide {
    text-align: center;
    user-select: none;

    &__response {
      color: #08150a;
      font-weight: 400;
      font-style: italic;
      font-family: "Roboto", sans-serif;
      margin: 0 0 60px 0;
      opacity: 0.5;
      font-size: 24px;
      letter-spacing: normal;
      line-height: 36px;
    }

    &__name {
      color: #232323;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      margin: 0 0 15px 0;
      font-size: 20px;
    }

    &__position {
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      opacity: 0.5;
      color: #232323;
      font-size: 14px;
    }
  }
`
