import React from "react";
import axios from "axios";
import { saveToken } from "../Utils/utils";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token);
        saveToken("token", res.data.token);
        this.props.history.push("/");
      });
  };

  handleUsernameChange = e => {
    const username = e.target.value;
    this.setState({ username: username });
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
            Username
            <input
              onChange={this.handleUsernameChange}
              type="text"
              id="username"
              name="username"
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

export default Login;
