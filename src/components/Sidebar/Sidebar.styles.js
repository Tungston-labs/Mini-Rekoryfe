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

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  
`;

export const LogoWrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Logo = styled.img`
  width: 60%;
`;

export const Menu = styled.div`
  padding: 20px;
  margin-top: 25px;

`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 14px;
  cursor: pointer;
  /* border-radius: 8px; */
  font-size: 16px;
  color: white;
  text-decoration: none;
   margin-top: 10px;
  color:rgb(226, 226, 226);

 &.active {
  color: #fff;
  font-weight: 500;
  box-shadow: inset 0 -0.8px 0 rgba(255, 255, 255, 0.4);
}

  &:hover {
    color: #fff;
      font-weight: 500;
   box-shadow: inset 0 -0.8px 0 rgba(255, 255, 255, 0.4);
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


export const DropdownItem = styled(NavLink).attrs({
  end: true,
})`
  font-size: 14px;
  padding: 6px 0;
  cursor: pointer;
  color: #fff;
  position: relative;
  text-decoration: none;
  color:rgb(226, 226, 226);
  font-weight:200;

  &.active {
    font-weight: 500;
    color:#fff;
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
    margin-top: auto; 
`;
