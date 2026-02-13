
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #FAFAFC;
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ddd;
font-weight: 500;
font-size: 14px;
line-height: 22px;
letter-spacing: 0%;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
 
  &:hover {
    background-color: #fafafa;
  }
`;

export const TableCell = styled.td`
  padding: 12px 12px; 
  border-bottom: 1px solid #eee;
font-weight: 300;
font-style: Light;
font-size: 13px;
line-height: 22px;
letter-spacing: 0%;
/* text-align: center; */
`;

export const ActionButton = styled.button`
  margin-right: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;
export const IconButton = styled.span`
  cursor: pointer;
  margin-right: 8px;
  font-size: 18px;
  color: ${(props) => props.color || "#000"};

  &:hover {
    opacity: 0.7;
  }
`;