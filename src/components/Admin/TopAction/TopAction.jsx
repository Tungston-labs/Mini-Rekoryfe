import React from "react";
import {
  Container,
  RightSection,
  ActionButton,
  SearchBox,
  SearchInput,
  HiddenDateInput,
  RedSelectWrapper,
} from "./TopAction.styles";
import { FiCalendar, FiFilter, FiSearch } from "react-icons/fi";
import { AsyncPaginate } from "react-select-async-paginate";
import api from "../../../api/axios";

const formatDisplayDate = (date) => {
  if (!date) return "Select Date";
  const [year, month, day] = date.split("-");
  const localDate = new Date(year, month - 1, day);
  return localDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Lazy load departments from backend
const loadDepartments = async (search, loadedOptions, { page }) => {
  try {
    const res = await api.get("/api/departments/", {
      params: {
        page: page || 1,
        page_size: 10,
        search: search || "",
      },
    });

    const options = res.data.results.map((dept) => ({
      value: dept.id,
      label: dept.name,
    }));

    const hasMore = res.data.current_page < res.data.total_pages;

    return {
      options,
      hasMore,
      additional: {
        page: page ? page + 1 : 2,
      },
    };
  } catch (err) {
    console.error("Failed to load departments:", err);
    return { options: [], hasMore: false, additional: { page: 1 } };
  }
};

const TopActions = ({
  showDate = true,
  showFilter = true,
  showSearch = true,
  showDepartment = false,
  selectedDate,
  onDateChange,
  searchPlaceholder = "Search employees",
  onSearchChange = () => { },
  selectedDepartment,
  onDepartmentChange = () => { },
  selectedStatus,
  onStatusChange = () => { },
}) => {
  const handleDateClick = () => {
    document.getElementById("attendance-date-picker").showPicker();
  };

  return (
    <Container>
      <RightSection>

        {showDate && (
          <>
            <ActionButton onClick={handleDateClick}>
              <FiCalendar size={16} />
              {formatDisplayDate(selectedDate)}
            </ActionButton>

            <HiddenDateInput
              id="attendance-date-picker"
              type="date"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
            />
          </>
        )}

        {showFilter && (
                    <RedSelectWrapper>
          <AsyncPaginate
            value={selectedStatus || null}
            loadOptions={async () => ({
              options: [
                { value: true, label: "Active" },
                { value: false, label: "Inactive" },
              ],
              hasMore: false,
              additional: { page: 1 },
            })}
            onChange={onStatusChange}
            placeholder="Select Status"
            isClearable
            classNamePrefix="react-select"
          />
          </RedSelectWrapper>
        )}



        {showDepartment && (
          <RedSelectWrapper>
            <AsyncPaginate
              value={
                selectedDepartment
                  ? { value: selectedDepartment.value, label: selectedDepartment.label }
                  : null
              }
              loadOptions={loadDepartments}
              onChange={onDepartmentChange}
              additional={{ page: 1 }}
              placeholder="Select Department"
              debounceTimeout={300}
              isClearable
              classNamePrefix="react-select"
            />
          </RedSelectWrapper>
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