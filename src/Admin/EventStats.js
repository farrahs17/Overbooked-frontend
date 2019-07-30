import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Header from "../Header/Header";

class EventStats extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/api/event-stats").then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <h4>Event Title</h4>
          <Table className="mt-5" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Ticket Type</th>
                <th>Price</th>
                <th>Quantity Sold</th>
                <th>Total</th>
              </tr>
            </thead>
            {this.state.events.map(event => {
              return (
                <tbody>
                  <tr>
                    <td>{event.title}</td>
                    <td>{event.ticketType}</td>
                    <td>{event.ticketPrice}</td>
                    <td>{event.ticketQuantity}</td>
                    <td>{event.total}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export default EventStats;
