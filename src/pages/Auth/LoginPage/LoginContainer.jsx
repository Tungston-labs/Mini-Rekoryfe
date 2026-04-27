import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import LoginPage from "./LoginPage";

const LoginContainer = () => {
  const { user, login, loading: authLoading } = useContext(AuthContext); // ✅ renamed
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false); // ✅ renamed

  // 🔹 Redirect automatically if already logged in
  useEffect(() => {
    if (!authLoading && user) { // ✅ wait for auth to resolve
      if (user.role === "superadmin") navigate("/superadmin/dashboard");
      else if (user.role === "company") navigate("/admin/dashboard");
    }
  }, [user, authLoading, navigate]); // ✅ added authLoading

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const validate = () => {
    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    setApiError("");
    if (!validate()) return;

    try {
      setLoginLoading(true); // ✅ renamed
      const loggedInUser = await login(email, password);

      if (loggedInUser.role === "superadmin") navigate("/superadmin/dashboard");
      else if (loggedInUser.role === "company") navigate("/admin/dashboard");
      else setApiError("You are not authorized to access this system.");
    } catch (error) {
      console.log(error);
      setApiError(error.response?.data?.detail || "Invalid email or password");
    } finally {
      setLoginLoading(false); // ✅ renamed
    }
  };

  const handleForgotPassword = () => navigate("/forget");

  return (
    <LoginPage
      showPassword={showPassword}
      onTogglePassword={handleTogglePassword}
      onLogin={handleLogin}
      email={email}
      password={password}
      errors={errors}
      apiError={apiError}
      loading={loginLoading} // ✅ renamed
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
      onForgotPassword={handleForgotPassword}
    />
  );
};

export default LoginContainer;