import styled from "styled-components";

export const ModalWrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    &-main {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 10px;
      width: 80%;
      height: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &-btn {
      z-index: 10;
      position: absolute;
      top: 25px;
      right: 25px;
      height: 24px;
      width: 24px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      &::before,
      &:after {
        content: '';
        display: block;
        width: 25px;
        position: absolute;
        height: 4px;
        background-color: black;
        border-radius: 2px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`;
