import React from 'react'

function AlbumCard(props) {
  return (
    <div className="AlbumCard">
      <div className="card-body">
        <p className="album-name">
          {props.album.title}
        </p>
      </div>
    </div>
  );
}

export default AlbumCard;