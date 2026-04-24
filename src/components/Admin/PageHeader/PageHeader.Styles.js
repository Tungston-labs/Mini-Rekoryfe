import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #f3f4f6;
  padding: 16px 20px;

  display: flex;
  align-items: center;
  gap: 12px;

  flex-wrap: wrap; /* ✅ allows stacking on small screens */

  @media (min-width: 768px) {
    padding: 20px 40px;
    flex-wrap: nowrap;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const GridContainer = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: 1fr; /* ✅ mobile: 1 column */
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* tablet */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* desktop */
    gap: 40px; /* reduced from 60 */
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap; /* ✅ prevents overflow */
`;

export const Label = styled.span`
  min-width: 90px;
  color: rgb(15, 15, 15);
  font-weight: 400;
  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 14px;
    min-width: 110px;
  }
`;

export const Value = styled.span`
  color: #111827;
  font-size: 13px;
  word-break: break-word;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const NameValue = styled.span`
  font-weight: 600;
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IdValue = styled.span`
  color: rgb(15, 15, 15);
  font-weight: 400;
  font-size: 13px;
`;