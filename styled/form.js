import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 95px;

  .errors {
    height: 20px;

    .error {
      color: red;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .inputs {
    display: flex;

    input {
      width: 100%;
      padding: 20px 25px;
      outline: none;
      height: 60px;
      border: none;
      background: #f9f9f9;
      margin: 5px 0;
      border-radius: 10px;

      &.error {
        box-shadow: inset 0 0 0 2px red;
        transition: all 2s ease;
      }

      &::selection {
        background: #34495e;
        color: white;
      }

      &::placeholder {
        font-size: 16px;
      }
    }

    .inputs-col {
      margin: 0 15px 0 0;
      width: 100%;

      &:last-child {
        margin: 0 0 0 15px;
        @media screen and (max-width: 768px) {
          margin: 0;
        }
      }

      @media screen and (max-width: 768px) {
        margin: 0;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  textarea {
    padding: 20px 25px;
    width: 100%;
    outline: none;
    border: none;
    background: #f9f9f9;
    resize: none;
    min-height: 160px;
    margin: 7px 0 60px 0;
    font-family: inherit;

    border-radius: 10px;

    &.error {
      box-shadow: inset 0 0 0 2px red;
    }

    &::placeholder {
      font-size: 16px;
    }
  }

  .button {
    margin: 0 0 40px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0 15px;
  }
`
