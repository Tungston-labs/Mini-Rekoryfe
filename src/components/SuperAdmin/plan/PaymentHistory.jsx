import React from "react";
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
  Button,
} from "./PaymentHistory.styles";
import { FiFilter, FiDownload, FiSend, FiCalendar } from "react-icons/fi";

const PaymentHistoryUI = ({
  year,
  setYear,
  rows,
  loading,
  payInvoice,
  sendInvoice,
  downloadInvoice,
  years,
}) => {
  return (
    <Wrapper>
      <Header>
        <Title>Payment History</Title>

        <YearFilter>
          <FiFilter />
          <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </YearFilter>
      </Header>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Month</Th>
              <Th>Paid Date</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr key={item.id}>
                <Td>{item.month}</Td>
                <Td>
                  {item.paidDate} {item.paidDate !== "-" && <FiCalendar />}
                </Td>
                <Td>{item.amount}</Td>
             <Td>
  <Status
    type={item.status}
    style={{ cursor: item.status === "unpaid" ? "pointer" : "default" }}
    onClick={() => item.status === "unpaid" && payInvoice(item.id)}
  >
    {item.status === "paid" ? "Paid" : "UnPaid"}
  </Status>
</Td>
                <Td>
                  <IconGroup>
                    <FiDownload
                      style={{ cursor: "pointer" }}
                      onClick={() => downloadInvoice(item.id)}
                    />
                    <FiSend
                      style={{ cursor: "pointer" }}
                      onClick={() => sendInvoice(item.id)}
                    />
                  </IconGroup>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
};

export default PaymentHistoryUI;
