import React, { useState } from "react";
const URL = 'http://localhost:6001/listings'
function ListingCard ({ item }) {
  const { id, description, image, location } = item
  const [ favorite, setFavorite ] = useState(false)

  const handleDelete = () => {
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        { favorite ? (
          <button onClick={ () => setFavorite(!favorite) } className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={ () => setFavorite(!favorite) } className="emoji-button favorite">☆</button>
        ) }
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button onClick={ handleDelete } className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
