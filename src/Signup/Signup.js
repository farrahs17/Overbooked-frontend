import React from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import validator from "validator";
import { toast } from "react-toastify";

class SignUp extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    passVerification: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.email || !this.state.password || !this.state.username) {
      return toast("Required Fields are empty", { type: "error" });
    }
    if (!validator.isEmail(this.state.email)) {
      return toast("Email is invalid", { type: "warning" });
    }
    if (!validator.isLength(this.state.password, { min: 8 })) {
      return toast("Password must be 8 characters", { type: "warning" });
    }
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
      <div>
        <Header />

        <Form onSubmit={this.handleSubmit} className="form-container">
          <div className="form-outline">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={this.handleUsernameChange}
                name="email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.handleEmailChange}
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordChange}
                name="password"
              />
            </Form.Group>
            <Button className="btn-filled" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
