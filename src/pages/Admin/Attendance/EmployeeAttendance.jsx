import React, { useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import ReusableTable from "../../../components/Table/ReusableTable";
import TopActions from "../../../components/Admin/TopAction/TopAction";
import { SlLocationPin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";


const columns = [
  {
    label: "Employee",
    key: "employee",
    render: (row) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={row.avatar || "https://via.placeholder.com/40"}
          alt={row.employee_name}
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <div style={{ fontSize: "14px", color: "#000000", fontWeight: 400 }}>{row.employee_name}</div>
          <div style={{ fontSize: "12px", color: "#3d3d3d" }}>{row.id}</div>
        </div>
      </div>
    )
  },
  { 
    key: "check_in", 
    label: "Check IN",
    render: (row) => (
      <span style={{ color: row.check_in === "00.00AM" ? "#C61217" : "black" }}>
        {row.check_in}
      </span>
    )
  },
  { 
    key: "check_out", 
    label: "Check Out",
    render: (row) => (
      <span style={{ color: row.check_out === "00.00AM" ? "#C61217" : "black" }}>
        {row.check_out}
      </span>
    )
  },
  { key: "hours", label: "Total Hours" },
  { key: "time", label: "Over Time" },
  { 
    key: "location", 
    label: "Location",
    render: (row) => (
      <div style={{ display: "flex", alignItems: "center", gap: "5px", color: row.location === "--------" ? "#C61217" : "black" }}>
        <SlLocationPin  style={{color:"#C61217"}}/> 
        <span>{row.location}</span>
      </div>
    )
  },
];


  const dummyData = [
    {avatar: "https://randomuser.me/api/portraits/men/1.jpg", id: "TUNDEVTIV", employee_name: "Acme Corp", check_in: "09.00AM", check_out: "09.00AM",hours:"8.00hr",time:"0.00hr",location: "Aluva" },
    {avatar: "https://randomuser.me/api/portraits/men/1.jpg",id: "TUNDEVTIV", employee_name: "Globex Inc", check_in: "00.00AM", check_out: "00.00AM",hours:"8.00hr",time:"0.00hr",location: "--------" },
    {avatar: "https://randomuser.me/api/portraits/men/1.jpg", id: "TUNDEVTIV", employee_name: "Initech", check_in: "09.00:AM", check_out: "09.00AM",hours:"8.00hr",time:"0.00hr",location: "Kochi" },
  ];
function EmployeeAttendance() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const totalPages = Math.ceil(dummyData.length / pageSize);
 const handleRowClick = (row) =>     navigate(`/admin/employee/location/${row.id}`);
  const paginatedData = dummyData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <Topbar />                        
      <PageHeader
        title="Employees Attendance "
        subtitle="Track, manage, and monitor employee attendance in real time with complete accuracy."
      />
    <TopActions/>
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
    </div>
  );
}

export default EmployeeAttendance;
