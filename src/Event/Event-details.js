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
      <div className="event-details">
        <Header />
        <Container>
          <Row>
            <Col>
              <img
                src={`http://localhost:8080/${this.state.image}`}
                className="event-details-image"
                alt={this.state.title}
              />
            </Col>
            <Col xs={12} md={8}>
              <div className="tab-container">
                <Tabs
                  defaultActiveKey="Details"
                  id="uncontrolled-tab-example"
                  className="tabs"
                >
                  <Tab eventKey="Details" title="Event Details">
                    <div className="event-details-content">
                      <h2>{this.state.title}</h2>
                      <h4>{this.state.category}</h4>
                      <p>{this.state.description}</p>

                      <p className="event-time">
                        Starts at:{" "}
                        {moment(this.state.startsAt).format("DD/MM/YYYY")}
                      </p>
                      <p className="event-time">
                        Ends at:{" "}
                        {moment(this.state.endsAt).format("DD/MM/YYYY")}
                      </p>

                      {getToken() ? (
                        <Link to={`/checkout/${this.state.id}`}>
                          <Button className="btn-filled">Buy Ticket</Button>
                        </Link>
                      ) : (
                        <div>
                          <p className="err">
                            <small>Please login to buy ticket</small>
                          </p>
                          <Button disabled>Buy Ticket</Button>
                        </div>
                      )}
                    </div>
                  </Tab>

                  <Tab eventKey="agenda" title="Agenda">
                    <div>
                      {this.state.agendas.map(agenda => {
                        return (
                          <div key={agenda.id} className="agenda">
                            <p>{agenda.title}</p>
                            <p>{agenda.time}</p>
                            <p>{moment(agenda.date).format("DD/MM/YYYY")}</p>
                          </div>
                        );
                      })}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EventDetails;
