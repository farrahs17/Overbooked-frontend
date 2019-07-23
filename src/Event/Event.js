import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "react-bootstrap/Card";

const Event = ({ event, handleDelete, isAdmin }) => {
  return (
    <Card style={{ width: "20rem" }} id={event.id}>
      <Link to={`/event-details/${event.id}`} className="card-link">
        <Card.Img variant="top" src={`http://localhost:8080/${event.image}`} />
      </Link>
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

        {isAdmin ? (
          <>
            <Card.Link variant="primary" onClick={handleDelete}>
              Delete
            </Card.Link>
            <Card.Link variant="primary">
              <Link to={`/admin/edit-event/${event.id}`}>Edit</Link>
            </Card.Link>
          </>
        ) : (
          <Card.Link variant="primary">Buy Ticket</Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default Event;
