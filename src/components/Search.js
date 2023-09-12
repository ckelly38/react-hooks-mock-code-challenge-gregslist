import React from "react";

function Search({listings, filter, setFilter}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setFilter("" + e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
