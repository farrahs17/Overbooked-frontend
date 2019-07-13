import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Event = ({ event }) => {
  return (
    <div className="event" id={event.id}>
      <div className="event-header">
        <h2>{event.title}</h2>
        <time>{moment(event.startsAt).format("MMMM Do YYYY")}</time>
        <time>{moment(event.endsAt).format("MMMM Do YYYY")}</time>
        <p>{event.category}</p>
      </div>
      <figure>
        <img className="post-img" src={event.image} alt={event.title} />
      </figure>
      <p>{event.description}</p>

      <Link to={`/event-details/${event.id}`}>See more</Link>
    </div>
  );
};

export default Event;
