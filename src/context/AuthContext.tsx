import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { fetchJsonData } from "@/services/fetchJsonData"; // 경로 맞춰서 import

interface AuthContextType {
  isLoggedIn: boolean;
  login: (key: string) => Promise<boolean>; // 입력 키를 받아 로그인 시도
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔑 로그인 함수
  const login = async (inputKey: string) => {
    try {
      const data = await fetchJsonData("oAuthKey", "oAuthKey", "skson0x6ab_InformationRepository");
      console.log(data);
      if (data?.oAuthKey && data.oAuthKey === inputKey) {
        setIsLoggedIn(true);
        sessionStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginTimestamp", Date.now().toString());
        return true; // 로그인 성공
      } else {
        return false; // 실패
      }
    } catch (err) {
      console.error("Login Error:", err);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loginTimestamp");
  };

  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 🔑 10분 자동 로그아웃
  useEffect(() => {
    if (!isLoggedIn) return;
    const timer = setInterval(() => {
      const timestamp = localStorage.getItem("loginTimestamp");
      if (!timestamp) return;
      const diff = Date.now() - parseInt(timestamp);
      if (diff > 10 * 60 * 1000) {
        logout();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
