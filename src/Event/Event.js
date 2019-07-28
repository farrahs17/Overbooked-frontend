import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Event.scss";
const Event = ({ event, handleDelete, isAdmin }) => {
  return (
    <Card className="bg-dark text-white card-event" id={event.id}>
      <Card.Img
        className="event-image"
        variant="top"
        src={`http://localhost:8080/${event.image}`}
      />
      <Card.ImgOverlay className="card-overlay">
        <Card.Title className="card-title mb-4">{event.title}</Card.Title>
        <Card.Subtitle className="card-subtitle mb-5">
          Category: {event.category}
        </Card.Subtitle>

        <Card.Text>
          Starts At: {moment(event.startsAt).format("MMMM Do YYYY")}
        </Card.Text>
        <Card.Text>
          Ends At: {moment(event.endsAt).format("MMMM Do YYYY")}
        </Card.Text>

        <Button variant="outline-secondary" className="mt-3 mr-2">
          <Link
            className="text-white card-button "
            to={`/event-details/${event.id}`}
          >
            View Event
          </Link>
        </Button>
        {/* </Card.Link> */}
        {isAdmin ? (
          <>
            <Button
              variant="outline-secondary"
              className="mt-3 mr-2 text-white"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button variant="outline-secondary" className="mt-3 mr-2">
              <Link
                className="text-white card-button "
                to={`/admin/edit-event/${event.id}`}
              >
                Edit
              </Link>
            </Button>
          </>
        ) : (
          <Card.Link variant="primary">Buy Ticket</Card.Link>
        )}
      </Card.ImgOverlay>
    </Card>
    // <Card style={{ width: "20rem" }} id={event.id}>
    //   <Link to={`/event-details/${event.id}`} className="card-link">
    //     <Card.Img
    //       className="event-image"
    //       variant="top"
    //       src={`http://localhost:8080/${event.image}`}
    //     />
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/event-details/${event.id}`}>
    //       <Card.Title>{event.title}</Card.Title>
    //     </Link>
    //     <Card.Subtitle>{event.category}</Card.Subtitle>
    //     <Card.Text>{event.description}</Card.Text>
    //     <Card.Text className="text-muted">
    //       {moment(event.startsAt).format("MMMM Do YYYY")} -
    //       {moment(event.endsAt).format("MMMM Do YYYY")}
    //     </Card.Text>
    //     <Card.Link variant="primary">
    //       <Link to={`/event-details/${event.id}`}>See more</Link>
    //     </Card.Link>

    //     {isAdmin ? (
    //       <>
    //         <Card.Link variant="secondary" size="sm" onClick={handleDelete}>
    //           Delete
    //         </Card.Link>
    //         <Card.Link variant="secondary" size="sm">
    //           <Link to={`/admin/edit-event/${event.id}`}>Edit</Link>
    //         </Card.Link>
    //       </>
    //     ) : (
    //       <Card.Link variant="primary">Buy Ticket</Card.Link>
    //     )}
    //   </Card.Body>
    // </Card>
  );
};

export default Event;
