import React from "react";
import axios from "axios";
import { saveToken } from "../Utils/utils";
import { baseUrl } from "../baseUrl";

class AdminLogin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/api/login-admin`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token);
        saveToken("token", res.data.token);
        this.props.history.push("/admin/homepage");
      });
  };

  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email: email });
  };
  handlePasswordChange = e => {
    const pass = e.target.value;
    this.setState({ password: pass });
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <label className="username-label">
            Email
            <input
              onChange={this.handleEmailChange}
              type="text"
              id="username"
              name="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handlePasswordChange}
            />
          </label>
          <button onSubmit={this.handleSubmit} type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default AdminLogin;
