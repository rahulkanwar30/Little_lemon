import React, { useState } from "react";
import logo from "../Img/HomeLogo.jpg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} width={150} height={40} alt="" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Menu</a>
      </li>
      <li>
        <a href="/">Reservations</a>
      </li>
      <li>
        <a href="/">Order Online</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Login</a>
      </li>

      </ul>
    </nav>
  );
};

export default Nav;