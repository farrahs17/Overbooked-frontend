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

  handleDelete = id => {
    axios
      .delete(`http://localhost:8080/api/edit-delete/${id}`)
      .then(res => {
        this.setState(previousState => ({
          events: previousState.events.filter(e => e.id !== id)
        }));
        this.getEvents();
      })
      .catch(Error => console.log(Error));
  };

  render() {
    return this.state.events.map(event => {
      return (
        <div className="event" id={event.id}>
          <Event
            event={event}
            handleDelete={() => this.handleDelete(event.id)}
          />
        </div>
      );
    });
  }
}

export default EventsList;
