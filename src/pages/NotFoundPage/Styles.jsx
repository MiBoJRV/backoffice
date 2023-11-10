import styled from "styled-components";

export const PageContent = styled.div`
  color: #213547;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 200px;
  }

  h2 {
    font-size: 40px;
  }

  a {
    position: relative;
    color: #FAF9F9;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 7px;
    border: 2px solid #FFF;
    background: #FF646B;
    width: 273px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    outline: none;
    margin: 65px auto 0;
    &:hover {
      background: #FF2731;
    }
  }
`;