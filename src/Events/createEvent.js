import React, { Component } from "react";
import axios from "axios";
import TicketTiers from "./ticketTiers";
class createEvent extends Component {
  state = {
    image: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: ""
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

    const data = {
      image: this.state.image,
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
      startsAt: this.state.startsAt,
      endsAt: this.state.endsAt
    };
    axios
      .post(`http://localhost:8080/api/post-event`, data)
      .then(res => {
        this.props.addPost({ ...data, votes: 0 });
        this.setState({
          image: "",
          title: "",
          category: "",
          description: "",
          startsAt: "",
          endsAt: ""
        });
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
              type="file"
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
              <option value="Cenima">Cenima</option>
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
          <TicketTiers />
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
