import styled from "styled-components";
import Bg from './../../../assets/images/div.png';


export const CustomerDashboardContent = styled.div`
  width: 100%;
  max-width: 1026px;
  overflow: scroll;


  .dashboard_content {
    display: flex;
    gap: 16px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

`;