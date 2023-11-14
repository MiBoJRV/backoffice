import styled from "styled-components";

export const DashboardContent = styled.div`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
  padding: 25px 13px 45px;
  max-width: 1026px;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;

  .worth {
    display: flex;
    align-items: flex-start;
    gap: 55px;
    flex-wrap: wrap;

    h2 {
      color: #1C0371;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0 0 30px 0;
    }

    @media only screen and (max-width: 991px) {
      flex-direction: column;
    }

    .worth_left {
      .total {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 18px;
      }

      .total_worth {
        color: #5100FF;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 13px;
        display: flex;
        gap: 5px;
      }

      .difference {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .difference_amount {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      .difference_percent {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 10px;
        //background: #C1F1DC;
        padding: 4px 5px;

        &.negative {
          color: #FF0000;
          background: rgba(255, 45, 86, 0.20);

          svg {
            fill: #FF0000;
          }
        }

        &.positive {
          color: #0E840C;
          background: #C1F1DC;

          svg {
            fill: #0E840C;
          }
        }

        svg {
          margin-right: 4px;
          margin-bottom: 2px;
        }

      }

      .positive {
        color: #0E840C;
      }

      .negative {
        color: #FF0000;
      }

    }

    .main-graph-chart {
      width: 540px;
      overflow: scroll;
      border: none;
      box-shadow: none;

      @media only screen and (max-width: 991px) {
        width: 100%;
      }
    }

    .worth_right {
      @media only screen and (max-width: 991px) {
        margin: 0 auto;
      }


    }
  }


  .assets {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
    padding: 24px 25px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    h2 {
      margin: 0;
      display: flex;
      gap: 15px;
      color: #1A1A1A;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      & > span {
        display: flex;
        gap: 5px;
      }
    }

    .assets_icon {
      width: 28px;
      height: 28px;
    }

    .assets_table {
      overflow-x: scroll;
      
      .symbol {
        margin-right: 5px;
      }

      table {
        width: 100%;
        min-width: 600px;

        th {
          color: #353535;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: left;
          padding-bottom: 35px;

          &:last-of-type {
            text-align: right;
          }
        }

        tr {
          padding: 15px 0;

          td {
            padding: 15px 0;

            &:first-of-type {
              display: flex;
              align-items: center;
              gap: 17px;

            }
          }

        }

        td {
          color: #1A1A1A;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          &:last-of-type {
            text-align: right;
          }
        }
      }

      .table-mobile {
        overflow-x: scroll;

        & > div {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .top {
          display: flex;
          flex-direction: column;
          gap: 42px;

          .data {
            color: #1A1A1A;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .head {

            .title {
              color: #353535;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
          }

          .body {
            display: flex;
            align-items: center;
            gap: 15px;
          }
        }

        .bottom {

          .title {
            color: #353535;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .data {
            color: #1A1A1A;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .head {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          }

          .group {
            display: flex;
            flex-direction: column;
            gap: 42px;

            &:last-of-type {
              .title {
                text-align: right;
              }
            }
          }
        }
      }
    }

    .assets_charts {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-wrap: wrap;

      @media only screen and (max-width: 991px) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }

      .main-graph-chart {
        //width: 540px;
        overflow: scroll;
        border: none;
        box-shadow: none;

        @media only screen and (max-width: 991px) {
          width: 100%;
        }
      }
    }
  }

  .assets_charts-line {

    canvas {
      //width: 560px!important;
      //height: 116px!important;
      height: 100% !important;
      max-height: 116px;
      max-width: 560px;
      min-width: 207px;
    }
  }
  .second-graph-chart {
    width: 100%;
    overflow: scroll;
    border: none;
    box-shadow: none;

    .chart-line {
      border: none;
      box-shadow: none;
      margin: 20px;
    }
  }

  .assets_charts-doughnut {
    display: flex;
  }


`;