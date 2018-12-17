import React, { Component } from 'react'

class EventCard extends Component {
  render() {
    return (
      <div className="event-card-container">
        <div className="event-image">
            This is the event image.
        </div>
        <div className="event-content">
            <div className="card-left">
                <div className="event-title">
                    Event title
                </div>
                <div className="event-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                </div>
                <div className="event-search-infos">
                    <div className="event-location">
                        <i className="material-icons tiny">my_location</i>
                        <p> 37, Davis St. Taipei</p>
                    </div>
                    <div className="event-dates">
                        <i className="material-icons tiny">today</i>
                        <p>12/25/2018</p>
                    </div>
                    <div className="event-dates">
                        <i className="material-icons tiny">view_headline</i> 
                        <p>Veganism</p>
                    </div>
                </div>
            </div>
            <div className="card-right">
                <div className="fees">
                    <i className="material-icons tiny">attach_money</i> 
                    <p>Free event</p>
                </div>
                <div className="attending">
                    <i className="material-icons tiny">people</i> 
                    <p>Attending : 17</p>
                </div>
                <a className="waves-effect waves-light btn btn-large" href="/events/1">Join the event</a>
            </div>
        </div>
      </div>
    )
  }
}

export default EventCard;
