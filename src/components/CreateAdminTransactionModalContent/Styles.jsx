import styled from "styled-components";

export const ModalContent = styled ('div')`
  .create-transactions-modal-fields{
    display: flex;
    row-gap: 30px;

    & > div {
      display: flex;
      flex-direction: column;
      background: #FFF;
      width: 100%;
      &:not(:first-child) {
        label,
        input {
          border-left: none;
        }
      }

      label {
        border: 1px solid rgba(113, 113, 113, 0.20);
        text-align: left;
        padding: 10px;
        border-bottom: none;
        color: #353535;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;


      }

      input {
        width: 100%;
        border: 1px solid rgba(113, 113, 113, 0.20);
        padding: 10px;
        background: #E8E8E8;
        color: #353535;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;
      }
    }

    .custom-select {
      position: relative;
      width: 100%;
    }

    .selected-option {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      height: 40px;
      background: #E8E8E8;
      border-left: none;
      justify-content: center;

      img {
        margin-right: 10px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
      }

      .arr {
        width: 15px;
        height: 10px;
        margin: 0;
      }
    }


    .options {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border: 1px solid rgba(113, 113, 113, 0.20);
      border-top: none;
      border-radius: 0 0 5px 5px;
      overflow: hidden;
      z-index: 1;

      &.show {
        display: block;
        background: #FFF;
      }

      & div {
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: #E8E8E8;
        }
      }

      img {
        height: 25px;
      }
    }
  }
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
    margin: 30px auto 0;

    &:hover {
      background: #260FA0;
    }
`;