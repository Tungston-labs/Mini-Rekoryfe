import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) return null;

  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/refresh/`,
      { refresh: refreshToken }
    );

    const { access, refresh } = response.data;

    localStorage.setItem("accessToken", access);
    if (refresh) {
      localStorage.setItem("refreshToken", refresh);
    }

    return access;
  } catch (error) {
    console.log("Refresh failed:", error.response?.data);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    window.location.href = "/login";

    return null;
  }
};

export default refreshAccessToken;