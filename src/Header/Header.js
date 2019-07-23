import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { getToken, clearToken } from "../Utils/utils";

class Header extends React.Component {
  state = {
    isLoggedin: false
  };
  componentDidMount() {
    if (getToken()) {
      this.setState({ isLoggedin: true });
    }
  }
  handleLogout = () => {
    clearToken("token");
    this.setState({ isLoggedin: false });
  };
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header-bg"
        variant="light"
      >
        <Navbar.Brand>
          <Link className="logo" to="/">
            <h1>OverBooked</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="nav-link nav-item" to="/admin/login">
                Admin?
              </Link>
            </Nav.Link>
          </Nav>

          {!getToken() ? (
            <Nav className="login">
              <Nav.Link>
                <Link className="nav-link nav-item" to="/login">
                  <Button className="nav-button">Log In</Button>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className="nav-link nav-item" to="/signup">
                  <Button className="nav-button">Sign Up</Button>
                </Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link>
                  <Button onClick={this.handleLogout}>Log out</Button>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
