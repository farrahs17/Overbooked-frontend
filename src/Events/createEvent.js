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
    category: "Arts",
    description: "",
    startsAt: "",
    endsAt: "",
    tickets: [{ type: "Early Bird", price: 0 }],
    agendas: [{ date: "", time: "", title: "" }]
  };

  handleTicketChange = e => {
    if (["type", "price"].includes(e.target.className)) {
      let tickets = [...this.state.tickets];
      console.log(e.target.dataset.id);
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
      agendas: [...prevState.agendas, { date: "", time: "", title: "" }]
    }));
  };

  handleAgendaChange = e => {
    if (["date", "time", "title"].includes(e.target.className)) {
      let agenda = [...this.state.agendas];
      agenda[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ agenda }, () => console.log(this.state.agenda));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleImageChange = e => {
    this.setState(
      {
        image: e.target.files[0]
      },
      () => console.log(this.state.image)
    );
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
    const formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("category", this.state.category);
    formData.append("startsAt", this.state.startsAt);
    formData.append("endsAt", this.state.endsAt);
    formData.append("tickets", JSON.stringify(this.state.tickets));
    formData.append("agendas", JSON.stringify(this.state.agendas));
    console.log(formData);
    axios
      .post(`http://localhost:8080/api/post-event`, formData)
      .then(res => {
        console.log(formData);
        console.log(res);
        this.props.history.push("/");
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
                      type="file"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter image"
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
                      <option value="Arts">Arts</option>
                      <option value="Business">Business</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Music">Music</option>
                      <option value="Sports">Sports</option>
                      <option value="Cinema">Cinema</option>
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
                          ? this.props.value.startsAt.split("T")[0]
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
                          ? this.props.value.endsAt.split("T")[0]
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
                    value={
                      this.props.edit
                        ? this.props.value.tickets
                        : this.state.tickets
                    }
                    tickets={this.state.tickets}
                    handleTicketChange={
                      this.props.edit
                        ? this.props.handleTicketEdit
                        : this.handleTicketsChange
                    }
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
                    agendas={this.state.agendas}
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
