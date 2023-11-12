import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;


  .modal-content {
    background: white;
    padding: 30px 15px;
    border-radius: 10px;
    position: relative;
    max-width: 960px;
    text-align: center;

    .close-icon {
      position: absolute;
      top: -64px;
      right: 0;
      cursor: pointer;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
  }



  .save-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  body.modal-open {
    overflow: hidden;
  }


`;