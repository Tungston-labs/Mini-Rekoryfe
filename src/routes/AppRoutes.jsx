import { Routes, Route } from "react-router-dom";
import SuperAdminLayout from "../layout/SuperAdminLayout/SuperAdminLayout";
// import AdminLayout from "../layout/AdminLayout";
import SuperDashboard from "../pages/Superadmin/SuperAdminDashboard/SuperAdminDashboard";
import CompanyList from "../pages/Superadmin/CompanyList/CompanyList";
import CompanyAddPage from "../pages/Superadmin/CompanyAdd/CompanyAddPage"
import CompanyEditPage from "../pages/Superadmin/CompanyEdit/CompanyEdit";
import CompanyInfo from "../pages/Superadmin/CompanyInfo/CompanyInfo";
// import AdminDashboard from "../pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<SuperAdminLayout />}>
        <Route path="/superadmin/dashboard" element={<SuperDashboard />} />
        <Route path="/superadmin/companies" element={<CompanyList />} />
        <Route path="/superadmin/companies/add" element={<CompanyAddPage />} />
        <Route path="/superadmin/companies/edit/:id" element={<CompanyEditPage />} />
             <Route path="/superadmin/companies/info" element={<CompanyInfo/>} />
      </Route>

      {/* <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
