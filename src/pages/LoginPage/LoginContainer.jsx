import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoginPage from "./LoginPage";

const LoginContainer = () => {
  const { login,user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleLogin = async () => {
  setApiError("");

  if (!validate()) return;

  try {
    setLoading(true);

   const user = await login(email, password); 
    if (user.role === "superadmin") {
      navigate("/superadmin/dashboard");
    } else if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      setApiError("You are not authorized to access this system.");
    }

  } catch (error) {
    console.log(error)
    setApiError(
      error.response?.data?.detail ||
      "Invalid email or password"
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <LoginPage
      showPassword={showPassword}
      onTogglePassword={handleTogglePassword}
      onLogin={handleLogin}
      email={email}
      password={password}
      errors={errors}
      apiError={apiError}
      loading={loading}
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
    />
  );
};

export default LoginContainer;
