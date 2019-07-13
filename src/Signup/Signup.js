import React from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
class SignUp extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    passVerification: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.password === this.passwordVerification) {
      axios
        .post(`${baseUrl}/api/signup`, {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.props.history.push("/login");
        });
    } else {
      new Error("Passwords do not match");
    }
  };

  handleUsernameChange = e => {
    const username = e.target.value;
    this.setState({ username: username });
  };
  handlePasswordChange = e => {
    const pass = e.target.value;
    this.setState({ password: pass });
  };
  handlePassVerificationChange = e => {
    const passVerification = e.target.value;
    this.setState({ passVerification: passVerification });
  };
  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email: email });
  };

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={this.handleSubmit}>
          <label className="email-label">
            Email
            <input
              onChange={this.handleEmailChange}
              type="text"
              id="email"
              name="email"
            />
          </label>
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
          <label>
            Re-enter Password
            <input
              type="password"
              id="passVerification"
              name="passVerification"
              onChange={this.handlePassVerificationChange}
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
