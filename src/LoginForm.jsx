import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
  }

  handleLogin(event) {
    event.preventDefault();
    var loginData = {
      email: this.state.email,
      password: this.state.password
    };

    var self = this;

    axios.post('http://localhost:3000/api/auth/login', loginData)
      .then(function (response) {
        var token = response.data.token;
        var user = response.data.user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login successful');

        // Redirect to dashboard (without full reload)
        window.history.pushState({}, '', '/dashboard');
        window.dispatchEvent(new PopStateEvent('popstate'));
      })
      .catch(function (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message || 'Login failed');
        } else {
          alert('Error connecting to server');
        }
      });
  }

  render() {
    return (
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;