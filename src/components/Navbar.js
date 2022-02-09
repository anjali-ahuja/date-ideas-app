import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiHeartsLine } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            {" "}
            <RiHeartsLine className="navbar-icon" />
            Date Ideas
          </Link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
