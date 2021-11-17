import styled from "styled-components";

export const ServiceWrapper = styled.section`
  padding: 40px 0 70px 0;
  @media screen and (max-width: 768px) {
    padding: 40px 0 20px 0;
  }

  .container {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .service-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 35px 0 0;

    h3 {
      margin: 0 0 30px 0;
      color: #08150a;
      font-size: 50px;
      font-weight: 700;
    }

    p {
      margin: 0 0 60px 0;
      opacity: 0.5;
      color: #08150a;
      font-size: 18px;
      font-weight: 400;
    }

    button {
      align-self: flex-start;
    }

    @media screen and (max-width: 768px) {
      width: initial;
    }
  }

  .service-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
    @media screen and (max-width: 768px) {
      margin: 30px 0;
      width: initial;
    }
  }

  .service-item {
    display: flex;
    width: calc(50% - 20px);
    margin: 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 55px 22px 40px;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    height: 300px;

    @media screen and (max-width: 768px) {
      margin: 20px 10px;
      width: initial;
    }

    &:first-child {
      margin: 50px 10px 10px 10px;
    }

    &:last-child {
      margin: -30px 10px 10px 10px;
      @media screen and (max-width: 768px) {
        margin: 10px;
      }
    }

    .service-item-img {
      width: 25px;
      margin: 0 0 30px 0;
    }

    .service-item-title {
      margin: 0 0 20px 0;
      color: #232323;
      font-size: 24px;
      font-weight: 700;
    }

    .service-item-text {
      opacity: 0.6;
      color: #232323;
      font-size: 18px;
      font-weight: 400;
    }
  }
`
