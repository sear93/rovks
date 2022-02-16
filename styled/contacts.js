import styled from "styled-components";

export const ContactsWrapper = styled.section`
  .map-container {
    margin: 20px 0;
    height: 760px;
    width: 100%;
    box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.13);
    outline: none;

    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }

  .contacts-heading {
    text-align: center;
    margin: 220px 0 170px;

    .title {
      font-size: 50px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      color: #232323;
    }

    .subtitle {
      font-size: 20px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      color: #ff6d04;
      margin: 0 0 22px 0;
    }

    @media screen and (max-width: 768px) {
      margin: 60px 0;
    }
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto 240px auto;
  max-width: 82%;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.13);
  background: #ffffff;
  
  @media screen and (max-width: 768px) {
    max-width: initial;
    margin: 0 auto 60px auto;
  }

  .title {
    text-align: center;
    margin: 40px 0;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: normal;
  }
`
