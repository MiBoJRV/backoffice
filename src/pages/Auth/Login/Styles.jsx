import styled from "styled-components";


export const LoginSection = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  //height: 838px;
  position: relative;
  font-family: 'Roboto', sans-serif;
  //overflow: hidden;


  @media only screen and (max-width: 991px) {
    height: auto;
  }

  .content {
    max-width: 1440px;
    margin: 0px auto;
    padding: 60px;
    height: 100vh;
    
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      background: #ffffff;
      
    }

    .title {
      color: #1A181E;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0 0 45px;
    }

    .image {
      display: flex;
      justify-content: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      margin: 0;

      img {
        width: 100%;
        height: auto;
        max-width: 1047px;
      }
    }

 
  }

  @media only screen and (max-width: 1440px) {
    .content {
      .image {
        margin-right: 0;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .content {
      display: flex;
      flex-direction: column;
      padding: 96px 15px 58px 15px;

      .title {
        text-align: center;
        font-size: 20px;
        line-height: 24px;
        max-width: none;
      }

      .image {
        order: 3;
        margin: 0;

        img {
          max-width: 330px;
        }
      }


    }
  }

`;