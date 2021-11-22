import styled from "styled-components";

export const ServicesWrapper = styled.section`
  padding: 40px 0 70px 0;
  @media screen and (max-width: 768px) {
    padding: 20px 0 0 0;
  }

  .items {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .item {
    display: flex;
    width: calc(33.33% - 20px);
    margin: 20px 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 42px;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      width: calc(100% - 20px);
    }

    .title {
      margin: 50px 0 20px 0;
      color: #232323;
      font-size: 24px;
      font-weight: 700;
    }

    .text {
      opacity: 0.6;
      color: #232323;
      font-size: 18px;
      font-weight: 300;
    }
  }
`
