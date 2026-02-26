import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #f3f4f6;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const GridContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopText = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const BottomText = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
`;
