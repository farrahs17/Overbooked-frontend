import React from "react";

class TicketTiers extends React.Component {
  render() {
    let { tickets, handleTicketChange, addTicket, value } = this.props;
    return (
      <div>
        {tickets.map((val, id) => {
          let ticketId = `ticket-${id}`;
          let priceId = `price-${id}`;
          return (
            <div key={id}>
              <label htmlFor="ticket-type">
                Ticket Type
                <select
                  value={tickets.type}
                  onChange={handleTicketChange}
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
                  onChange={handleTicketChange}
                />
              </label>
            </div>
          );
        })}
        <button onClick={addTicket} type="button">
          Add new ticket
        </button>
      </div>
    );
  }
}

export default TicketTiers;
