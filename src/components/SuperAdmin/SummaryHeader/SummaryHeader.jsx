import React, { useRef, useState } from "react";
import {
  Wrapper,
  Left,
  Cards,
  Card,
  IconBox,
  CardInfo,
  Count,
  ActionBtn,
  Right,
  Chip,
  SearchBox,
} from "./SummaryHeader.styles";
import { FiFilter, FiSearch } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SummaryHeader = ({ cards = [], onSearch, onMonthChange }) => {
  const navigate = useNavigate();
  const monthInputRef = useRef(null);

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });

  const handleMonthClick = () => {
    monthInputRef.current?.showPicker();
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    onMonthChange?.(e.target.value);
  };

  const formattedMonth = new Date(selectedMonth + "-01").toLocaleString(
    "default",
    { month: "long", year: "numeric" }
  );

  return (
    <Wrapper>
      <Left>
        <Cards>
          {cards.map((item, index) => (
            <Card key={index}>
              <IconBox>{item.icon}</IconBox>

              <CardInfo>
                <span>{item.title}</span>
                <Count>{item.value}</Count>
              </CardInfo>

              {item.action && (
                <ActionBtn
                  onClick={() => navigate("/superadmin/companies/add")}
                >
                  {item.action.icon}
                </ActionBtn>
              )}
            </Card>
          ))}
        </Cards>
      </Left>

      <Right>
        {/* MONTH PICKER CHIP */}
        <Chip onClick={handleMonthClick} style={{ cursor: "pointer" }}>
          <CiCalendar />
          <span>{formattedMonth}</span>

          {/* hidden month input */}
          <input
            ref={monthInputRef}
            type="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            style={{ display: "none" }}
          />
        </Chip>
        <SearchBox>
          <FiSearch />
          <input
            placeholder="Search company name"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </SearchBox>
      </Right>
    </Wrapper>
  );
};

export default SummaryHeader;
