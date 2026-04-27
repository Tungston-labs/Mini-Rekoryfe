import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // or your spinner component

  return (
    <>
      <Toaster position="top-right" />
      <AppRoutes />
    </>
  );
};

export default App;