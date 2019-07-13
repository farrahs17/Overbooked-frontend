import React from "react";

class TicketTiers extends React.Component {
  state = {
    tickets: [{ type: "", price: 0 }]
  };

  addTicket = e => {
    this.setState(prevState => ({
      tickets: [...prevState.tickets, { type: "", price: "" }]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    if (["type", "price"].includes(e.target.className)) {
      let tickets = [...this.state.tickets];
      tickets[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ tickets }, () => console.log(this.state.tickets));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    let { ticket } = this.state;
    return (
      <div>
        {this.state.tickets.map((val, id) => {
          let ticketId = `ticket-${id}`;
          let priceId = `price-${id}`;
          return (
            <div key={id}>
              <label htmlFor="ticket-type">
                Ticket Type
                <select
                  value={this.state.tickets.type}
                  onChange={this.handleCategoryChange}
                  name={ticketId}
                  className="type"
                  data-id={id}
                  id={ticketId}
                >
                  <option value="Early bird">Early bird</option>
                  <option value="Regular">Regular</option>
                  <option value="VIP">VIP</option>
                </select>
              </label>
              <label htmlFor="ticket-price">
                <input
                  type="number"
                  name={priceId}
                  className="price"
                  data-id={id}
                  id={priceId}
                />
              </label>
            </div>
          );
        })}
        <button onClick={this.addTicket}>Add new ticket</button>
      </div>
    );
  }
}

export default TicketTiers;
