import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        
          <Link className="navbar-brand" to={"/"}>
            Events
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/events"}>
                  All Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/add-event"}>
                  Add new 
                </Link>
              </li>
            </ul>
          </div>
        
      </nav>
    </header>
  );
};

export default Header;
