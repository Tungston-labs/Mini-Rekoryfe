import React from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import DashboardHeader from "../../../components/Admin/Dashboard/DashboardHeader/DashboardHeader";
import EmployeesOverview from "../../../components/Admin/Dashboard/EmployeesOverview/EmployeesOverview";
import SmartRouting from "../../../components/Admin/Dashboard/SmartRouting/SmartRouting";

function Dashboard() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 10% */}
      <div style={{ flex: 0.7 }}>
        <Topbar />
      </div>

      {/* 10% */}
      <div style={{ flex: 1 }}>
        <DashboardHeader />
      </div>

      {/* 20% */}
      <div style={{ flex: 2 }}>
        <EmployeesOverview />
      </div>

      {/* 60% */}
      <div style={{ flex: 6, overflow: "hidden" }}>
        <SmartRouting />
      </div>
    </div>
  );
}

export default Dashboard;