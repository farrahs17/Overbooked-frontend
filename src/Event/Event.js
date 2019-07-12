import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Event = props => {
  return (
    <div className="event" id={props.id}>
      <div className="event-header">
        <h2>{props.title}</h2>
        {/* <time>{moment(props.starts_at).format("MMMM Do YYYY")}</time>
        <time>{moment(props.ends_at).format("MMMM Do YYYY")}</time> */}
        <p>{props.category}</p>
      </div>
      <figure>
        <img className="post-img" src={props.image} alt={props.title} />
      </figure>
      <p>{props.description}</p>
    </div>
  );
};

export default Event;
