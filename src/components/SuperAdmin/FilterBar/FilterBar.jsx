import React from "react";
import styled from "styled-components";
import { FiFilter, FiSearch } from "react-icons/fi";

const EmployeeSearch = () => {
  return (
    <Wrapper>
      <FilterButton>
        <FiFilter />
        <span>Filter</span>
      </FilterButton>

      <SearchBox>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search employees "
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

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #f5f6f8;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
    color: #999;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: #eaecef;
  }
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
