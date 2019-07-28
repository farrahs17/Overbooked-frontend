import React from "react";
import EventsList from "../EventsList/EventsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";

const AdminHomePage = () => {
  return (
    <div>
      <EventsList />
    </div>
  );
};

export default AdminHomePage;
