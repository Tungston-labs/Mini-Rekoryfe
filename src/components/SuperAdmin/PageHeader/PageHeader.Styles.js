import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #FAFAFC;
  border-bottom: 1px solid #0000001A;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Title = styled.h2`
  color: #111827;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-style: Medium;
font-size: 20px;
`;

export const SubTitle = styled.p`
  color: #6b7280;
  margin-top: 14px;
  font-family: "Ubuntu", sans-serif;
font-weight: 400;
font-size: 14px;


`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

