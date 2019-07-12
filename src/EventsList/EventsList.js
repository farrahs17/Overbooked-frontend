import React from "react";
import axios from "axios";
import Event from "../Event/Event";
class EventsList extends React.Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/get-tickets").then(response => {
      this.setState({
        events: [...this.state.events, response.data]
      });
    });
  }
  render() {
    return this.state.events.map(event => {
      return (
        <div className="event" id={event.id}>
          <Event
            id={event.id}
            title={event.title}
            category={event.category}
            description={event.description}
            starts_at={event.starts_at}
            ends_at={event.ends_at}
            image={event.image}
          />
        </div>
      );
    });
  }
}

export default EventsList;
