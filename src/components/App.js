import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect((() => {
    fetch("http://localhost:6001/listings").then((response) => response.json()).then(function(response)
    {
      console.log("response = ", response);
      setListings(response);
      setIsLoaded(true);
    }).catch(function(err){
      console.error("there was a problem getting the data from the server!");
      console.error(err);
      alert("Error: there was a problem getting the data from the server!");
    });
  }), []);

  function deleteListing(id)
  {
    console.log("delListing: id = " + id);
    let configobj = {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    };
    fetch("http://localhost:6001/listings/" + id, configobj).then((response) => response.json())
    .then(function(response)
    {
      console.log("response = ", response);
      console.log("id of listing to remove = " + id);
      
      let nwlistings = listings.filter((listing) => {
        if (listing.id === id) return false;
        else return true;
      });
      setListings(nwlistings);
      setIsLoaded(true);
      console.log("successfully removed the item!");
      alert("successfully removed the item!");
    }).catch(function(err){
      console.error("there was a problem removing the data from the server!");
      console.error(err);
      alert("Error: there was a problem removing the data from the server!");
    });
  }

  function compareStrings(a, b)
  {
    if (a === undefined || a === null)
    {
      if (b === undefined || b === null) return 0;
      else return 1;
    }
    else
    {
      if (b === undefined || b === null) return -1;
      //else;//do nothing
    }

    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
  function compareLocations(a, b)
  {
    if (a === undefined || a === null)
    {
      if (b === undefined || b === null) return 0;
      else return compareStrings(null, b.location);
    }
    else
    {
      if (b === undefined || b === null) return compareStrings(a.location, null);
      else return compareStrings(a.location, b.location);
    }
  }

  console.log("listings = ", listings);
  console.log("loaded = " + loaded);
  console.log("filter = " + filter);

  let srtedlistings = listings.map((listing) => listing);
  srtedlistings.sort(compareLocations);
  console.log("srtedlistings = ", srtedlistings);

  return (
    <div className="app">
      {loaded ?
        <>
          <Header filter={filter} setFilter={setFilter} />
          <ListingsContainer listings={srtedlistings} filter={filter} delobj={deleteListing} />
        </>
       : <p>Loading...</p>}
    </div>
  );
}

export default App;
