import styled from "styled-components";

export const TeamWrapper = styled.section`
  padding: 40px 0 120px 0;

  .team-title {
    margin: 70px 0;
    color: #221c25;
    font-size: 60px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
  }

  .team-items {
    display: flex;
    justify-content: center;
    margin: -20px -10px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
    }
  }

  .team-item {
    position: relative;
    display: flex;
    width: calc(33.33% - 20px);
    margin: 20px 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    height: 450px;

    .team-item-content {
      width: 80%;
      position: absolute;
      bottom: -50px;
      background: white;
      padding: 35px 0;
      box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    }

    .team-item-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .team-item-name {
      margin: 0 0 12px 0;
      color: #232323;
      font-size: 20px;
      font-weight: 700;
    }

    .team-item-position {
      opacity: 0.5;
      color: #232323;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }

    @media screen and (max-width: 768px) {
      width: calc(100% - 20px);
    }
  }
`
