import React from "react";
import axios from "axios";
import Event from "../Event/Event";
import Nav from "react-bootstrap/Nav";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
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
        <div className="category">
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.handleCategoryChange("Arts")}>
                Arts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.handleCategoryChange("Business")}>
                Business
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.handleCategoryChange("Fashion")}>
                Fashion
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.handleCategoryChange("Music")}>
                Music
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.handleCategoryChange("Sports")}>
                Sports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => this.handleCategoryChange("Cinema")}>
                Cinema
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <CardDeck>
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
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default EventsList;
