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
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    filter: blur(0);
    opacity: 1;
    visibility: visible;
  }

  .modal.off {
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.2);
  }

  .modal h2 {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
  }

  .modal .content {
    padding: 1rem;
  }

  .modal .actions {
    border-top: 1px solid #ccc;
    background: #eee;
    padding: 0.5rem 1rem;
  }

  .modal .actions button {
    border: 0;
    background: #78f89f;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
  }

  #centered-toggle-button {
    position: absolute;
  }
`;
