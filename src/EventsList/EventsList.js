import React from "react";
import axios from "axios";
import Event from "../Event/Event";
import { baseUrl } from "../baseUrl";
class EventsList extends React.Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get(`${baseUrl}/api/get-event`).then(response => {
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
