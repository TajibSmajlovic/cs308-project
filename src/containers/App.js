import React, { Component } from "react";

import Aux from "../hoc/Auxiliary/Auxiliary";
import EventList from "../components/event-list/eventlist";
import Navigation from "../containers/Navigation/Navigation";
import Footer from "../components/Footer/Footer";


class App extends Component {

  state = {
    events: [
        { id:1, name: "Film", description: "Opasan neki ", venue: "Kino", img: "/" },
        { id:2, name: "Film2", description: "Opasan neki2 ", venue: "Kino2", img: "file:///Users/alemdinarevic/Desktop/06%20Pics/Screenshot%202019-03-14%20at%2000.30.37.png" },
        { id:3, name: "Film3", description: "Opasan neki3 ", venue: "Kino3", img: "file:///Users/alemdinarevic/Desktop/06%20Pics/Screenshot%202019-03-14%20at%2000.30.37.png" },
        { id:4, name: "Film4", description: "Opasan neki4 ", venue: "Kino4", img: "file:///Users/alemdinarevic/Desktop/06%20Pics/Screenshot%202019-03-14%20at%2000.30.37.png" },
        { id:5, name: "Film5", description: "Opasan neki5 ", venue: "Kino5", img: "file:///Users/alemdinarevic/Desktop/06%20Pics/Screenshot%202019-03-14%20at%2000.30.37.png" },
        { id:6, name: "Film6", description: "Opasan neki6 ", venue: "Kino6", img: "file:///Users/alemdinarevic/Desktop/06%20Pics/Screenshot%202019-03-14%20at%2000.30.37.png" },
    ]
  }

  render() {
    return (
      <Aux>
        <Navigation />
        <div>
            <EventList events={this.state.events}/>
            <EventList events={this.state.events}/>
        </div>
        <Footer />
      </Aux>
    );
  }
}

export default App;