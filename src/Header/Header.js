import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { getToken, clearToken } from "../Utils/utils";
import { Redirect } from "react-router-dom";
import logo from "../assets/overbooked-logo.png";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

class Header extends React.Component {
  state = {
    isLoggedin: false,
    isAdmin: false,
    isAdminLogout: true
  };
  componentDidMount() {
    if (getToken()) {
      // this.setState({ isLoggedin: true });
      const token = getToken();
      const decoded = token ? jwtDecode(token) : null;
      console.log(decoded.isAdmin);
      if (decoded && decoded.isAdmin) {
        this.setState({ isAdmin: true, isLoggedin: true });
      }
    }
  }
  handleLogout = () => {
    if (this.state.isAdmin) {
      clearToken("token");
      this.setState({ isLoggedin: false, isAdminLogout: false });
    }
    clearToken("token");
    this.setState({ isLoggedin: false });
    toast("You're logged out", { type: "info" });
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
          {this.state.isAdmin ? (
            <Link className="logo" to="/admin/homepage">
              {/* <h1>OverBooked</h1> */}
              <img alt="Overbooked logo" src={logo} className="logo-img" />
            </Link>
          ) : (
            <Link className="logo" to="/">
              {/* <h1>OverBooked</h1> */}
              <img alt="Overbooked logo" src={logo} className="logo-img" />
            </Link>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {this.state.isAdmin ? (
            <Nav className="mr-auto links">
              <Link to="/admin/create-event">Create Event</Link>

              <Link to="/admin/get-users">Show Users</Link>
            </Nav>
          ) : null}
          {!getToken() ? (
            <Nav className="login">
              <Nav.Link>
                <Link className="nav-link nav-item" to="/login">
                  <Button className="btn-filled">Log In</Button>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className="nav-link nav-item" to="/signup">
                  <Button className=" btn-filled">Sign Up</Button>
                </Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="login">
              <Nav.Link>
                <Link>
                  <Button className="btn-filled" onClick={this.handleLogout}>
                    Log out
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          )}
          {!this.state.isAdminLogout ? <Redirect to="/admin/login" /> : null}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
