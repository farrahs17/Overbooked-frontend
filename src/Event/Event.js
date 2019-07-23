import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getToken } from "../Utils/utils";

const Event = ({ event, handleDelete }) => {
  return (
    <Card style={{ width: "20rem" }} id={event.id}>
      <Link to={`/event-details/${event.id}`} className="card-link">
        <Card.Img variant="top" src={`http://localhost:8080/${event.image}`} />
        <Card.Body>
          <Link to={`/event-details/${event.id}`}>
            <Card.Title>{event.title}</Card.Title>
          </Link>
          <Card.Subtitle>{event.category}</Card.Subtitle>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text className="text-muted">
            {moment(event.startsAt).format("MMMM Do YYYY")} -
            {moment(event.endsAt).format("MMMM Do YYYY")}
          </Card.Text>
          <Card.Link variant="primary">
            <Link to={`/event-details/${event.id}`}>See more</Link>
          </Card.Link>
          <Card.Link variant="primary">Buy Ticket</Card.Link>
          <Card.Link variant="primary" onClick={handleDelete}>
            Delete
          </Card.Link>
          <Card.Link variant="primary">
            <Link to={`/admin/edit-event/${event.id}`}>Edit</Link>
          </Card.Link>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Event;
