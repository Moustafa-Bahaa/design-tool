import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://scontent.fhrg1-1.fna.fbcdn.net/v/t39.30808-6/402317413_276882731997097_6935656371498867057_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g6c2hOs-hE4AX_uQQCN&_nc_ht=scontent.fhrg1-1.fna&oh=00_AfCFTVUJJERUsijihJoBmZPx0NA0VP-BqHL_cngGuObaGQ&oe=6577734B"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="navbar-middle">
        <span className="nav-item">Design</span>
        <span className="nav-item">Orders</span>
      </div>
      <div className="navbar-right">
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
