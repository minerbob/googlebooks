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
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li>
    </ul>

<div class="jumbotron">
<h1 class="display-4">(React) Google Books Search</h1>
<h1 class="display-10">Search for and Save Books of Intrest</h1>
</div>
</div>

  );
}

export default NavTabs;
