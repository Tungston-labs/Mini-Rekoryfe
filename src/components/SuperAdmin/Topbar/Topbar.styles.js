import styled from "styled-components";

export const TopbarContainer = styled.header`
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const LeftTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;

  @media (max-width: 768px) {
  font-size: 12px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #c1121f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
    font-size: 14px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const UserRole = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const LogoutButton = styled.button`
  margin-left: 24px;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: #c1121f;
  color: white;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-left: 12px;
    padding: 6px 10px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  color:rgb(255, 255, 255);
background-color: #C61217;
  &:hover {
    opacity: 0.7;
  }
`;