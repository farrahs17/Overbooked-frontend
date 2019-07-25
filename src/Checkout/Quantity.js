import React, { Component } from "react";
import axios from "axios";

class Quantity extends Component {
  state = {
    tickets: [
      {
        ticketId: null,
        quantity: 0
      }
    ]
  };

  componentDidMount() {
    this.setState({ ticketId: this.props.ticketId });
    //   axios
    //   .post(`http://localhost:8080/api/checkout/${id}`, this.state)
    //   .then(res => {
    //       console.log(res);
    //   })
    //   .catch(err => console.log(err));
  }
  handleIncQuan = () => {
    const id = this.state.ticketId;
    console.log(id);
    this.setState({ quantity: this.state.quantity + 1 });
    axios
      .post(`http://localhost:8080/api/checkout/${id}/add`, this.state.quantity)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  handleDecQuan = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };
  render() {
    console.log(this.state.ticketId);
    return (
      <div>
        <button onClick={this.handleIncQuan}>
          <i class="fas fa-plus-circle"></i>
        </button>
        <p>{this.state.quantity}</p>
        <button onClick={this.handleDecQuan}>
          <i class="fas fa-minus-circle"></i>
        </button>
      </div>
    );
  }
}

export default Quantity;
