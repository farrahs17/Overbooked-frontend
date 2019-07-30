import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Quantity from "./Quantity";
import StripeCheckout from "react-stripe-checkout";

import { getToken } from "../Utils/utils";

import Header from "../Header/Header";

class Checkout extends Component {
  state = {
    id: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: "",
    tickets: [{ id: "", type: "", price: "", quantity: 0 }],
    total: 0
  };
  

  handleIncrement = id => {
    let tickets = this.state.tickets;
    let total = this.state.total;
    tickets = tickets.map(ticket => {
      if (id === ticket.id) {
        total = total + ticket.price;
        return {
          ...ticket,
          quantity: ticket.quantity ? ticket.quantity + 1 : 1
        };
      } else {
        return ticket;
      }
    });
    this.setState({ tickets, total }, () => console.log(this.state));
  };

  handleDecrement = id => {
    let tickets = this.state.tickets;
    let total = this.state.total;
    tickets = tickets.map(ticket => {
      if (id === ticket.id && ticket.quantity > 0) {
        total -= ticket.price;
        return { ...ticket, quantity: ticket.quantity && ticket.quantity - 1 };
      } else {
        return ticket;
      }
    });
    this.setState({ tickets, total });
  };

  formatTickets = tickets => {
    let formatedTickets = [];
    tickets.map(ticket => {
      if (ticket.quantity) {
        formatedTickets.push({
          ticket_id: ticket.id,
          quantity: ticket.quantity
        });
      }
    });
    return formatedTickets;
  };
  onToken = token => {
    let tickets = this.formatTickets(this.state.tickets);
    console.log(token);
    axios
      .post(
        `http://localhost:8080/api/checkout/`,
        { token: token, total: this.state.total, tickets },
        {
          headers: {
            Authorization: "Bearer " + getToken()
          }
        }
      )
      .then(event => {
        console.log("========" + event.data);
      });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
      this.setState(event.data);
    });
  }
  render() {
    return (
      <div className="checkout ">
        <Header />
        <h2 className="mt-5">Checkout</h2>
        <Container className="mt-5">
          <Row>
            <Col>
              <h3>Event</h3>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{this.state.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {this.state.category}
                  </Card.Subtitle>
                  <Card.Text>{this.state.description}</Card.Text>
                  <Card.Text className="text-muted">
                    {moment(this.state.startsAt).format("MMMM Do YYYY")} -
                    {moment(this.state.endsAt).format("MMMM Do YYYY")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h3>Tickets</h3>
              <div>
                {this.state.tickets.map((ticket, i) => {
                  return (
                    <div key={i} className="ticket">
                      <p>{ticket.type}</p>
                      <p>${ticket.price}</p>

                      <Quantity
                        ticketId={ticket.id}
                        eventId={this.state.id}
                        handleIncrement={this.handleIncrement}
                        handleDecrement={this.handleDecrement}
                        quantity={ticket.quantity}
                      />
                    </div>
                  );
                })}

                <h3>Total price: ${this.state.total}</h3>
              </div>
              <div>
                <StripeCheckout
                  stripeKey="pk_test_xajy240BrWgEH5FtU8wAP1OU00cxMY3iJY"
                  token={this.onToken}
                  amount={this.state.total * 100}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Checkout;
