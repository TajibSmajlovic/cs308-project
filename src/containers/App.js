import React, { Component } from "react";
import { connect } from 'react-redux'
import Aux from "../hoc/Auxiliary/Auxiliary";
import EventList from "../components/EventList/EventList";
import Navigation from "../containers/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

import * as actions from '../store/creators/async-creators' 

class App extends Component {

  state = {
    recent: [],
    all: []
  }

  componentWillMount(){
    this.props.getEvents()
      .then(res => {
        console.log(res)
        this.setState({
          recent: res[0].data,
          all: res[1].data
        })
      })
  }
  

  render() {
    return (
      <Aux>
        <Navigation />
        <EventList title="Most Recent" events={this.state.recent} />
        <EventList title="All" events={this.state.all} />
        <Footer />
      </Aux>
    );
  }
}

export default connect(null, actions)(App);
