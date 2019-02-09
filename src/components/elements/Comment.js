import React, { Component } from 'react'
import profileImg from '../../assets/profiles/image-2.png'

class Comment extends Component {
  render() {
    return (
      <div className="comment-container">
            <div className="profile-image">
                <img src={profileImg} alt="Italian Trulli"></img>
            </div>
            <div className="comment-detail">
                <div className="comment-top">
                    <div className="profile-name">
                        Guillaume Meigniez
                    </div>
                    <div className="comment-date">
                        Nov. 22 2018
                    </div>
                </div>
                <div className="comment-content">
                    <div className="comment-title">
                        Sed ut perspiciatis unde omnis iste natus error.
                    </div>
                    <div className="comment-text">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Comment;
