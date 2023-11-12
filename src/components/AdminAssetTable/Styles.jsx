import styled from "styled-components";

export const AdminAssetTableContent = styled ('div')`
  position: relative;

  .assets_charts-doughnut {
    margin-top: 50px;

    .doughnut-wrap {
      flex-direction: row;

      @media only screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .table-info {
    overflow: scroll;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
    min-width: 400px;

    th {
      color: #353535;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px;
    }

    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      .coin-icon {
        width: 25px;
        height: 25px;
      }

      &:last-of-type,
      &:nth-last-child(2) {
        text-align: center;
        width: 50px;
      }
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
    }


    .edit {
      cursor: pointer;
    }

  }

`;