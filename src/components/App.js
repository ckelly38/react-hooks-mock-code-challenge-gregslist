import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

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

  console.log("listings = ", listings);
  console.log("loaded = " + loaded);

  return (
    <div className="app">
      {loaded ?
        <>
          <Header listings={listings} />
          <ListingsContainer listings={listings} />
        </>
       : <p>Loading...</p>}
    </div>
  );
}

export default App;
