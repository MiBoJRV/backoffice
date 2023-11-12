import styled from "styled-components";

export const CustomersAllContent = styled.div`
  
  .table-control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
    
    .search {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      display: flex;
      align-items: center;
      gap: 11px;
      max-width: 523px;
      width: 100%;
      
      .search-icon {
        margin-left: 18px;
      }
      
      input {
        border: none;
        outline: none;
        color: #1A1A1A;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 100%;
      }
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
        
        &:hover {
          background: #260FA0;
        }
        
        &:active {
          background: #1D1060;
        }
      }
      
    }
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }


  th {
    color: #353535;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    padding: 10px;

    &:last-of-type {
      text-align: right;
    }
  }

  tr {
    padding: 15px 0;

    td {
      padding: 10px;

      &:first-of-type {
        display: flex;
        align-items: center;
        gap: 17px;

      }
    }

  }

  td {
    color: #353535;
    //text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */

    &:last-of-type {
      text-align: right;
    }
  }

  tr {
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
  
  .edit {
    cursor: pointer;
  }

`;

export const Modal = styled.div`
`;
export const ModalForm = styled.div`
`;