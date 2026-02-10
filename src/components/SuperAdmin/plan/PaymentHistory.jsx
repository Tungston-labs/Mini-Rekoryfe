import React, { useState } from "react";
import {
  Wrapper,
  Header,
  Title,
  YearFilter,
  Table,
  Th,
  Td,
  Status,
  IconGroup,
} from "./PaymentHistory.styles";
import { FiFilter, FiDownload, FiSend, FiCalendar } from "react-icons/fi";

const PaymentHistory = () => {
const currentYear = new Date().getFullYear();
const [year, setYear] = useState(currentYear);
  const [rows, setRows] = useState([
    {
      month: "January",
      paidDate: "2026-02-05",
      amount: "0 INR",
      status: "paid",
    },
    {
      month: "February",
      paidDate: "-",
      amount: "0 INR",
      status: "unpaid",
    },
  ]);

  const toggleStatus = (index) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index
          ? {
              ...row,
              status: row.status === "paid" ? "unpaid" : "paid",
              paidDate:
                row.status === "paid"
                  ? "-"
                  : new Date().toISOString().split("T")[0],
            }
          : row
      )
    );
  };
const years = Array.from(
  { length: 5 },           
  (_, i) => currentYear - i
);
  return (
    <Wrapper>
      <Header>
        <Title>Payment History</Title>

      <YearFilter>
  <FiFilter />
  <select value={year} onChange={(e) => setYear(e.target.value)}>
    {years.map((y) => (
      <option key={y} value={y}>
        {y}
      </option>
    ))}
  </select>
</YearFilter>

      </Header>

      <Table>
        <thead>
          <tr>
            <Th>Month</Th>
            <Th>Paid Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Import</Th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <Td>{item.month}</Td>

              <Td>
                {item.paidDate}
                {item.paidDate !== "-" && <FiCalendar />}
              </Td>

              <Td>{item.amount}</Td>

              <Td>
                <Status
                  type={item.status}
                  onClick={() => toggleStatus(index)}
                >
                  {item.status === "paid" ? "Paid" : "UnPaid"}
                </Status>
              </Td>

              <Td>
                <IconGroup>
                  <FiDownload />
                  <FiSend />
                </IconGroup>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default PaymentHistory;
