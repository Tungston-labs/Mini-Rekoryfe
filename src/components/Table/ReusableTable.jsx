import React from 'react';
import {
  TableWrapper,
  StyledTable,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from './ReusableTable.styles';
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

/**
 * Reusable Table with Data Columns + Separate Edit/Delete Columns
 *
 * @param {Array} columns - Array of objects { label: "Column Name", key: "fieldKey" }
 * @param {Array} data - Array of row objects
 * @param {Function} onEdit - callback(row) for edit icon
 * @param {Function} onDelete - callback(row) for delete icon
 */
const ReusableTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <tr>
            {columns.map((col, i) => (
              <TableHeader key={i}>{col.label}</TableHeader>
            ))}
            {onEdit && <TableHeader>Edit</TableHeader>}
            {onDelete && <TableHeader>Delete</TableHeader>}
          </tr>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>{row[col.key]}</TableCell>
              ))}
              {onEdit && (
                <TableCell>
                  <IconButton color='#636363' onClick={() => onEdit(row)}>
                    <LuPencilLine />
                  </IconButton>
                </TableCell>
              )}
              {onDelete && (
                <TableCell>
                  <IconButton color="#C61217" onClick={() => onDelete(row)}>
                    <RiDeleteBinLine />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default ReusableTable;
