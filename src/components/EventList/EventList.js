import React from "react";
// import { Header } from 'semantic-ui-react'
import EventCard from "../EventCard/EventCard";

import "./EventList.css";

const EventList = props => {
  return (
    <div className="EventListBox">
      <h2>{props.title}</h2>
      <div className="EventList">
        {props.events.map(event => {
          return <EventCard key={event._id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventList;
