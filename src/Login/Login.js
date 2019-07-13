import React from "react";
import axios from "axios";
import { saveToken } from "../Utils/utils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token);
        saveToken("token", res.data.token);
        this.props.history.push("/");
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
      // <div className="login-container">
      //   <form onSubmit={this.handleSubmit}>
      //     <label className="username-label">
      //       Username
      //       <input
      //         onChange={this.handleUsernameChange}
      //         type="text"
      //         id="username"
      //         name="username"
      //       />
      //     </label>
      //     <label>
      //       Password
      //       <input
      //         type="password"
      //         id="password"
      //         name="password"
      //         onChange={this.handlePasswordChange}
      //       />
      //     </label>
      //     <button onSubmit={this.handleSubmit} type="submit">
      //       Log in
      //     </button>
      //   </form>
      // </div>

      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.handleEmailChange}
            name="email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
