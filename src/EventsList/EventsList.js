import React from "react";
import axios from "axios";
import Event from "../Event/Event";
import CardDeck from "react-bootstrap/CardDeck";
import { getToken } from "../Utils/utils";
import jwtDecode from "jwt-decode";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FilterEvents from "./FilterEvents";
import Header from "../Header/Header";

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
class EventsList extends React.Component {
  state = {
    events: [],
    category: "",
    isAdmin: false,
    term: ""
  };
  componentDidMount() {
    this.handleAdminLogin();
    axios.get(`http://localhost:8080/api/get-events`).then(response => {
      this.setState({
        events: response.data.events
      });
    });
  }

  handleAdminLogin = () => {
    const token = getToken();
    const decoded = token ? jwtDecode(token) : null;
    if (decoded && decoded.isAdmin) {
      this.setState({ isAdmin: true });
    }
  };
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
  handleSearch = event => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  };
  render() {
    console.log(this.state.isAdmin);
    return (
      <React.Fragment>
        <Header />
        <FilterEvents
          handleCategoryChange={this.handleCategoryChange}
          category={this.state.category}
        />
        <InputGroup className="mb-3 mt-5 search-input">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by event name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handleSearch}
            value={this.state.term}
          />
        </InputGroup>

        <CardDeck className="card-deck">
          {this.state.events
            .filter(searchingFor(this.state.term))
            .map(event => {
              return (
                <div className="event" id={event.id}>
                  <Event
                    event={event}
                    handleDelete={() => this.handleDelete(event.id)}
                    isAdmin={this.state.isAdmin}
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
