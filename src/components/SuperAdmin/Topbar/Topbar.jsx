import React from "react";
import {
  TopbarContainer,
  LeftSection,
  BackButton,
  LeftTitle,
  ProfileSection,
  Avatar,
  UserInfo,
  UserName,
  UserRole,
  LogoutButton,
} from "./Topbar.styles";
import { IoArrowBack } from "react-icons/io5";

const Topbar = ({ title, showBack = false, onBack }) => {
  return (
    <TopbarContainer>
      <LeftSection>
        {showBack && (
          <BackButton onClick={onBack}>
            <IoArrowBack size={20} />Back
          </BackButton>
        )}
        {title && <LeftTitle>{title}</LeftTitle>}
      </LeftSection>

      <ProfileSection>
        <Avatar>S</Avatar>

        <UserInfo>
          <UserName>Super Admin</UserName>
          <UserRole>Admin</UserRole>
        </UserInfo>

        <LogoutButton>Logout</LogoutButton>
      </ProfileSection>
    </TopbarContainer>
  );
};

export default Topbar;
