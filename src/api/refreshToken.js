import axios from "axios";

const BASE_URL = "http://192.168.0.163:8000"; 

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) return null;

  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/refresh/`,
      { refresh: refreshToken }
    );

    const newAccess = response.data.access;

    localStorage.setItem("accessToken", newAccess);

    return newAccess;
  } catch (error) {
    localStorage.clear();
    window.location.href = "/login";
    return null;
  }
};

export default refreshAccessToken;
