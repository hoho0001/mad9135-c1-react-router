import React from 'react'

function PostCard(props) {
  return (
    <div className="PostCard">
      <div className="card-body">
        <p className="post-name">
          {props.post.title}
        </p>
        <p>{props.post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;