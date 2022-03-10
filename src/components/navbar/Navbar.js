import React from "react";
import viajes from "../../assets/logo/logo_01.png";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={viajes} />
      <ul>
        <li>HOME</li>
        <li>TENDENCIAS</li>
        <li>BLOG</li>
      </ul>
    </div>
  );
};
