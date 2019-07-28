import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Quantity extends Component {
  handleIncrement = () => {
    const id = this.props.ticketId;
    this.props.handleIncrement(id);
  };

  handleDecrement = () => {
    const id = this.props.ticketId;
    this.props.handleDecrement(id);
  };

  render() {
    return (
      <div className="quantity">
        <i onClick={this.handleIncrement} class="fas fa-plus-circle"></i>

        <p>{this.props.quantity || 0}</p>

        <i onClick={this.handleDecrement} class="fas fa-minus-circle"></i>
      </div>
    );
  }
}

export default Quantity;
