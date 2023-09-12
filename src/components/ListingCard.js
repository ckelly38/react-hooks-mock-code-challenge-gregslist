import React, {useState} from "react";

function ListingCard({listing, delobj, image = "https://via.placeholder.com/300x300"}) {
  const [listingFavoriteObj, setListingFavoriteObj] = useState({
    id: listing.id,
    isFavorite: false
  });

  function handleClick(event)
  {
    //toggle the favorite status
    let nwfavobj = {...listingFavoriteObj};
    nwfavobj.isFavorite = !listingFavoriteObj.isFavorite;
    setListingFavoriteObj(nwfavobj);
  }

  function handleDelClick(event)
  {
    delobj(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={listing.description} />
      </div>
      <div className="details">
        {listingFavoriteObj.isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
