import React from "react";
import axios from "axios";
import Event from "../Event/Event";
class EventsList extends React.Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/api/get-events").then(response => {
      this.setState({
        events: response.data.events
      });
    });
  }
  render() {
    return this.state.events.map(event => {
      return (
        <div className="event" id={event.id}>
          <Event event={event} />
        </div>
      );
    });
  }
}

export default EventsList;
