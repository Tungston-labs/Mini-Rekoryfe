import React, { useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import ReusableTable from "../../../components/Table/ReusableTable";
import TopActions from "../../../components/Admin/TopAction/TopAction";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../../../hooks/Admin/employee/useEmployees";


const columns = [
  {
    label: "Employee",
    key: "employee",
    render: (row) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={row.profile_pic || "https://via.placeholder.com/40"}
          alt={row.name}
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <div style={{ fontSize: "14px", color: "#000", fontWeight: 500 }}>
            {row.name}
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            EMP-{row.id}
          </div>
        </div>
      </div>
    ),
  },
  { key: "job_title", label: "Job Title" },
  { key: "department_name", label: "Department" },
  { key: "email", label: "Email Id" },
  { key: "phone", label: "Phone Number" },
  {
    key: "status",
    label: "Status",
    render: (row) => (
      <span
        style={{
          color: row.status ? "#16a34a" : "#9ca3af", // green for active, gray for inactive
          fontWeight: 500,
        }}
      >
        {row.status ? "Active" : "Inactive"}
      </span>
    ),
  }
];

function EmployeeList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, isError, isFetching } = useEmployees({
    page,
    page_size: pageSize,
  });

  const employees = data?.results || [];
  const totalPages = Math.ceil((data?.count || 0) / pageSize);

  const paginatedData = employees;

  const handleAddEmployee = () => {
    navigate("/admin/employee/add");
  };
  const handleRowClick = (row) => {
    navigate(`/admin/employee/edit/${row.id}`)
  }

  return (
    <div>
      <Topbar />

      <PageHeader
        title="Employees"
        subtitle="It enables HR managers and administrators to quickly access employee profiles , manage records, 
           track statuses, and perform key actions from a single dashboard."
        rightContent={
          <button className="primary-btn" onClick={handleAddEmployee}>
            + Add Employee
          </button>
        }
      />

      <TopActions 
     showDate ={false}
      />

      {!isLoading && !isError && (
        <ReusableTable
          columns={columns}
          data={paginatedData}
          onRowClick={handleRowClick}
          pagination={{
            currentPage: page,
            totalPages,
            onPageChange: setPage,
          }}
        />
      )}
    </div>
  );
}

export default EmployeeList;