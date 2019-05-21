import React from "react";
import ReservePage from "../../containers/ReservePage/ReservePage";

import "./EventCard.css";

const EventCard = ({ event }) => {
  const date = new Date(event.date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return (
    <div className="EventCard">
      <div className="EventInfo">
        <h2>{event.title}</h2>
        <p>
          On <b>{date}</b> at <b>{event.time}</b> in <b>{event.venue}</b>
        </p>
        <div style={{ marginTop: "auto" }}>
          {/* <div style={{ marginTop: "60%" }}> */}
          <ReservePage event={event} />
        </div>
      </div>
      <div
        className="EventPoster"
        style={{ backgroundImage: `url('${event.imgUrl}')` }}
      />
    </div>
  );
};

export default EventCard;
