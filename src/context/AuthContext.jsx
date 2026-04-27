import { createContext, useEffect, useState } from "react";
import api from "../api/axios";
import refreshAccessToken from "../api/refreshToken";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 LOGIN
  const login = async (email, password) => {
    const res = await api.post("/api/auth/login/", { email, password });

    const { access, refresh, user } = res.data;

    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
    return user;
  };

  // 🔹 LOGOUT
  const logout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = "/login"; // you can replace with navigate()
  };

  // 🔥 INIT AUTH (ON APP LOAD)
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("accessToken");
      const storedUser = localStorage.getItem("user");

      if (!token || !storedUser) {
        setLoading(false);
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();

        // 🔥 Refresh only if expired
        if (isExpired) {
          console.log("Access expired → refreshing...");

          const newAccess = await refreshAccessToken();

          if (!newAccess) {
            logout();
            return;
          }
        }

        // ✅ Restore user safely
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch {
          logout();
        }

      } catch (err) {
        console.log("Invalid token");
        logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};