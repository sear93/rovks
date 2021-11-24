import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  .modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    width: 80%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
