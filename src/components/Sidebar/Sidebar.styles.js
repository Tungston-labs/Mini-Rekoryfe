import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  background: #BA0D11;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopSection = styled.div``;

export const LogoWrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const Menu = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 15px;
  color: white;
  text-decoration: none;

  &.active {
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;


export const Dropdown = styled.div`
  margin-left: 22px;
  padding-left: 12px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


export const DropdownItem = styled(NavLink)`
  font-size: 14px;
  padding: 6px 0;
  cursor: pointer;
  color: #fff;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 50%;
    width: 10px;
    border-top: 1px dashed rgba(255, 255, 255, 0.4);
  }
`;

export const BottomImage = styled.img`
  width: 90%;
  padding: 20px;
`;
