import React, { Component } from 'react'

class SearchDetails extends Component {
  render() {
    return (
      <div className="search-details-container">
          <div className="search-name">
            <h3>Taipei</h3>
          </div>
          <div className="events-info">
            <div>
                <p className="event-type">Meetups found</p>
                <p className="event-value">27</p>
            </div>
            <div>
                <p className="event-type">Actions found</p>
                <p className="event-value">4</p>
            </div>
            <div>
                <p className="event-type">Other events found</p>
                <p className="event-value">4</p>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchDetails;
