import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className='nav-bar'>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/players" className="nav-link">
        Player List
      </NavLink>
      <NavLink to="/team" className="nav-link">
        My Team ({props.team.length})
      </NavLink>
    </div>
  );
};

export default NavBar;
