import React, { useState, useMemo } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import ReusableTable from "../../../components/Table/ReusableTable";
import TopActions from "../../../components/Admin/TopAction/TopAction";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../../../hooks/Admin/employee/useEmployees";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";
import { useDepartments } from "../../../hooks/Admin/department/useDepartments";

const columns = [
  {
    label: "Employee",
    key: "employee",
    render: (row) => {
      const firstLetter = row?.name ? row.name.charAt(0).toUpperCase() : "?";

      return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {row.profile_pic ? (
            <img
              src={row.profile_pic}
              alt={row.name}
              style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
          ) : (
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#C61217",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                color: "#ffffff",
                fontSize: "16px",
              }}
            >
              {firstLetter}
            </div>
          )}

          <div>
            <div style={{ fontSize: "14px", color: "#000", fontWeight: 500 }}>
              {row.name}
            </div>
            <div style={{ fontSize: "12px", color: "#666" }}>EMP-{row.id}</div>
          </div>
        </div>
      );
    },
  },
  { key: "job_title", label: "Job Title" },
  { key: "department_name", label: "Department" },
  { key: "email", label: "Email Id" },
  { key: "phone", label: "Phone Number" },
{
  key: "status",
  label: "Block ",
  render: (row) => (
    <span
      style={{
        color: row.status ? "#16a34a" : "#C61217",
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
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [search, setSearch] = useState("");

  const [role, setRole] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const params = {
    page,
    page_size: pageSize,
    search,
    department: selectedDepartment?.value || "",
    role,
  };

  if (selectedStatus !== null) {
    params.is_active = selectedStatus.value;
  }

  const { data, isLoading, isError } = useEmployees(params);

  const { data: departments = [] } = useDepartments();


  const employees = data?.results || [];
  const totalPages = data?.total_pages || 1;    // total pages from API
  const currentPage = data?.current_page || 1;

  const handleAddEmployee = () => navigate("/admin/employee/add");
  const handleRowClick = (row) => navigate(`/admin/employee/edit/${row.id}`);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useMemo(
    () =>
      debounce((value) => {
        setSearch(value);
        setPage(1);
      }, 500),
    []
  );

  return (
    <div>
      <Topbar />

      <PageHeader
        title="Employees"
        subtitle="Quickly access employee profiles, manage records, and track statuses."
        rightContent={
          <button className="primary-btn" onClick={handleAddEmployee}>
            + Add Employee
          </button>
        }
      />
      <TopActions
        showDate={false}
        showSearch={true}
        showFilter={true}
        showDepartment={true}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={(dept) => {
          setSelectedDepartment(dept);
          setPage(1);
        }}
        selectedStatus={selectedStatus}
        onStatusChange={(status) => {
          setSelectedStatus(status);
          setPage(1);
        }}
        searchPlaceholder="Search employees"
        onSearchChange={(e) => handleSearch(e.target.value)}

      />
      {isLoading ? (
        <div style={{ padding: "20px" }}>
          <PageSkeleton />
        </div>
      ) : isError ? (
        <div style={{ padding: "20px", color: "red" }}>
          Failed to load employees.
        </div>
      ) : (
        <ReusableTable
          columns={columns}
          data={employees}
          onRowClick={handleRowClick}
          pagination={{

            currentPage,
            totalPages,
            onPageChange: setPage,
          }}
        />
      )}
    </div>
  );
}

export default EmployeeList;