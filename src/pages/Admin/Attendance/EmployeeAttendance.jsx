import React from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import ReusableTable from "../../../components/Table/ReusableTable";
import TopActions from "../../../components/Admin/TopAction/TopAction";
import { SlLocationPin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import useEmployeeAttendance from "./EmployeeAttendanceContainer";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";

const columns = [
  {
    label: "Employee",
    key: "employee",
    render: (row) => (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={row.avatar}
          alt={row.employee_name}
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <div style={{ fontWeight: 500 }}>
            {row.employee_name}
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>
            ID: {row.employee_id}
          </div>
        </div>
      </div>
    ),
  },
  { key: "check_in", label: "Check IN" },
  { key: "check_out", label: "Check Out" },
  { key: "hours", label: "Total Hours" },
  {
    key: "location",
    label: "Location",
    render: (row) => (
      <div style={{ display: "flex", gap: 5 }}>
        <SlLocationPin style={{ color: "#C61217" }} />
        {row.location}
      </div>
    ),
  },
];

function EmployeeAttendancePage() {
  const navigate = useNavigate();

  const {
    employees,
    totalPages,
    isLoading,
    isFetching,
    page,
    setPage,
    search,
    setSearch,
    department,
    setDepartment,
    date,
    setDate,
  } = useEmployeeAttendance();

  const handleRowClick = (row) =>
    navigate(`/admin/employee/location/${row.employee_id}?date=${date}`);

  if (isLoading) {
    return (
      <div>
        <PageSkeleton />
      </div>
    );
  }
  return (
    <div>
      <Topbar />

      <PageHeader
        title="Employees Attendance"
        subtitle="Track, manage, and monitor employee attendance in real time with complete accuracy."
      />

      <TopActions
        selectedDate={date}
        showFilter={false}
        onDateChange={setDate}
        selectedDepartment={department}
        onDepartmentChange={setDepartment}
        onSearchChange={(e) => setSearch(e.target.value)}
      />

      {isLoading ? (
        <div style={{ padding: "20px" }}><PageSkeleton /></div>
      ) : (
        <ReusableTable
          columns={columns}
          data={employees}
          loading={isFetching}
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

export default EmployeeAttendancePage;