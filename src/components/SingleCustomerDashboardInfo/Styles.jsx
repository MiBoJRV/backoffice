import styled from "styled-components";

export const DashboardContent = styled ('div')`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media only screen and (max-width: 991px) {
    padding: 30px 15px;
  }
  
  & > .control {
    margin-bottom: 0;
  }

  .control {
    display: flex;
    justify-content: space-between;
  }

  .dashboard-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .dashboard-info {
      display: flex;
      flex-direction: column;

      &-group {
        border-radius: 10px;
        background: #FFF;
        display: flex;
        flex-wrap: wrap;
        gap: 30px 20px;
        color: #1A1A1A;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 0;

        @media only screen and (max-width: 768px) {
          flex-direction: column;
        }

        & > div {
          border-radius: 10px;
          border: 1px solid rgba(113, 113, 113, 0.20);
          background: #FFF;
          box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
          color: #1A1A1A;
          width: calc(50% - 10px);
          padding: 10px;
          display: flex;
          gap: 5px;

          @media only screen and (max-width: 768px) {
            width: 100%;
          }

          label {
            white-space: nowrap;
            font-weight: 700;
          }

        }
      }
    }
  }

  .main-graph-group {
    border-radius: 10px;
    background: #FFF;
    flex-direction: column;
    gap: 20px;
    padding: 0;

    .main-graph-fields {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      margin-bottom: 120px;
    }

    h3 {
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      border: none;
      box-shadow: none;
      width: 100%;
      padding: 0;
      background: #fff;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: 105px;
        padding: 10px;
        display: flex;
        gap: 5px;

        input {
          width: 81px;
        }
      }
    }

    .main-graph-chart {
      width: 100%;
      //overflow: scroll;
      border: none;
      box-shadow: none;
      
      &::-webkit-scrollbar {
        width: 0;
      }

      @media only screen and (max-width: 991px) {
        width: 100%;
        overflow-x: scroll;
      }
    }

    .chart-line {
      margin-bottom: 75px;

    }

    & > div {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
      color: #1A1A1A;
      width: calc(50% - 10px);
      padding: 10px;
      display: flex;
      gap: 5px;

      label {
        white-space: nowrap;
      }

    }
  }

  .second-graph-group {
    border-radius: 10px;
    background: #FFF;
    flex-direction: column;
    gap: 20px;
    padding: 0;

    .second-graph-fields {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      margin-bottom: 50px;
    }

    h3 {
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      border: none;
      box-shadow: none;
      width: 100%;
      padding: 0;
      background: #fff;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: 105px;
        padding: 10px;
        display: flex;
        gap: 5px;

        input {
          width: 81px;
        }
      }
    }

    .second-graph-chart {
      width: 100%;
      overflow-x: scroll;
      border: none;
      box-shadow: none;
      
      &::-webkit-scrollbar {
        width: 0;
      }
    }

    .chart-line {
      border: none;
      box-shadow: none;
      margin-bottom: 20px;
    }

    & > div {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
      color: #1A1A1A;
      width: calc(50% - 10px);
      padding: 10px;
      display: flex;
      gap: 5px;

      label {
        white-space: nowrap;
        font-weight: 700;
      }

    }

  }

  .assets-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .customers-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        padding: 10px;
        display: flex;
        gap: 5px;
        width: calc(50% - 10px);
      }
    }
  }

  .transactions-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    display: flex;
    flex-direction: column;

    .transactions-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
        align-items: center;
        height: 40px;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          white-space: nowrap;
          font-weight: 700;
        }

      }
    }
  }

  .customers-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    display: flex;
    flex-direction: column;

    .customers-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
        align-items: center;
        height: 40px;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          white-space: nowrap;
          font-weight: 700;
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