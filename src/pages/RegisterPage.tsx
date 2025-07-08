// src/pages/RegisterPage.tsx
import React, { Component, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type RegisterPageState = {
  name: string;
  email: string;
  password: string;
  role: string;
  error: string;
  loading: boolean;
};

type EditableField = "name" | "email" | "password" | "role";

class RegisterPage extends Component<{}, RegisterPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "user", // default
      error: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    var name = event.target.name as EditableField;
    var value = event.target.value;

    this.setState(function (prevState) {
      var updated: Partial<RegisterPageState> = {};
      updated[name] = value;
      return updated as RegisterPageState;
    });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    this.setState({ loading: true, error: "" });

    axios
      .post("https://your-backend-api.onrender.com/api/auth/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
      .then(function (response) {
        var token = response.data.token;
        var user = response.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "/dashboard";
      })
      .catch((error) => {
        var message = "Registration failed. Please try again.";
        if (error.response && error.response.data && error.response.data.message) {
          message = error.response.data.message;
        }
        this.setState({ error: message, loading: false });
      });
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={this.handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          {this.state.error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
              {this.state.error}
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
            disabled={this.state.loading}
          >
            {this.state.loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;