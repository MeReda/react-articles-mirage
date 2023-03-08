import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink className="fs-7" exact="true" activeclassname="active" to="/">
        Home
      </NavLink>

      <NavLink
        className="fs-7"
        exact="true"
        activeclassname="active"
        to="/articles"
      >
        Articles
      </NavLink>

      <NavLink
        className="fs-7"
        exact="true"
        activeclassname="active"
        to="/evenements"
      >
        Evenements
      </NavLink>

      <NavLink
        className="fs-7"
        exact="true"
        activeclassname="active"
        to="/annonces"
      >
        Annonces
      </NavLink>
    </nav>
  );
};

export default NavBar;
