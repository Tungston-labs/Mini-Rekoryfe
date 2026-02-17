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
  const { user } = useContext(AuthContext); // get user object
  const role = user?.role || "superadmin";   // fallback to superadmin if undefined

  return (
    <Container>
      <Main>
        <Sidebar role={role} /> {/* Pass role here */}
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
