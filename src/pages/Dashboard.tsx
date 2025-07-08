// src/pages/Dashboard.tsx
import React, { Component } from "react";

type DashboardState = {
  name: string;
  role: string;
};

class Dashboard extends Component<{}, DashboardState> {
  constructor(props: {}) {
    super(props);

    var userData = localStorage.getItem("user");
    var parsed = userData ? JSON.parse(userData) : null;

    if (!parsed || !localStorage.getItem("token")) {
      window.location.href = "/login";
    }

    this.state = {
      name: parsed ? parsed.name : "",
      role: parsed ? parsed.role : ""
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome, {this.state.name}</h2>
          <p className="text-gray-700 mb-6">Role: <span className="font-medium">{this.state.role}</span></p>

          <button
            onClick={this.handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard;