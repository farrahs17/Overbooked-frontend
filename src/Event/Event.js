import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Card } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

const Event = ({ event }) => {
  return (
    <div className="event" id={event.id}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={event.title} src={event.image} />}
      >
        <Meta title={event.title} description={event.description} />
        <p>{event.category}</p>
        <time>{moment(event.startsAt).format("MMMM Do YYYY")}</time>
        <time>{moment(event.endsAt).format("MMMM Do YYYY")}</time>
        <Link to={`/event-details/${event.id}`}>See more</Link>
      </Card>
      {/* //   <div className="event-header">
    //     <h2>{event.title}</h2>
    //     <time>{moment(event.startsAt).format("MMMM Do YYYY")}</time>
    //     <time>{moment(event.endsAt).format("MMMM Do YYYY")}</time>
    //     <p>{event.category}</p>
    //   </div>
    //   <figure>
    //     <img className="post-img" src={event.image} alt={event.title} />
    //   </figure>
    //   <p>{event.description}</p> */}
    </div>
  );
};

export default Event;
