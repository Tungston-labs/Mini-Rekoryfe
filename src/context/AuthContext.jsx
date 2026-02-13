import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://192.168.0.163:8000";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(true);

 const login = async (email, password) => {
  const response = await axios.post(
    `${BASE_URL}/api/auth/login/`,
    { email, password }
  );

  const { access, refresh, user } = response.data;

  localStorage.setItem("accessToken", access);
  localStorage.setItem("refreshToken", refresh);
  localStorage.setItem("user", JSON.stringify(user));

  setUser(user);

  return user; 
};


  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const init = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};


