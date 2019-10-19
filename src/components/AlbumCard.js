// Lien Ho Hoang - 2019-10-19
import React from 'react'

function AlbumCard(props) {
  return (
    <div className="UserCard">
      <div className="card-body">
        <p className="user-name">
          {props.album.title}
        </p>
      </div>
    </div>
  );
}

export default AlbumCard;