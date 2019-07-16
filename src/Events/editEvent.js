import React, { Component } from "react";
import axios from "axios";
import CreateEvent from "./CreateEvent";

class editEvent extends Component {
  state = {
    event: {
      image: "",
      title: "",
      category: "Arts & Theater",
      description: "",
      startsAt: "",
      endsAt: "",
      tickets: [{ type: "Early Bird", price: 0 }]
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
    this.setState({
      event: { ...this.state.event, title: e.target.value }
    });
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

  render() {
    if (this.state.isLoading) {
      return <p>Loading</p>;
    }
    return (
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
          handleEditSubmit={this.handleEditSubmit}
        />
      </div>
    );
  }
}

export default editEvent;
