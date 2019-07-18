import React from "react";
import axios from "axios";
import Event from "../Event/Event";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/Button";
// import { baseUrl } from "../baseUrl";
class EventsList extends React.Component {
  state = {
    events: [],
    category: ""
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/api/get-events`).then(response => {
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
  handleCategoryChange = category => {
    const value = category;
    axios
      .get(`http://localhost:8080/api/filter-event/${value}`)
      .then(response => {
        this.setState({
          category: value,
          events: response.data.events
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <ButtonGroup aria-label="Basic example">
            <Button
              onClick={() => this.handleCategoryChange("Artstheater")}
              variant="secondary"
            >
              Arts & Theater
            </Button>
            <Button
              onClick={() => this.handleCategoryChange("Business")}
              variant="secondary"
            >
              Business
            </Button>
            <Button
              onClick={() => this.handleCategoryChange("Music")}
              variant="secondary"
            >
              Music
            </Button>
            <Button
              onClick={() => this.handleCategoryChange("Sports")}
              variant="secondary"
            >
              Sports
            </Button>
            <Button
              onClick={() => this.handleCategoryChange("Cinema")}
              variant="secondary"
            >
              Cinema
            </Button>
          </ButtonGroup>
        </div>
        ;
        {this.state.events.map(event => {
          return (
            <div className="event" id={event.id}>
              <Event
                event={event}
                handleDelete={() => this.handleDelete(event.id)}
              />
            </div>
          );
        })}
        ;
      </React.Fragment>
    );
  }
}

export default EventsList;
