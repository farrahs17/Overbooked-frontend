import React, { Component } from "react";
import axios from "axios";
class EventDetails extends Component {
  state = {
    id: "",
    image: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
      console.log(event.data);
      this.setState(event.data);
    });
  }
  render() {
    return (
      <div>
        <img src={this.state.image} alt={this.state.title} />
        <h1>Event Description</h1>
        <h2>{this.state.title}</h2>
        <h3>{this.state.category}</h3>
        <p>{this.state.description}</p>
        <h2>Date:</h2>
        <p>Starts At:{this.state.startsAt}</p>
        <p>Ends At:{this.state.endsAt}</p>
      </div>
    );
  }
}

export default EventDetails;
