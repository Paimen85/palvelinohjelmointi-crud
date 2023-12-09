import React from "react";

const Header = () => {
  return (
    <header> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        
          <a className="navbar-brand" href="#">
            Events
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  All Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add new 
                </a>
              </li>
            </ul>
          </div>
        
      </nav>
    </header>
  );
};

export default Header;
