import React, { Component } from "react";
import axios from "axios";
import TicketTiers from "./ticketTiers";
// import { baseUrl } from "../baseUrl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Agenda from "./Agenda";

class CreateEvent extends Component {
  state = {
    image: "",
    title: "",
    category: "Arts & Theater",
    description: "",
    startsAt: "",
    endsAt: "",
    tickets: [{ type: "Early Bird", price: 0 }],
    agenda: [{ date: "", time: "", title: "" }]
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

  addAgenda = e => {
    this.setState(prevState => ({
      agenda: [...prevState.tickets, { date: "", time: "", title: "" }]
    }));
  };

  handleAgendaChange = e => {
    if (["date", "time", "title"].includes(e.target.className)) {
      let agenda = [...this.state.agenda];
      agenda[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ agenda }, () => console.log(this.state));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
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
      <Accordion defaultActiveKey="0">
        <div>
          <form
            onSubmit={
              this.props.edit ? this.props.handleEditSubmit : this.handleSubmit
            }
            encType="multipart/form-data"
          >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Event Details
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Image</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter image"
                      value={
                        this.props.edit
                          ? this.props.value.image
                          : this.state.image
                      }
                      onChange={
                        this.props.edit
                          ? this.props.handleImageEdit
                          : this.handleImageChange
                      }
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
                      value={
                        this.props.edit
                          ? this.props.value.title
                          : this.state.title
                      }
                      onChange={
                        this.props.edit
                          ? this.props.handleTitleEdit
                          : this.handleTitleChange
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Category</label>
                    <select
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter category"
                      value={
                        this.props.edit
                          ? this.props.value.category
                          : this.state.category
                      }
                      onChange={
                        this.props.edit
                          ? this.props.handleCategoryEdit
                          : this.handleCategoryChange
                      }
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
                      value={
                        this.props.edit
                          ? this.props.value.description
                          : this.state.description
                      }
                      onChange={
                        this.props.edit
                          ? this.props.handleDescEdit
                          : this.handleDescChange
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Starts At:</label>
                    <input
                      type="date"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Starts At"
                      value={
                        this.props.edit
                          ? this.props.value.startsAt
                          : this.state.startsAt
                      }
                      onChange={
                        this.props.edit
                          ? this.props.handleStartsEdit
                          : this.handleStartsChange
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Ends At:</label>
                    <input
                      type="date"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Ends At"
                      value={
                        this.props.edit
                          ? this.props.value.endsAt
                          : this.state.endsAt
                      }
                      onChange={
                        this.props.edit
                          ? this.props.handleEndsEdit
                          : this.handleEndsChange
                      }
                    />
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Tickets
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <TicketTiers
                    tickets={this.state.tickets}
                    handleTicketChange={this.handleTicketChange}
                    addTicket={this.addTicket}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Agenda
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Agenda
                    agenda={this.state.agenda}
                    handleAgendaChange={this.handleAgendaChange}
                    addAgenda={this.addAgenda}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <div className="input-group-append">
              {this.props.edit ? (
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Edit Event
                </button>
              ) : (
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Create Event
                </button>
              )}
            </div>
          </form>
        </div>
      </Accordion>
    );
  }
}

export default CreateEvent;
