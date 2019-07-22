import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class EventDetails extends Component {
  state = {
    id: "",
    image: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: "",
    agenda: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
      this.setState(event.data);
    });

    axios.get(`http://localhost:8080/api/get-agenda/${id}`).then(agenda => {
      this.setState({ agenda: agenda.data });
    });
  }
  render() {
    const agenda = this.state.agenda;
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
                  <Button>Buy Ticket</Button>
                </div>
              </Tab>

              <Tab eventKey="agenda" title="Agenda">
                <div>
                  {this.state.agenda.length === 0 ? (
                    <p>No agenda found</p>
                  ) : (
                    agenda.map(agenda => {
                      return (
                        <div key={agenda.id}>
                          <p>{agenda.title}</p>
                        </div>
                      );
                    })
                  )}
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
