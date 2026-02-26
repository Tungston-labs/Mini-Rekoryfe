import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  Container,
  Main,
  Content,
  RightSection,
} from "./SuperAdminLayout.styles";
import Sidebar from "../../components/Sidebar/Sidebar";

const SuperAdminLayout = () => {
  const { user } = useContext(AuthContext); 
  const role = user?.role || "superadmin";   

  return (
    <Container>
      <Main>
        <Sidebar role={role} /> 
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
