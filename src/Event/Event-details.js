import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import { getToken } from "../Utils/utils";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

class EventDetails extends Component {
  state = {
    id: "",
    image: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: "",
    tickets: [{ id: "", type: "", price: "" }],
    agendas: []
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
        <Header />
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
                    <Image
                      className="event-image_details"
                      src={`http://localhost:8080/${this.state.image}`}
                      alt={this.state.title}
                      fluid
                    />

                    <h2>{this.state.title}</h2>
                    <h3>{this.state.category}</h3>
                    <p>{this.state.description}</p>
                    <h4>Date:</h4>
                    <p>
                      Starts at:{" "}
                      {moment(this.state.startsAt).format("MMM Do YY")}
                    </p>
                    <p>
                      Ends at: {moment(this.state.endsAt).format("MMM Do YY")}
                    </p>
                    {/* {this.state.tickets.map(ticket => {
                    return (
                      <div>
                        <p>Ticket type: {ticket.type}</p>
                        <p>Price: {ticket.price}</p>
                      </div>
                    );
                  })} */}
                    {getToken() ? (
                      <Link to={`/checkout/${this.state.id}`}>
                        <Button>Buy Ticket</Button>
                      </Link>
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
      </div>
    );
  }
}

export default EventDetails;
