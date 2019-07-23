import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../Utils/utils";

class Checkout extends Component {
  componentDidMount() {
    // axios.get(`http://localhost:8080/api/get-event/${id}`).then(event => {
    //   this.setState(event.data);
    // });
  }
  render() {
    return (
      <div>
        <h2>Checkout</h2>
      </div>
    );
  }
}

export default Checkout;
