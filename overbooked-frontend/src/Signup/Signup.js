import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    passVerification: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.password === this.passwordVerification) {
      axios
        .post("http://localhost:8080/api/signup", {
          name: this.state.name,
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

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name: name });
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
          <label className="username-label">
            Full Name
            <input
              onChange={this.handleNameChange}
              type="text"
              id="name"
              name="name"
            />
          </label>
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
