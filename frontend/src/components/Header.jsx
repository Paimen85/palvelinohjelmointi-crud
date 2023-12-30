import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Header = () => {

  const navigate = useNavigate()
  const isAuth = AuthService.isUserLoggedIn();

  const handleLogout = () => {
    AuthService.logout()
    navigate("/login")
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              {isAuth && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/events"}
                  >
                    All Events
                  </Link>
                </li>
              )}

              {isAuth && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/add-event"}>
                    Add new
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign Up
                </Link>
              </li>
            )}

            {!isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
            )}
            {isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to={"/login"} onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
