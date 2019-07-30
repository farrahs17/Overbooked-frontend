import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Header from "../Header/Header";

class GetUsers extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/api/get-users").then(response => {
      this.setState({
        users: response.data.users
      });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <Table
            className="mt-5"
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: 240 }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            {this.state.users.map(user => {
              return (
                <tbody>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
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

export default GetUsers;
