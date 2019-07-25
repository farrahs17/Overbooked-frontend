import React, { Component } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";

class FilterEvents extends Component {
  state = {
    category: ""
  };
  render() {
    return (
      <div className="category">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => this.props.handleCategoryChange("Arts")}>
              Arts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.props.handleCategoryChange("Business")}
            >
              Business
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.props.handleCategoryChange("Fashion")}
            >
              Fashion
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => this.props.handleCategoryChange("Music")}>
              Music
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => this.props.handleCategoryChange("Sports")}>
              Sports
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => this.props.handleCategoryChange("Cinema")}>
              Cinema
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default FilterEvents;
