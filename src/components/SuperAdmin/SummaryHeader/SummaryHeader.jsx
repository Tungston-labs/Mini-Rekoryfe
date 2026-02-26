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

const SummaryHeader = ({
  cards = [],
  onSearch,
  onMonthChange,
}) => {

  const navigate = useNavigate();
  const [selectedRange, setSelectedRange] = useState("7");
  const handleRangeChange = (e) => {
    const value = e.target.value;
    setSelectedRange(value);
    onMonthChange?.(value);
  };
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
        <Chip>
          <CiCalendar />
          <select
            value={selectedRange}
            onChange={handleRangeChange}
            style={{
              border: "none",
              background: "transparent",
              outline: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >    <option value="5">Last 5 Days</option>
            <option value="10">Last 10 Days</option>
            <option value="15">Last 15 Days</option>
          </select>
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
