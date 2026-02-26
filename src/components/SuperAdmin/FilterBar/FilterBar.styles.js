
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  width: auto;
  max-width: 500px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f5f6f8;
  border-radius: 8px;
  padding: 8px 12px;
  width: 300px;
`;

export const SearchIcon = styled.div`
  color: #999;
  font-size: 16px;
  margin-right: 8px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;
