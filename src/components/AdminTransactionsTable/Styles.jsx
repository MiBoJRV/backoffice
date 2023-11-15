import styled from "styled-components";

export const TransactionsTableContent = styled.div`
  .table-info {
    overflow-x: scroll;
    
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;

    th {
      color: #353535;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px;

      &:last-of-type {
        text-align: center;
      }
    }

    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &:last-of-type,
      &:nth-last-child(2) {
        text-align: center;
        width: 50px;
      }

      &.icon {
        padding: 0 10px;
        text-align: center;
      }

      .coin-icon {
        width: 21px;
        height: 21px;
      }
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
      white-space: nowrap;
    }


    .add {
      border-radius: 10px;
      background: #1E0F6D;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      width: 19px;
      height: 19px;
      padding: 5px;
      cursor: pointer;
    }

    .edit,
    .bin {
      cursor: pointer;
    }

  }

`;

