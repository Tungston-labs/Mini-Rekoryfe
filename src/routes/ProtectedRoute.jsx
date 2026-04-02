import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null; 
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) {
    if (user.role === "superadmin") {
      return <Navigate to="/superadmin/dashboard" replace />;
    } else if (user.role === "company") {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/login" replace />; 
    }
  }

  return children;
};

export default ProtectedRoute;