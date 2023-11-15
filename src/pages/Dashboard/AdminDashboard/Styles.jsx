import styled from "styled-components";

export const AdminDashboardContent = styled.div`
  width: 100%;
  
  .dashboard_content {
    display: flex;
    gap: 16px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;