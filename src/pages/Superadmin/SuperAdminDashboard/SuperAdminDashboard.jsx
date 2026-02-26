import React from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import SummaryHeader from "../../../components/SuperAdmin/SummaryHeader/SummaryHeader";
import avatar from "../../../assets/images/rightimage.png";
import Pagination from "../../../components/Pagination/Pagination";
import {
  Wrapper,
  Table,
  Th,
  Td,
  Status,
  OfferWrapper,
  Toggle,
  Knob,
} from "./SuperAdminDashboard.styles";

function SuperAdminDashboardView({
  rows,
  cards,
  onSearch,
  payInvoice,
  onMonthChange,
  toggleCompanyStatus,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div>
      <Topbar title="Rekory Location Tracking Dashboard" />

      <PageHeader
        title="Super Admin, Welcome Back!"
        subtitle="Manage your account settings"
        rightContent={<img src={avatar} width={100} />}
      />

      <SummaryHeader
        cards={cards}
        onSearch={onSearch}
        onMonthChange={onMonthChange}
      />

      <Wrapper>
        <Table>
          <thead>
            <tr>
              <Th>Company Name</Th>
              <Th>Contact Details</Th>
              <Th>No.Of Employees</Th>
              <Th>Amount per Employee</Th>
              <Th>Total Payment Amount</Th>
              <Th>Due Date</Th>
              <Th>Status</Th>
              <Th>Offer State</Th>
            </tr>
          </thead>

          <tbody>
            {rows?.length === 0 ? (
              <tr>
                <Td colSpan="8" style={{ textAlign: "center" }}>
                  No Due Companies Found
                </Td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  <Td>{row.company_name}</Td>
                  <Td>{row.phone}</Td>
                  <Td>{row.employees}</Td>
                  <Td>{row.employeeamount}</Td>
                  <Td>{row.amount}</Td>
                  <Td>{row.due_date}</Td>

                  <Td>
                    <Status
                      type={row.invoice_status}
                      onClick={() => {
                        if (row.invoice_status !== "PAID") {
                          payInvoice(row.invoice_id);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {row.invoice_status}
                    </Status>
                  </Td>

                  <Td>
                    <OfferWrapper>
                      <span>OFF</span>
                      <Toggle
                        active={row.account_status === "active"}
                        onClick={() => {
                          const action =
                            row.account_status === "active"
                              ? "deactivate"
                              : "activate";

                          toggleCompanyStatus({
                            companyId: row.id,
                            action,
                          });
                        }}
                      >
                        <Knob active={row.account_status === "active"} />
                      </Toggle>
                      <span>ON</span>
                    </OfferWrapper>
                  </Td>

                </tr>
              ))
            )}
          </tbody>

        </Table>
      </Wrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default SuperAdminDashboardView;
