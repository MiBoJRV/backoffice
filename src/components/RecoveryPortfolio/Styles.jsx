import styled from "styled-components";

export const RecoveryPortfolioContent = styled.div`
  hr {
    max-width: 1000px;
    height: 14px;
    flex-shrink: 0;
    background: var(--Radial, radial-gradient(50% 50% at 50% 50%, #4F00FF 0%, #2D018F 100%));
  }
  
  .total-loss {
    display: flex;
    gap: 5px;
    color: #B10707;
  }

  .total-recovered {
    display: flex;
    gap: 5px;
    color: #068004;
  }
  
  h2 {
    color: #1C0371;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    margin-top: 50px;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap:  30px 10px;
    justify-content: center;

    h3 {
      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      white-space: nowrap;
    }
    
    li {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(101, 101, 101, 0.20);
      gap: 5px;
      display: flex;
      align-items: center;
      padding: 10px;
      height: 100px;
      min-width: 280px;
      width: calc(35% - 10px);
      max-width: 320px;

      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      
      @media only screen and (max-width: 640px) {
        width: 100%;
        max-width: 320px;
      }
      
    }
  }
`;