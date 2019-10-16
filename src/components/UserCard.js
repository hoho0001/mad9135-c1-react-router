import React from 'react'
import './UserCard.css'

function UserCard(props) {
  return (
    <div
      className="UserCard"
      >
      <div className="card-body">
        <img src=""></img>
        <p className="user-name">
          {props.user.name}
          <br />
          
        </p>
        <p className="user-login">{props.user.username}</p>
        <p className="">{props.user.email}</p>
        <button onClick={() => props.handleGetPosts(props.user)}>Posts</button>
        <button onClick={() => props.handleGetAlbums(props.user)}>Albums</button>
      </div>
    </div>
  );
}

export default UserCard;