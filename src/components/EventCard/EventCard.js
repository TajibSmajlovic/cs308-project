import React from "react";
import ReservePage from "../../containers/ReservePage/ReservePage";

import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="EventCard">
      <div className="EventInfo">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>{event.venue}</p>
        <div style={{ marginTop: "60%" }}>
          <ReservePage />
        </div>
      </div>
      <div className="EventPoster" style={{ backgroundImage: event.img }} />
    </div>
  );
};

export default EventCard;
