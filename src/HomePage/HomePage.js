import React from "react";
import EventsList from "../EventsList/EventsList";
import Header from "../Header/Header";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <EventsList />
      </div>
    );
  }
}

export default HomePage;
