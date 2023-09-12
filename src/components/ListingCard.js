import React from "react";

function ListingCard({listing, image = "https://via.placeholder.com/300x300"}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={listing.description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
