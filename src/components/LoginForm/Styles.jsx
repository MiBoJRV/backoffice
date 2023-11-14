import styled from "styled-components";

export const FormWrap = styled.div`
  max-width: 430px;
  width: 100%;
  position: relative;
  
  @media only screen and (max-width: 600px) {
    max-width: 320px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    .error-message {
      position: absolute;
      bottom: 43px;
      color: #FF646B;
      //@media only screen and (max-width: 991px) {
      //  bottom: 58px;
      //}
  }
  
  .form-group {
    height: 40px;
    display: flex;
    position: relative;
    align-items: flex-end;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(88, 73, 114, 0.45);
  }

    label {
      color: rgba(64, 58, 75, 0.60);
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      position: absolute;
      top: 3px;
      left: 20px;
    }
  }
  
  input {
    max-width: 430px;
    width: 100%;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
    border-bottom: 1px solid #D7C8DB;
    margin: 0 20px 7px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
      
  }

  .btn {
    position: relative;
    color: #FAF9F9;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 7px;
    border: 2px solid #FFF;
    background: #FF646B;
    //width: 273px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    outline: none;
    margin: 15px auto 0;
    max-width: 273px;
    width: 100%;

    &:hover {
      background: #FF2731;
    }

    &:active {
      background: #D5141D;
    }

    //@media only screen and (max-width: 991px) {
    //  position: inherit;
    //  margin: 25px auto 10px;
    //  width: 100%;
    //}

  }

`;