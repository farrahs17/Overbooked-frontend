import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { getToken } from "../Utils/utils";

class EventDetails extends Component {
  state = {
    id: "",
    image: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: "",
    agendas: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
      this.setState(event.data);
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={8}>
            <Tabs
              defaultActiveKey="Details"
              id="uncontrolled-tab-example"
              className="tabs"
            >
              <Tab eventKey="Details" title="Event Details">
                <div className="event">
                  <img
                    className="event-image"
                    src={`http://localhost:8080/${this.state.image}`}
                    alt={this.state.title}
                  />
                  <h2>{this.state.title}</h2>
                  <h3>{this.state.category}</h3>
                  <p>{this.state.description}</p>
                  <h4>Date:</h4>
                  <p>
                    Starts at: {moment(this.state.startsAt).format("MMM Do YY")}
                  </p>
                  <p>
                    Ends at: {moment(this.state.endsAt).format("MMM Do YY")}
                  </p>
                  {getToken() ? (
                    <Button>Buy Ticket</Button>
                  ) : (
                    <div>
                      <p>Please login to buy ticket</p>
                      <Button disabled>Buy Ticket</Button>
                    </div>
                  )}
                </div>
              </Tab>

              <Tab eventKey="agenda" title="Agenda">
                <div>
                  {this.state.agendas.map(agenda => {
                    return (
                      <div key={agenda.id}>
                        <p>{agenda.title}</p>
                        <p>{agenda.date}</p>
                        <p>{agenda.time}</p>
                      </div>
                    );
                  })}
                </div>
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default EventDetails;
