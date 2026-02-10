import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #ffffff;
  padding: 30px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 520px;
  
`;

export const Label = styled.label`
  font-size: 13px;
  color: #414141;
  font-weight: 500;
font-weight: 400;
line-height: 160%;
letter-spacing: 0%;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #c1121f;
  }
`;

export const Select = styled.select`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: white;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const SaveButton = styled.button`
  background: #c1121f;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background: white;
  border: 1px solid #374151;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
`;
