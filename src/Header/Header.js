import React from "react";
import LoginContainer from "./LoginContainer/LoginContainer";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="container nav-bar">
        <div className="header-container">
          <Link navbar-brand to="/">
            <h1>OverBooked</h1>
          </Link>
        </div>
        <LoginContainer />
      </nav>
    );
  }
}

export default Header;
