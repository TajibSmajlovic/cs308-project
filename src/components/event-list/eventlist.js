import React from 'react'

import EventCard from '../event-card/eventcard'

import './eventlist.css'

const EventList = props => {
    return(
        <div className="EventList">
            {props.events.map(event => {
                return <EventCard key={event.id} event={event}/>
            })}
        </div>
    )
}

export default EventList