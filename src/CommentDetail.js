import React from 'react';
import faker from "faker";

function CommentDetail(props) {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.commenter}
          </a>
          <div className="metadata">
            <span className="data">Today at {props.time} </span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    );
}

export default CommentDetail;