import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Navigation from "../../containers/Navigation/Navigation";
import Footer from "../Footer/Footer";
import EventModifier from "../EventModifier/EventModifier";

import "./EventBox.css";

const EventBox = () => {
  return (
    <Aux>
      <Navigation />
      <EventModifier />
      <Footer />
    </Aux>
  );
};

export default EventBox;
