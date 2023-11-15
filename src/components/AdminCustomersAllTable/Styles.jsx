import styled from "styled-components";

export const CustomersAllContent = styled.div`

  .table-control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
    gap: 50px;

    @media only screen and (max-width: 991px) {
      gap: 20px;
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .date-filter {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 188px;
      width: 100%;
      position: relative;
      height: 40px;

      .data-icon {
        position: absolute;
        right: 30px;
      }

      input {
        border: none;
        outline: none;
        color: #1A1A1A;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        max-width: 128px;
        width: 100%;
        position: relative;
        z-index: 9;
        background: transparent;
      }

    }

    .create-new {

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
      }

    }
  }

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
    }
    
    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &:last-of-type {
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
          cursor: auto;
        }
      }
    }
  }

`;

export const Modal = styled.div`
`;
export const ModalForm = styled.div`
`;