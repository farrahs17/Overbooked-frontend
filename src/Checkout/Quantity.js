import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../Utils/utils";

class Quantity extends Component {
  state = {
    ticketId: this.props.ticketId,
    quantity: 0
  };
  handleTotal = () => {
    this.props.total("total");
  };
  componentDidMount() {
    this.handleTotal();
    console.log(`current ticket id  ${this.state.ticketId}`);
    axios
      .get(
        `http://localhost:8080/api/checkout/${this.props.eventId}`,

        {
          params: {
            ticketId: this.state.ticketId,
            quantity: this.state.quantity
          },

          headers: {
            Authorization: "Bearer " + getToken()
          }
        }
      )
      .then(res => {
        console.log(res);
        this.props.total(res.data);
      })
      .catch(err => console.log(err));
  }
  handleIncQuan = () => {
    const id = this.props.ticketId;
    console.log(id);
    this.setState(state => {
      return { quantity: state.quantity + 1 };
    });
    let quantity = this.state.quantity + 1;
    console.log(this.state.quantity);
    axios
      .post(
        `http://localhost:8080/api/checkout/${this.props.eventId}/add`,
        {
          quantity: quantity,
          ticketId: this.props.ticketId,
          eventId: this.props.eventId
        },
        {
          headers: {
            Authorization: "Bearer " + getToken()
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleDecQuan = () => {
    const id = this.props.ticketId;

    let quantity;
    if (this.state.quantity === 0) {
      quantity = 0;
    } else {
      quantity--;
    }
    console.log(quantity);
    this.setState(state => {
      return { quantity: this.state.quantity - 1 };
    });
    axios
      .post(
        `http://localhost:8080/api/checkout/${id}/subtract`,
        { quantity: this.state.quantity, ticketId: this.props.ticketId },
        {
          headers: {
            Authorization: "Bearer " + getToken()
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
