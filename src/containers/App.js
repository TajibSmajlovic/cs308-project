import React, { Component } from "react";

import Aux from "../hoc/Auxiliary/Auxiliary";
import Test from "../components/test";

class App extends Component {

  
  render() {
    return (
      <Aux>
        <Test />
      </Aux>
    );
  }
}

export default App;
