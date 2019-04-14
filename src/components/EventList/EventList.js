import React from "react";

import EventCard from "../EventCard/EventCard";

import "./EventList.css";

const EventList = props => {
  return (
    <div className="EventList">
      {props.events.map(event => {
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventList;
