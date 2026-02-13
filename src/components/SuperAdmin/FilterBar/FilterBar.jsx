import React from "react";
import styled from "styled-components";
import {  FiSearch } from "react-icons/fi";

const EmployeeSearch = ({ searchValue, onSearchChange }) => {
  return (
    <Wrapper>
      <SearchBox>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
       <SearchInput
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search companies..."
        />
      </SearchBox>
    </Wrapper>
  );
};

export default EmployeeSearch;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 10px;
  width: auto;
  max-width: 500px;
`;



const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f5f6f8;
  border-radius: 8px;
  padding: 8px 12px;

  /* Limit width */
  width: 300px;
`;

const SearchIcon = styled.div`
  color: #999;
  font-size: 16px;
  margin-right: 8px;
`;

const SearchInput = styled.input`
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
