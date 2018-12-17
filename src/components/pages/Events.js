import React, { Component } from 'react'

import SearchDetails from '../elements/SearchDetails';
import EventsList from '../elements/EventsList';
import Search from '../layout/Search';

class Events extends Component {
  render() {
    return (
      <div >
          <Search history={this.props.history}/>
          <div className="map-container">
            <div className="map-title">
                <div className="map-location">Taipei</div>
                <div className="map-country">Taiwan</div>
            </div>
            <div className="map">
                This is the map container.
            </div>
            <SearchDetails />
            <EventsList />
          </div>
      </div>
    )
  }
}

export default Events;
