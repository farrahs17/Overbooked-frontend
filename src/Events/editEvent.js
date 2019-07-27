import React, { Component } from "react";
import axios from "axios";
import CreateEvent from "./CreateEvent";

class editEvent extends Component {
  state = {
    event: {
      image: "",
      title: "",
      category: "",
      description: "",
      startsAt: "",
      endsAt: "",
      tickets: [{ type: "", price: 0 }]
    },
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
      console.log(event);
      return this.setState({ isLoading: false, event: event.data });
    });
  }
  handleEditSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios
      .put(`http://localhost:8080/api/edit-event/${id}`, this.state.event)
      .then(event => {
        console.log(event);
        return this.setState({ isLoading: false, event: event.data.result });
      });
  };
  handleImageEdit = e => {
    this.setState({
      event: { ...this.state.event, image: e.target.value }
    });
  };

  handleTitleEdit = e => {
    this.setState(
      {
        event: { ...this.state.event, title: e.target.value }
      },
      () => console.log(this.state)
    );
  };

  handleCategoryEdit = e => {
    this.setState({
      event: { ...this.state.event, category: e.target.value }
    });
  };

  handleDescEdit = e => {
    this.setState({
      event: { ...this.state.event, description: e.target.value }
    });
  };
  handleStartsEdit = e => {
    console.log(e.target.value);
    this.setState({
      event: { ...this.state.event, startsAt: e.target.value }
    });
  };

  handleEndsEdit = e => {
    this.setState({
      event: { ...this.state.event, endsAt: e.target.value }
    });
  };

  handleTicketEdit = e => {
    if (["type", "price"].includes(e.target.className)) {
      let tickets = [...this.state.tickets];
      console.log(e.target.dataset.id);
      tickets[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({
        tickets: {
          ...this.state.tickets,
          tickets: tickets
        }
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <div>
          <CreateEvent
            value={this.state.event}
            edit={true}
            handleImageEdit={this.handleImageEdit}
            handleTitleEdit={this.handleTitleEdit}
            handleCategoryEdit={this.handleCategoryEdit}
            handleDescEdit={this.handleDescEdit}
            handleStartsEdit={this.handleStartsEdit}
            handleEndsEdit={this.handleEndsEdit}
            handleTicketEdit={this.handleTicketEdit}
            handleEditSubmit={this.handleEditSubmit}
          />
        </div>
      </div>
    );
  }
}

export default editEvent;
