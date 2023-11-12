import styled from "styled-components";

export const CreateCustomerModalContent = styled ('div')`
  .modal-content-wrap {
    display: flex;
    flex-direction: column;
    gap: 30px;

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
      margin: 0 auto;

      &:hover {
        background: #260FA0;
      }

      &:active {
        background: #1D1060;
      }
    }


    .create-customer-modal-fields {
      display: flex;
      flex-wrap: wrap;
      gap: 30px 20px;

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
      }
    }
  }
`;