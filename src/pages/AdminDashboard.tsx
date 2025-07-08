import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Admin Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Welcome, Admin. You have full access to mentor matching and user insights.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;