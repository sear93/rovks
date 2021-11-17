import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 45px 0;
  //position: fixed;
  width: 100%;
  z-index: 5;

  .nav-primary {
    @media screen and (max-width: 768px) {
      display: none;
      position: absolute;
      background: white;
      width: 100%;
      z-index: 3;
      top: 0;
      left: 0;
      height: 100%;

      &.open {
        display: block;
      }
    }
  }

  .brand-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
      color: #ff6d04;
      text-decoration: none;
      font-size: 40px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: center;
      transition: all 0.5s ease;

      &:hover {
        text-shadow: 1px 0 5px rgba(150, 150, 150, 1);
      }
    }

    .menu {
      list-style: none;
      display: flex;

      &-item {
        margin: 0 40px;

        &:last-child {
          margin: 0 0 0 20px;

          @media screen and (max-width: 768px) {
            margin: 30px 0;
          }
        }

        a {
          font-size: 16px;
          font-weight: 400;
          color: #232323;
          font-style: normal;
          letter-spacing: normal;
          line-height: normal;
          text-decoration: none;
          transition: color 0.5s ease;

          &.active {
            color: #ff6d04;
          }

          &:hover {
            color: #ff6d04;
          }
        }

        @media screen and (max-width: 768px) {
          margin: 30px 0;
        }
      }

      .current-menu-item > a {
        color: black;
      }

      &-toggler {
        display: none;
        outline: none;
        border: none;

        &-container {
          display: none;

          @media screen and (max-width: 768px) {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: black;
          }
        }

        @media screen and (max-width: 768px) {
          z-index: 4;
          position: relative;
          width: 20px;
          height: 17px;
          cursor: pointer;
          display: flex;
          background: transparent;
          justify-content: center;
          align-items: center;
          padding: 0;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            background-color: #000;
            height: 3px;
            width: 20px;
            transition: all 0.3s ease;
          }

          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            background-color: #000;
            height: 3px;
            width: 20px;
            transition: all 0.3s ease;
          }

          span {
            position: absolute;
            bottom: 7px;
            left: 0;
            display: block;
            background-color: #000;
            height: 3px;
            width: 20px;
            transition: all 0.3s ease;
          }

          &.active {
            &::before {
              transform: rotate(45deg);
              bottom: 7px;
            }

            &::after {
              transform: rotate(-45deg);
              top: 7px;
            }

            span {
              transform: rotate(45deg);
              bottom: 7px;
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`
