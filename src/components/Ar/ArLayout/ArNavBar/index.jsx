import React from "react";
import { NavLink } from "react-router-dom";

const ArNavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">النموذج الأولي</span>
        <button
          className="navbar-toggler me-auto me-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            <NavLink exact="true" end activeclassname="active" to="/ar">
              الرئيسية
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="articles">
              المقالات
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="evenements">
              مناسبات
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="annonces">
              إعلانات
            </NavLink>

            <NavLink className="lang-button me-md-1 text-center" to="/fr">
              fr
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ArNavBar;
