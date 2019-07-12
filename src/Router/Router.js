import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";
import HomePage from "../HomePage/HomePage";
import AdminLogin from "../Admin/AdminLogin";
import AdminHomepage from "../Admin/AdminHomePage";
import createEvent from "../Events/createEvent";

function Router() {
  return (
    <router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/homepage" component={AdminHomepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin/create-event" component={createEvent} />
      </Switch>
    </router>
  );
}

export default Router;
