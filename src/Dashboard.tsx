import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    var token = localStorage.getItem('token');
    var userData = localStorage.getItem('user');

    if (!token || !userData) {
      window.location.href = '/';
    }

    this.state = {
      user: JSON.parse(userData)
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  }

  render() {
    var user = this.state.user;

    return (
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-blue-900 text-white flex flex-col justify-between">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Mentorship</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/profile" className="hover:underline">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="hover:underline">Settings</Link>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <button
              onClick={this.handleLogout}
              className="bg-red-600 hover:bg-red-700 w-full py-2 px-4 rounded text-white"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main Content with Routes */}
        <div className="flex-1 p-10">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}</h1>
                <p className="text-gray-700 mb-2"><strong>Role:</strong> {user.role}</p>
                <p className="text-gray-700"><strong>User Type:</strong> {user.userType || 'N/A'}</p>
              </div>
            } />

            <Route path="profile" element={
              <div>
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="text-gray-600">This is your profile page.</p>
              </div>
            } />

            <Route path="settings" element={
              <div>
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                <p className="text-gray-600">Settings page content goes here.</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Dashboard;