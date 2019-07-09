import React from "react";
import LoginContainer from "./LoginContainer/LoginContainer";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header-container">
          <Link to="/">
            <h1>OverBooked</h1>
          </Link>
        </div>
        <LoginContainer />
      </div>
    );
  }
}

export default Header;
