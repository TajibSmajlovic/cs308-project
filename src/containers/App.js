import React, { Component } from "react";

import Aux from "../hoc/Auxiliary/Auxiliary";
import Navigation from "../containers/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Footer />
      </Aux>
    );
  }
}

export default App;
