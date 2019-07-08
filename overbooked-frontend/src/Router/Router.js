import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";
import HomePage from "../HomePage/HomePage";

function Router() {
  return (
    <router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </router>
  );
}

export default Router;
