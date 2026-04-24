import { Routes, Route } from "react-router-dom";
import SuperAdminLayout from "../layout/SuperAdminLayout/SuperAdminLayout";
import CompanyList from "../pages/Superadmin/CompanyList/CompanyList";
import CompanyInfo from "../pages/Superadmin/CompanyInfo/CompanyInfo";
import Login from "../pages/Auth/LoginPage/LoginContainer.jsx";
import ProtectedRoute from "./ProtectedRoute";
import CompanyAddContainer from "../pages/Superadmin/CompanyAdd/CompanyAddContainer";
import CompanyEditContainer from "../pages/Superadmin/CompanyEdit/CompanyEditContainer";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import EmployeeFormContainer from "../pages/Admin/EmployeeAdd/EmployeeFormContainer.jsx";
import EmployeeAttendance from "../pages/Admin/Attendance/EmployeeAttendance.jsx";
import ForgotPasswordForm from "../pages/Auth/ForgotPasswordForm.jsx";
import ResetPasswordForm from "../pages/Auth/ResetPasswordForm.jsx"
import OtpForm from "../pages/Auth/ OtpForm.jsx";
import SuperAdminDashboardContainer from "../pages/Superadmin/SuperAdminDashboard/SuperAdminDashboardContainer.jsx";
import Dashboard from "../pages/Admin/Dashboard/Dashboard.jsx";
import EmployeeList from "../pages/Admin/EmployeeList/EmployeeList.jsx";
import DepartmentContainer from "../pages/Admin/Department/DepartmentContainer.jsx";
import EmployeeEditContainer from "../pages/Admin/EmployeeEdit/EmployeeEditContainer.jsx";
import LocationDetailsContainer from "../pages/Admin/Location/LocationDetailsContainer.jsx";
import RootRedirect from "./RootRedirect.jsx";
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<RootRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgotPasswordForm />} />
      <Route path="/reset-password" element={<ResetPasswordForm />} />
      <Route path="/verify-otp" element={<OtpForm />} />
      <Route
        element={
          <ProtectedRoute role="superadmin">
            <SuperAdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/superadmin/dashboard" element={<SuperAdminDashboardContainer />} />
        <Route path="/superadmin/companies" element={<CompanyList />} />
        <Route path="/superadmin/companies/add" element={<CompanyAddContainer />} />
        <Route path="/superadmin/companies/edit/:id" element={<CompanyEditContainer />} />
        <Route path="/superadmin/companies/info/:id" element={<CompanyInfo />} />
      </Route>

      <Route
        element={
          <ProtectedRoute role="company">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/department" element={<DepartmentContainer />} />
        <Route path="/admin/employees" element={<EmployeeList />} />
        <Route path="/admin/employee/add" element={<EmployeeFormContainer />} />
        <Route path="/admin/employee/edit/:id" element={<EmployeeEditContainer />} />
        <Route path="/admin/employees/attendance" element={<EmployeeAttendance />} />
        <Route path="/admin/employee/location/:id" element={<LocationDetailsContainer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
