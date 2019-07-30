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
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import GetUsers from "../Admin/GetUsers";
import EventStats from "../Admin/EventStats";

import React, { Component } from "react";

class Router extends Component {
  render() {
    return (
      <router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/admin/login" isAdmin={true} component={AdminLogin} />
          <PrivateRoute
            path="/admin/homepage"
            isAdmin={true}
            Admin={AdminHomepage}
            User={HomePage}
          />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute
            path="/admin/create-event"
            isAdmin={true}
            Admin={CreateEvent}
            User={HomePage}
          />
          <Route path="/event-details/:id" component={EventDetails} />
          <PrivateRoute
            path="/admin/edit-event/:id"
            isAdmin={true}
            Admin={editEvent}
            User={HomePage}
          />
          <PrivateRoute path="/checkout/:id" User={Checkout} />
          <PrivateRoute
            path="/admin/get-users"
            isAdmin={true}
            Admin={GetUsers}
            User={HomePage}
          />
          <PrivateRoute
            path="/admin/event-stats"
            isAdmin={true}
            Admin={EventStats}
            User={HomePage}
          />
        </Switch>
      </router>
    );
  }
}

export default Router;
