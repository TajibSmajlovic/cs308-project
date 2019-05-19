import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Navigation from '../Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import EventModifier from '../../components/EventModifier/EventModifier'

import "./EventBox.css"

class EventBox extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                    <EventModifier />
                <Footer />
            </Aux>
        );
    }
}

export default EventBox;