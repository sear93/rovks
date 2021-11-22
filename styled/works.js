import styled from "styled-components";

export const WorksWrapper = styled.section`
  .works-content {
    display: flex;
    justify-content: space-between;
    margin: 0 0 40px 0;

    h4 {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      color: #221c25;
      font-size: 60px;

      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .works-items {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 80px 0;
    min-height: 405px;
    transition: all 0.5s ease;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0 0 20px 0;
    }
  }

  .works-item {
    position: relative;
    display: flex;
    width: calc(33.33% - 20px);
    min-height: 350px;
    margin: 20px 10px 70px 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);

    &-content {
      width: 80%;
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translate(-50%);
      text-align: left;
      background: white;
      padding: 35px 30px;
      box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name {
      color: #232323;
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 12px 0;
    }

    &__type {
      opacity: 0.5;
      color: #232323;
      font-size: 14px;
      font-weight: 400;
    }

    @media screen and (max-width: 768px) {
      width: initial;
    }
  }

  a {
    color: #000;
    font-size: 0;
    height: 100%;
  }

  .works-group {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .works__btn {
    padding: 10px 12px 0 12px;
    outline: none;
    border: none;
    background: transparent;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: all 0.5s ease;
    color: #6f7799;
    font-size: 20px;

    @media screen and (max-width: 768px) {
      padding: 15px 0 0 0;
    }

    &.red {
      color: #ff6d04;
    }

    &:last-child {
      padding: 10px 0 0 12px;

      @media screen and (max-width: 768px) {
        padding: 15px 0 0 0;
      }
    }

    &:hover {
      color: #ff6d04;
    }
  }
`
