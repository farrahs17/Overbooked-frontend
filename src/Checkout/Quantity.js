import React, { Component } from "react";
import axios from "axios";

class Quantity extends Component {
  state = {
    ticketId: "",
    quantity: 0
  };

  componentDidMount() {
    this.setState({ ticketId: this.props.ticketId });
    console.log(`current ticket id  ${this.state.ticketId}`);
    //   axios
    //   .post(`http://localhost:8080/api/checkout/${id}`, this.state)
    //   .then(res => {
    //       console.log(res);
    //   })
    //   .catch(err => console.log(err));
  }
  handleIncQuan = () => {
    const id = this.props.ticketId;
    console.log(id);
    this.setState(
      { quantity: this.state.quantity + 1 },
      console.log(this.state.quantity)
    );
    console.log(this.state.quantity);
    // axios
    //   .post(`http://localhost:8080/api/checkout/${id}/add`, this.state.quantity)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  };
  handleDecQuan = () => {
    this.setState({ quantity: this.state.quantity-- });
  };
  render() {
    // console.log(this.state.ticketId);
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
