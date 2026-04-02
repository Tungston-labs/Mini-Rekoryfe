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
import { FaChevronLeft } from "react-icons/fa6";
const Topbar = ({ title, showBack = false, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout ,user} = useContext(AuthContext);
  const navigate = useNavigate();

  const role = user?.role;
const avatarLetter = role === "company" ? "C" : "S";
const userName = role === "company" ? "Company" : "Super Admin";
const userRole = "Admin";

  const handleLogoutConfirm = () => {
    logout(); 
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <>
      <TopbarContainer>
        <LeftSection>
          {showBack && (
            <BackButton onClick={onBack}>
              <FaChevronLeft size={20} /> 
            </BackButton>
          )}
          {title && <LeftTitle>{title}</LeftTitle>}
        </LeftSection>

        <ProfileSection>
       <Avatar>{avatarLetter}</Avatar>
<UserInfo>
  <UserName>{userName}</UserName>
  <UserRole>{userRole}</UserRole>
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
