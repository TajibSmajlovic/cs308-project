import React from "react";
import { Icon } from "semantic-ui-react/index";

export default class TheatreSeats extends React.Component {
  state = {
    seatsMain: [
      {
        id: 1,
        available: true
      },
      {
        id: 2,
        available: false
      },
      {
        id: 3,
        available: true
      },
      {
        id: 4,
        available: false
      },
      {
        id: 5,
        available: true
      },
      {
        id: 6,
        available: false
      },
      {
        id: 7,
        available: true
      },
      {
        id: 8,
        available: false
      },
      {
        id: 9,
        available: true
      },
      {
        id: 10,
        available: true
      },
      {
        id: 11,
        available: true
      },
      {
        id: 12,
        available: true
      },
      {
        id: 13,
        available: true
      },
      {
        id: 14,
        available: true
      },
      {
        id: 15,
        available: true
      },
      {
        id: 16,
        available: true
      },
      {
        id: 17,
        available: true
      },
      {
        id: 18,
        available: true
      },
      {
        id: 19,
        available: true
      },
      {
        id: 20,
        available: true
      },
      {
        id: 21,
        available: true
      },
      {
        id: 22,
        available: false
      },
      {
        id: 23,
        available: true
      },
      {
        id: 24,
        available: false
      },
      {
        id: 25,
        available: true
      },
      {
        id: 26,
        available: false
      },
      {
        id: 27,
        available: true
      },
      {
        id: 28,
        available: false
      },
      {
        id: 29,
        available: true
      },
      {
        id: 30,
        available: true
      },
      {
        id: 31,
        available: true
      },
      {
        id: 32,
        available: true
      },
      {
        id: 33,
        available: true
      },
      {
        id: 34,
        available: true
      },
      {
        id: 35,
        available: true
      },
      {
        id: 36,
        available: true
      },
      {
        id: 37,
        available: true
      },
      {
        id: 38,
        available: true
      },
      {
        id: 39,
        available: true
      },
      {
        id: 40,
        available: false
      },
      {
        id: 41,
        available: true
      },
      {
        id: 42,
        available: true
      },
      {
        id: 43,
        available: true
      },
      {
        id: 44,
        available: true
      },
      {
        id: 45,
        available: true
      },
      {
        id: 46,
        available: true
      },
      {
        id: 47,
        available: true
      },
      {
        id: 48,
        available: true
      },
      {
        id: 49,
        available: true
      },
      {
        id: 50,
        available: false
      }
    ],
    seatsLeft: [
      {
        id: 51,
        available: true
      },
      {
        id: 52,
        available: true
      },
      {
        id: 53,
        available: true
      },
      {
        id: 54,
        available: true
      },
      {
        id: 55,
        available: true
      },
      {
        id: 56,
        available: true
      },
      {
        id: 57,
        available: true
      },
      {
        id: 58,
        available: true
      },
      {
        id: 59,
        available: true
      },
      {
        id: 60,
        available: false
      },
      {
        id: 61,
        available: true
      },
      {
        id: 62,
        available: true
      },
      {
        id: 63,
        available: true
      },
      {
        id: 64,
        available: true
      },
      {
        id: 65,
        available: true
      },
      {
        id: 66,
        available: true
      },
      {
        id: 67,
        available: true
      },
      {
        id: 68,
        available: true
      },
      {
        id: 69,
        available: true
      },
      {
        id: 70,
        available: true
      },
      {
        id: 71,
        available: true
      },
      {
        id: 72,
        available: true
      },
      {
        id: 73,
        available: true
      },
      {
        id: 74,
        available: true
      },
      {
        id: 75,
        available: true
      }
    ],
    seatsRight: [
      {
        id: 76,
        available: true
      },
      {
        id: 77,
        available: true
      },
      {
        id: 78,
        available: true
      },
      {
        id: 79,
        available: true
      },
      {
        id: 80,
        available: true
      },
      {
        id: 81,
        available: true
      },
      {
        id: 82,
        available: true
      },
      {
        id: 83,
        available: true
      },
      {
        id: 84,
        available: true
      },
      {
        id: 85,
        available: true
      },
      {
        id: 86,
        available: true
      },
      {
        id: 87,
        available: true
      },
      {
        id: 88,
        available: true
      },
      {
        id: 89,
        available: true
      },
      {
        id: 90,
        available: true
      },
      {
        id: 91,
        available: true
      },
      {
        id: 92,
        available: true
      },
      {
        id: 93,
        available: true
      },
      {
        id: 94,
        available: true
      },
      {
        id: 95,
        available: true
      },
      {
        id: 96,
        available: true
      },
      {
        id: 97,
        available: true
      },
      {
        id: 98,
        available: true
      },
      {
        id: 99,
        available: true
      },
      {
        id: 100,
        available: true
      }
    ]
  };

  displaySeats = seats =>
    seats.map(seat => (
      <Icon
        id={seat.id}
        // available={seat.available}
        name={seat.available ? " calendar check outline" : "calendar minus"}
        disabled={!seat.available}
        size="big"
        link
      />
    ));

  render() {
    const { seatsMain, seatsLeft, seatsRight } = this.state;

    return (
      <div style={{ display: "flex", textAlign: "center" }}>
        <div style={{ width: 150 }}>{this.displaySeats(seatsLeft)}</div>
        <div style={{ width: 350, marginTop: 150 }}>
          {this.displaySeats(seatsMain)}
        </div>
        <div style={{ width: 150 }}>{this.displaySeats(seatsRight)}</div>
      </div>
    );
  }
}
