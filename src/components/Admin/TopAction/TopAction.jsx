import React from "react";
import {
  Container,
  RightSection,
  ActionButton,
  SearchBox,
  SearchInput,
} from "./TopAction.styles";
import { FiCalendar, FiFilter, FiSearch } from "react-icons/fi";

const TopActions = ({
  showDate = true,
  showFilter = true,
  showSearch = true,
  searchPlaceholder = "Search employees or department",
  onSearchChange = () => {},
}) => {
  return (
    <Container>
      <RightSection>
        {showDate && (
          <ActionButton>
            <FiCalendar size={16} />
            Today
          </ActionButton>
        )}

        {showFilter && (
          <ActionButton>
            <FiFilter size={16} />
            Filter
          </ActionButton>
        )}

        {showSearch && (
          <SearchBox>
            <FiSearch size={16} />
            <SearchInput
              placeholder={searchPlaceholder}
              onChange={onSearchChange}
            />
          </SearchBox>
        )}
      </RightSection>
    </Container>
  );
};

export default TopActions;