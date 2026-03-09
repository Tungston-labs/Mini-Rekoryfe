import api from "../api/axios";

// Forgot Password
export const forgotPassword = async (email) => {
  const response = await api.post("/api/auth/forgot-password/", {
    email,
  });
  return response.data;
};

// Verify OTP
export const verifyOtp = async (data) => {
  const response = await api.post("/api/auth/verify-otp/", data);
  return response.data;
};

// Reset Password
export const resetPassword = async (data) => {
  const response = await api.post("/api/auth/reset-password/", data);
  return response.data;
};