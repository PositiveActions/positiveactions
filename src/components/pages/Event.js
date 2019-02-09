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
                        <div className="event-details-global">
                            <h4 className="event-info-subtitle">Useful Information</h4>
                            <div className="event-dates">
                                <i className="material-icons tiny">today</i>
                                <p>12/25/2018</p>
                            </div>
                            <div className="event-category">
                                <i className="material-icons tiny">view_headline</i> 
                                <p>Veganism</p>
                            </div>
                            <div className="event-fees">
                                <i className="material-icons tiny">attach_money</i> 
                                <p>Free event</p>
                            </div>
                            <div className="event-attending">
                                <i className="material-icons tiny">people</i> 
                                <p>Attending : 17</p>
                            </div>
                        </div>
                        <div className="event-contacts">
                            <h4 className="event-info-subtitle">Contact</h4>
                            <div className="event-contact-phone">
                                <i className="material-icons tiny">link</i> 
                                <p><a href="/">eventname.com</a></p>
                            </div>
                            <div className="event-contact-email">
                                <i className="material-icons tiny">email</i> 
                                <p>eventname@gmail.com</p>
                            </div>
                            <div className="event-contact-address">
                                <i className="material-icons tiny">home</i> 
                                <p>1002 Davidson Av. Taipei</p>
                            </div>
                            <div className="event-contact-phone">
                                <i className="material-icons tiny">phone</i> 
                                <p>333-222-111</p>
                            </div>
                        </div>
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
