import React from "react";

const Card = (props) => {
  const { music } = props;
  // Simplification of :
  // Const musics = props.Musics

  return (
    <div className="card">
      <img src={music.thumbnail} alt="Pochette du CD" />
      <div className="data-container">
        <ul>
          <li>{music.name}</li> {/* Tile of the music */}
          <li>{music.author}</li>
          <li>{music.releaseDate}</li>
          <li>
            <a href={music.youtube} alt="Lien vers Youtube">
              Ecouter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
