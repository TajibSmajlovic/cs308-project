import React from "react";
import { Icon } from "semantic-ui-react";

class SeatsMap extends React.Component {

  displaySeats = () =>
    this.props.seats.map(seat => (
      <Icon
        id={seat.id}
        key={seat.id}
        name={seat.user ? ( seat.user === this.props.user._id ? "calendar minus" : "address book" ) : "calendar check outline"}
        size="big"
        link
        onClick={() => this.props.changeHandler(seat.id)}
      />
    ));

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.displaySeats()}
      </div>
    );
  }
}

export default SeatsMap