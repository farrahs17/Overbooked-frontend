import React, { Component } from "react";
import axios from "axios";
import TicketTiers from "./ticketTiers";
// import { baseUrl } from "../baseUrl";
class createEvent extends Component {
  state = {
    image: "",
    title: "",
    category: "Arts & Theater",
    description: "",
    startsAt: "",
    endsAt: "",
    tickets: [{ type: "Early Bird", price: 0 }]
  };

  handleTicketChange = e => {
    if (["type", "price"].includes(e.target.className)) {
      let tickets = [...this.state.tickets];
      tickets[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ tickets }, () => console.log(this.state));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addTicket = e => {
    this.setState(prevState => ({
      tickets: [...prevState.tickets, { type: "Early Bird", price: "" }]
    }));
  };

  handleImageChange = e => {
    this.setState({
      image: e.target.value
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  handleDescChange = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleStartsChange = e => {
    this.setState({
      startsAt: e.target.value
    });
  };
  handleEndsChange = e => {
    this.setState({
      endsAt: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/api/post-event`, this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div class="form-group">
            <label for="exampleFormControlInput1">Image</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter image"
              value={this.state.image}
              onChange={this.handleImageChange}
              name="image"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">title</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Category</label>
            <select
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter category"
              value={this.state.category}
              onChange={this.handleCategoryChange}
            >
              <option value="Arts & Theater">Arts & Theater</option>
              <option value="Business">Business</option>
              <option value="Fashion">Fashion</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Cinema">Cenima</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.handleDescChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Starts At:</label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Starts At"
              value={this.state.startsAt}
              onChange={this.handleStartsChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Ends At:</label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ends At"
              value={this.state.endsAt}
              onChange={this.handleEndsChange}
            />
          </div>
          <TicketTiers
            tickets={this.state.tickets}
            handleTicketChange={this.handleTicketChange}
            addTicket={this.addTicket}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default createEvent;
