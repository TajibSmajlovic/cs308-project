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
    all: [],
	search: '',
	searchResults: []
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

  handleSearchInput = event => {
	this.setState({search: event.target.value},() => this.searchMessages())
  	}

	searchMessages = () => {
		const allEvents = [...this.state.all];
		const regex = new RegExp(this.state.search, "gi");
		const searchResults = allEvents.reduce((accumulator, event) => {
			if (event.title && event.title.match(regex)) {
				accumulator.push(event);
			}
			return accumulator;
		}, []);
		this.setState({ searchResults });
	};


  render() {
    return (
      <Aux>
        <Navigation search={this.handleSearchInput}/>
		  {this.state.searchResults.length > 0 && this.state.search !== ''  ? <EventList title="Searched" events={this.state.searchResults} /> : null}
        <EventList title="Most Recent" events={this.state.recent} />
        <EventList title="All" events={this.state.all} />
        <Footer />
      </Aux>
    );
  }
}

export default connect(null, actions)(App);
