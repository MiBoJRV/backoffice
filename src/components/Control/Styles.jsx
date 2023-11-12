import styled from "styled-components";

export const ControlContent = styled ('div')`
  margin-bottom: 30px;
  gap: 10px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  h2 {
    color: #1C0371;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  button {
    border-radius: 10px;
    background: #1E0F6D;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 177px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #260FA0;
    }

    &:active {
      background: #1D1060;
    }
    
    @media only screen and (max-width: 480px) {
      margin: 0 0 0 auto;
    }
  }

`;