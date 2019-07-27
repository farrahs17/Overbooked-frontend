import React from "react";
import axios from "axios";
import { saveToken } from "../Utils/utils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { baseUrl } from "./../baseUrl";
import Header from "../Header/Header";

import { toast } from "react-toastify";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      return toast("Required Fields are empty", { type: "error" });
    }
    axios
      .post(`http://localhost:8080/api/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token);
        saveToken("token", res.data.token);
        this.props.history.push("/");
        toast("Logged in successfully", { type: "success" });
      })
      .catch(res => {
        toast(res.response.data.message, { type: "error" });
        console.log(res.response.data.message);
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
      <div>
        <Header />

        <Form onSubmit={this.handleSubmit} className="form-container">
          <div className="form-outline">
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
            <Button
              variant="primary"
              type="submit"
              onClick={this.props.isLoggedin}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
