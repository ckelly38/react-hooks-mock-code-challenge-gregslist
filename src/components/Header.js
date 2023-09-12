import React from "react";
import Search from "./Search";

function Header({filter, setFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filter={filter} setFilter={setFilter} />
    </header>
  );
}

export default Header;
