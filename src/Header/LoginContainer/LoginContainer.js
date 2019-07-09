import React from "react";
import { Link } from "react-router-dom";

function LoginContainer() {
  return (
    <div className="button-container">
      <Link to="/admin/login">
        <button>Admin?</button>
      </Link>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default LoginContainer;
