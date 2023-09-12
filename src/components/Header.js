import React from "react";
import Search from "./Search";

function Header({listings, filter, setFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} filter={filter} setFilter={setFilter} />
    </header>
  );
}

export default Header;
