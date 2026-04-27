import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

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
    window.location.href = "/login";
  };

  // 🔥 VALIDATE SESSION ON APP START
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // 🔥 IMPORTANT API
        const res = await api.get("/api/auth/me/");
        setUser(res.data);
      } catch (err) {
        console.log("Session expired");

        localStorage.clear();
        setUser(null);
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