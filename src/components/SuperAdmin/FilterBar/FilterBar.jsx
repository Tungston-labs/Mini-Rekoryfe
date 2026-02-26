import React from "react";
import {  FiSearch } from "react-icons/fi";
import { SearchBox, SearchIcon, SearchInput, Wrapper } from "./FilterBar.styles";

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

