import { Routes, Route } from "react-router-dom";
import SuperAdminLayout from "../layout/SuperAdminLayout/SuperAdminLayout";
import SuperDashboard from "../pages/Superadmin/SuperAdminDashboard/SuperAdminDashboard";
import CompanyList from "../pages/Superadmin/CompanyList/CompanyList";
import CompanyInfo from "../pages/Superadmin/CompanyInfo/CompanyInfo";
import Login from "../pages/LoginPage/LoginContainer";
import ProtectedRoute from "./ProtectedRoute";
import CompanyAddContainer from "../pages/Superadmin/CompanyAdd/CompanyAddContainer";
import Department from "../pages/Admin/Department/Department";
import CompanyEditContainer from "../pages/Superadmin/CompanyEdit/CompanyEditContainer";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

// import AdminDashboard from "../pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute role="superadmin">
            <SuperAdminLayout />
          </ProtectedRoute>
        }
      >

        <Route path="/superadmin/dashboard" element={<SuperDashboard />} />
        <Route path="/superadmin/companies" element={<CompanyList />} />
        <Route path="/superadmin/companies/add" element={<CompanyAddContainer />} />
        <Route
          path="/superadmin/companies/edit/:id"
          element={<CompanyEditContainer />}
        />
        <Route path="/superadmin/companies/info/:id" element={<CompanyInfo />} />
        <Route path="/superadmin/department" element={<Department />} />
      </Route>

      <Route
    element={
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    }
  >
    <Route path="/admin/dashboard" element={<Department />} />
    <Route path="/admin/department" element={<Department />} />
  </Route>
    </Routes>
  );
};

export default AppRoutes;
