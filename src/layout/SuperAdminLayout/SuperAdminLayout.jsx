import React from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Main,
  Content,
  RightSection,
} from "./SuperAdminLayout.styles";
import Sidebar from "../../components/Sidebar/Sidebar";


const SuperAdminLayout = () => {
  return (
    <Container>
      <Main>
        <Sidebar />

        <RightSection>

          
          <Content>
            <Outlet />
          </Content>
        </RightSection>
      </Main>
    </Container>
  );
};

export default SuperAdminLayout;
