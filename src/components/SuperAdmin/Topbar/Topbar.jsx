import React, { useState, useContext } from "react";
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
import LogoutModal from "../../../pages/LogoutModal/LogoutModal";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Topbar = ({ title, showBack = false, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    logout(); // clear auth tokens / context
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <>
      <TopbarContainer>
        <LeftSection>
          {showBack && (
            <BackButton onClick={onBack}>
              <IoArrowBack size={20} /> Back
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

          <LogoutButton onClick={() => setIsModalOpen(true)}>Logout</LogoutButton>
        </ProfileSection>
      </TopbarContainer>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default Topbar;
