// Lien Ho Hoang - 2019-10-19
import React from 'react'

function PostCard(props) {
  return (
    <div className="UserCard">
      <div className="card-body">
        <p className="user-name">
          {props.post.title}
        </p>
        <p>{props.post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;