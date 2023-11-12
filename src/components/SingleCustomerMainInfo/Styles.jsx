import styled from "styled-components";

export const MainContent = styled ('div')`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
  padding: 30px;

  @media only screen and (max-width: 991px) {
    padding: 15px;
  }

  .control {
    display: flex;
    justify-content: space-between;
  }

  .main-info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
      padding: 20px 15px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px 20px;
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
        align-items: center;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          white-space: nowrap;
        }
      }
    }
  }

  input {
    border: none;
    outline: none;
    color: #1A1A1A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
  }

`;