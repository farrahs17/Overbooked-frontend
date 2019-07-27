import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivR({ component: Component, isAdmin, ...rest }) {
  console.log(isAdmin);
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
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
  );
}
export default PrivR;
