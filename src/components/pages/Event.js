import React, { Component } from 'react'

class Event extends Component {
  render() {
    return (
      <div className="event-container">
          <div className="event-image">
            This is the event image.
          </div>
          <div className="event-map">
            This is the event map.
          </div>
          <div className="event-infos">
            This is the event infos.
          </div>
      </div>
    )
  }
}

export default Event;
