import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={user && user.role === "user" ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/admin"
          element={user && user.role === "admin" ? <AdminDashboard /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;