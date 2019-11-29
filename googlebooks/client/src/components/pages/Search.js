import React from "react";

function Search() {
  return (
    <div>
      <container>
      <h1 class="d-flex justify-content-center">Book Search</h1>
      <h8 class="d-flex justify-content-center">Book</h8>
      <input class="d-flex justify-content-end" id="searchInput"></input>
      <button id="searchButton">Search</button>
      </container>
      <br></br>
      <br></br>
      <container >
      <h1 class="d-flex justify-content-start">Result</h1>

      </container>
    </div>
  );
}

export default Search;
