import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  console.log("incontainer: listings = ", listings);

  let mylistingobjs = null;
  if (listings === undefined || listings === null || listings.length < 1);
  else
  {
    mylistingobjs = listings.map((listing) => 
      <ListingCard key={listing.id} listing={listing} image={listing.image} />
    );
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {mylistingobjs}
      </ul>
    </main>
  );
}

export default ListingsContainer;
