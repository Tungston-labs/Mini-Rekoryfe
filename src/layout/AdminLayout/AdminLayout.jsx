import React from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Main,
  Content,
  RightSection,
} from "./AdminLayout.styles";
import Sidebar from "../../components/Sidebar/Sidebar";


const AdminLayout = () => {
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

export default AdminLayout;
