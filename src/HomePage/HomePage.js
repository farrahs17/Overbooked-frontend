import React from "react";
import EventsList from "../EventsList/EventsList";
import CarouselComp from "../Header/Carousel";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <CarouselComp />
        <EventsList />
      </div>
    );
  }
}

export default HomePage;
