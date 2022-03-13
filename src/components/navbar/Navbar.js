import React from "react";
import viajes from "../../assets/logo/logo_01.png";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={viajes} />
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="tendencias"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            TENDENCIAS
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            BLOG
          </Link>
        </li>
      </ul>
      <img
        className="menu"
        src="https://img.icons8.com/android/24/000000/menu.png"
      />
    </div>
  );
};
