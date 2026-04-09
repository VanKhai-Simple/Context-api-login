import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Trạng thái chờ kiểm tra storage

  // 1. Khi app khởi chạy, kiểm tra xem đã có "phiên đăng nhập" lưu trong máy chưa
  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storedLoginStatus = await AsyncStorage.getItem("isLoggedIn");
        if (storedLoginStatus !== null) {
          // AsyncStorage chỉ lưu string, nên cần ép kiểu về boolean
          setIsLoggedIn(JSON.parse(storedLoginStatus));
        }
      } catch (e) {
        console.error("Lỗi đọc dữ liệu từ AsyncStorage:", e);
      } finally {
        setIsLoading(false);
      }
    };

    loadStorageData();
  }, []);

  // 2. Hàm cập nhật trạng thái kết hợp lưu vào AsyncStorage
  const login = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
      setIsLoggedIn(true);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};