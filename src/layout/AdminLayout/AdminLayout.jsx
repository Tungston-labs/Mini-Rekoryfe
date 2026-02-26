import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Main,
  Content,
  RightSection,
} from "./AdminLayout.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AuthContext } from "../../context/AuthContext";

const AdminLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Main>
        <Sidebar role={user?.role} /> 
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
