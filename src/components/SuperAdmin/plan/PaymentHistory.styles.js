import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #111827;
`;

export const YearFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  padding: 6px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  color: #6b7280;

  select {
    border: none;
    background: transparent;
    font-size: 13px;
    cursor: pointer;
    outline: none;
    color: inherit;
  }
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  font-size: 14px;
  padding: 10px;
  background-color: #fafafc;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 400;
`;

export const Td = styled.td`
  font-size: 14px;
  font-weight: 300;
  color: #111827;
  padding: 12px 10px;
  border-bottom: 1px solid #f3f4f6;

  svg {
    margin-left: 6px;
    color: #ef4444;
    vertical-align: middle;
  }
`;

export const Status = styled.span`
  min-width: 90px;     
  text-align: center;
  display: inline-block;

  padding: 6px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  user-select: none;

  background: ${({ type }) =>
    type === "paid" ? "#00A60B" : "#F2272D"};
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 12px;
  color: #374151;
  cursor: pointer;

  svg:hover {
    color: #2563eb;
  }
`;
