import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";
import HomePage from "../HomePage/HomePage";
import AdminLogin from "../Admin/AdminLogin";
import AdminHomepage from "../Admin/AdminHomePage";
import CreateEvent from "../Events/CreateEvent";
import EventDetails from "../Event/Event-details";
import editEvent from "../Events/editEvent";
import Checkout from "../Checkout/Checkout";

function Router(props) {
  return (
    <router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/homepage" component={AdminHomepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin/create-event" component={CreateEvent} />
        <Route path="/event-details/:id" component={EventDetails} />
        <Route path="/admin/edit-event/:id" component={editEvent} />
        <Route path="/checkout/:id" component={Checkout} />
      </Switch>
    </router>
  );
}

export default Router;
