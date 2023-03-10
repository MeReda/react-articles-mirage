import React from "react";
import { NavLink } from "react-router-dom";

const FrNavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React Route
        </a>
        <button
          className="navbar-toggler ms-auto me-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <NavLink exact="true" end activeclassname="active" to="/fr">
              Home
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="articles">
              Articles
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="evenements">
              Evenements
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="annonces">
              Annonces
            </NavLink>

            <NavLink className="lang-button ms-md-1 text-center" to="/ar">
              ar
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FrNavBar;
