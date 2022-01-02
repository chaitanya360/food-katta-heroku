import React from "react";
import { SearchBarStyle } from "./molecules.style";

function SearchBar(props) {
  return (
    <SearchBarStyle>
      <input />
      <div className="search-icon">
        <img src={`${process.env.PUBLIC_URL}/images/search.svg`} />
      </div>
    </SearchBarStyle>
  );
}

export default SearchBar;
