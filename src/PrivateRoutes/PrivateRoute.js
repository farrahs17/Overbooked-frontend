import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../Utils/utils";
import jwtDecode from "jwt-decode";

const isAuthState = {
  isAdminLoggedIn: false,
  isUserLoggedIn: false,
  checkState: function() {
    const token = getToken();
    const decoded = token && jwtDecode(token);
    if (decoded && decoded.isAdmin) {
      this.isAdminLoggedIn = true;
    }
    if (decoded) {
      this.isUserLoggedIn = true;
    }
  }
};

const PrivateRoute = ({ Admin, User, isAdmin, ...rest }) => {
  isAuthState.checkState();
  return (
    <div>
      <Route
        {...rest}
        render={props =>
          isAdmin ? (
            isAuthState.isAdminLoggedIn ? (
              <Admin {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/admin/login",
                  state: { from: props.location }
                }}
              />
            )
          ) : isAuthState.isUserLoggedIn ? (
            <User {...props} />
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
};

export default PrivateRoute;
