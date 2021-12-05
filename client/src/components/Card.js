import React from 'react';

const Card = (props) => {

    const {Musics} = props;
    // Simplification of :
    // Const Musics = props.Musics

    return (
        <li className="card">
            <img src={Musics.thumbnail} alt="Pochette du CD"/>
            <div className="data-container">
                <ul>
                    <li>{Musics.name}</li> {/* Tile of the music */}
                    <li>{Musics.author}</li>
                    <li>{Musics.releaseDate}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;