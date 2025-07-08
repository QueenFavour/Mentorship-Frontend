// src/pages/LoginPage.tsx
import React, { Component, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type LoginPageState = {
  email: string;
  password: string;
  error: string;
  loading: boolean;
};

type EditableField = "email" | "password";

class LoginPage extends Component<{}, LoginPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    var name = event.target.name as EditableField;
    var value = event.target.value;

    this.setState(function (prevState) {
      var updated: Partial<LoginPageState> = {};
      updated[name] = value;
      return updated as LoginPageState;
    });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    this.setState({ loading: true, error: "" });

    axios
      .post("https://your-backend-api.onrender.com/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        var token = response.data.token;
        var user = response.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "/dashboard";
      })
      .catch((error) => {
        var message = "Login failed. Please try again.";
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
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {this.state.error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
              {this.state.error}
            </div>
          )}

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

          <div className="mb-6">
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            disabled={this.state.loading}
          >
            {this.state.loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;