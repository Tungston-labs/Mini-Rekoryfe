import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top:20px ;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid rgb(241, 241, 241);
  background: #FAFAFC;
  font-size: 14px;
  color:rgb(115, 122, 134);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgb(241, 241, 241);
  background: #FAFAFC;
  min-width: 260px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: transparent;
   color:rgb(115, 122, 134);

  &::placeholder {
    color: #9ca3af;
  }
`;
