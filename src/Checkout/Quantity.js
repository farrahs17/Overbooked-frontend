import React, { Component } from "react";

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
      <div>
        <button onClick={this.handleIncrement}>
          <i class="fas fa-plus-circle"></i>
        </button>
        <p>{this.props.quantity || 0}</p>
        <button onClick={this.handleDecrement}>
          <i class="fas fa-minus-circle"></i>
        </button>
      </div>
    );
  }
}

export default Quantity;
