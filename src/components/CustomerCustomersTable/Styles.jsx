import styled from "styled-components";

export const CustomerCustomersContent = styled.div`
  position: relative;

  .table-size {
    color: #1A1A1A;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    max-width: 104px;
    width: 100%;
    margin-bottom: 24px;

    select {
      color: #1A1A1A;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      border-radius: 5px;
      border: 0.5px solid rgba(143, 143, 143, 0.50);
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10), 0 2px 3px 0 rgba(30, 9, 77, 0.15) inset;
    }
  }

  .table-info {
    overflow: scroll;
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
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
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

  .table-entries {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #535353;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .table-pages {
      display: flex;
      align-items: center;
      gap: 5px;

      .page {
        color: #FFF;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: #340077;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        border: 1px solid #787878;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        outline: none;

        &:disabled {
          opacity: 0.5;
        }
      }
    }
  }

`;