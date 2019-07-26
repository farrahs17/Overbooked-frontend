import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Quantity from "./Quantity";
import StripeCheckout from "react-stripe-checkout";

class Checkout extends Component {
  state = {
    id: "",
    title: "",
    category: "",
    description: "",
    startsAt: "",
    endsAt: "",
    tickets: [{ id: "", type: "", price: "" }],
    total: 0
  };

  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
      this.setState(event.data);
    });
  }
  render() {
    // console.log(this.state.tickets);
    return (
      <div>
        <h2>Checkout</h2>
        <Container>
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
                    <div key={i}>
                      <p>{ticket.type}</p>
                      <p>{ticket.price}</p>

                      <Quantity ticketId={ticket.id} />
                    </div>
                  );
                })}

                <h3>Total price: ${this.state.total}</h3>
              </div>
              {/* <div>
                <StripeCheckout
                  stripeKey="pk_test_xajy240BrWgEH5FtU8wAP1OU00cxMY3iJY"
                  token={this.onToken}
                  amount=""
                />
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Checkout;
