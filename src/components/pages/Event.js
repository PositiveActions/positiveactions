import React, { Component } from 'react';
import Comment from '../elements/Comment';

class Event extends Component {
  render() {
    return (
      <div className="event-container">
          <div className="event-image">
            This is the event image.
          </div>
          <div className="event-details">
            <div className="event-map">
                This is the event map.
            </div>
            <div className="event-description">
                <div className="event-title">
                    <div className="event-name">
                        Event name
                    </div>
                    <div className="event-address">
                        37, Davis St. Taipei
                    </div>
                </div>
                <div className="event-description-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="event-description-details">
                    <div className="event-description-details-infos">
                        Event infos
                    </div>
                    <div className="event-comments">
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Event;
