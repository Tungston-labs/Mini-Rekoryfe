import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #fff;
  padding: 24px;
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #111827;
font-weight: 400;
line-height: 160%;
letter-spacing: 0%;
vertical-align: middle;

`;

export const Input = styled.input`
  height: 42px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  color:rgb(97, 100, 105);

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;
