import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../Utils/utils";
import jwtDecode from "jwt-decode";

class PrivateRoute extends Component {
  state = {
    isLoggedin: false,
    isAdmin: false
  };

  componentDidMount() {
    this.handleLogin();
  }

  handleLogin = () => {
    const token = getToken();
    const decoded = token && jwtDecode(token);
    if (decoded) {
      this.setState({ isLoggedin: true, isAdmin: true });
    }
  };

  render() {
    const { component: Component, ...rest } = this.props;
    console.log(this.state);
    return (
      <div>
        <Route
          {...rest}
          render={props =>
            props.isAdmin ? (
              this.state.isAdmin ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/admin/login",
                    state: { from: props.location }
                  }}
                />
              )
            ) : this.state.isLoggedin ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      </div>
    );
  }
}

export default PrivateRoute;
