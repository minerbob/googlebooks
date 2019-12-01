import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return ( 
  
    <div>
  <ul className="nav nav-tabs">
    
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link>
      </li>
    </ul>

<div className="jumbotron">
<h1 className="display-4">(React) Google Books Search</h1>
<h1 className="display-10">Search for and Save Books of Intrest</h1>
</div>
</div>

  );
}

export default NavTabs;
