import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to="/">MovieApp</Link>
      </div>
      <div className="NavBar-Links">
        <Link to="/">Home</Link>
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  );
};

export default NavBar;
