import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        Home
      </NavLink>

      <NavLink exact="true" activeclassname="active" to="/articles">
        Articles
      </NavLink>

      <NavLink exact="true" activeclassname="active" to="/evenements">
        Evenements
      </NavLink>
    </nav>
  );
};

export default NavBar;
