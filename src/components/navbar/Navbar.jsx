import React from "react";
import "./navbar.css";
import logo from "../../images/logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
