import React from "react";
import EventsList from "../EventsList/EventsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class AdminHomePage extends React.Component {
  render() {
    return (
      <div>
        <EventsList />
      </div>
    );
  }
}

export default AdminHomePage;
