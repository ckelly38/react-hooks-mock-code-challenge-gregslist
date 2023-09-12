import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, filter, delobj}) {
  console.log("incontainer: listings = ", listings);
  console.log("incontainer: filter = " + filter);

  let myfilterlistings = null;
  let mylistingobjs = null;
  if (listings === undefined || listings === null || listings.length < 1);
  else
  {
    if (filter === undefined || filter === null || filter.length < 1) myfilterlistings = listings;
    else
    {
      myfilterlistings = listings.filter((listing) => {
        //search by description
        let myfltrindx = listing.description.indexOf(filter);
        const indexnotvalid = (myfltrindx < 0 ||
          (myfltrindx > listing.description.length - 1 && listing.description.length > 0));
        return (listing.description === filter || !indexnotvalid);
      });
    }

    mylistingobjs = myfilterlistings.map((listing) => 
      <ListingCard key={listing.id} listing={listing} delobj={delobj} image={listing.image} />
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
