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
import Pagination from '../Pagination/Pagination';
const ReusableTable = ({
  columns,
  data,
  onEdit,
  onDelete,
  onRowClick,
  pagination
}) => {
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
            <TableRow
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
            >
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {col.render ? col.render(row) : row[col.key]}
                </TableCell>
              ))}

              {onEdit && (
                <TableCell>
                  <IconButton
                    color="#636363"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(row);
                    }}
                  >
                    <LuPencilLine />
                  </IconButton>
                </TableCell>
              )}

              {onDelete && (
                <TableCell>
                  <IconButton
                    color="#C61217"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(row);
                    }}
                  >
                    <RiDeleteBinLine />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={pagination.onPageChange}
        />
      )}

    </TableWrapper>
  );
};

export default ReusableTable;
