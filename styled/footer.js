import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #f9f9f9;
  padding: 120px 0;

  .nav-footer {
    display: flex;
    justify-content: flex-start;

    .footer-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 25%;
      width: 100%;

      .menu-items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .menu-item {
        margin: 0 0 8px 0;
      }

      h3 {
        margin: 0 0 30px 0;
        color: #232323;
        font-size: 18px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
      }

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #232323;
        text-decoration: none;
        opacity: 0.5;
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
      }

      @media screen and (max-width: 768px) {
        max-width: 50%;
        margin: 0 0 20px 0;
      }
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .bottom-section {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    .social {
      &__link {
        text-decoration: none;
        color: #8b8b8b;
        transition: color 0.5s ease;

        svg {
          width: 24px;
          height: 24px;
        }

        &:nth-child(2) {
          margin: 0 30px;
        }

        &:hover {
          color: #ff6d04;
        }
      }
    }

    .copyright {
      color: #8b8b8b;
      font-size: 16px;
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      margin: 0 15px 0 0;
    }
  }
`
