import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) return null;

  try {
    const res = await axios.post(`${BASE_URL}/api/auth/refresh/`, {
      refresh: refreshToken,
    });

    const { access, refresh } = res.data;

    localStorage.setItem("accessToken", access);

    // 🔥 handle rotation
    if (refresh) {
      localStorage.setItem("refreshToken", refresh);
    }

    return access;
  } catch (err) {
    console.log("Refresh failed");

    localStorage.clear();
    return null;
  }
};

export default refreshAccessToken;