import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  render() {
    return (
      // <nav className="container nav-bar navbar-expand-lg navbar-light bg-light">
      //   <div className="header-container">
      //     <Link className="navbar-brand" to="/">
      //       <h1>OverBooked</h1>
      //     </Link>
      //   </div>
      //   <LoginContainer />
      // </nav>
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
                <a>Admin?</a>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link className="nav-link nav-item" to="/login">
                <a>Log In</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link nav-item" to="/signup">
                <a>Sign Up</a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
