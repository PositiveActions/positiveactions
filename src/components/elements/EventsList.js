import React, { Component } from 'react'
import EventCard from './EventCard';

class EventsList extends Component {
  render() {
    return (
      <div className="events-list-container">
          <EventCard />
          <EventCard />
          <EventCard />
      </div>
    )
  }
}

export default EventsList;
