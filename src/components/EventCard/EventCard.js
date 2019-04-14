import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="EventCard">
      <div className="EventInfo">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>{event.venue}</p>
      </div>
      <div className="EventPoster" style={{ backgroundImage: event.img }} />
    </div>
  );
};

export default EventCard;
