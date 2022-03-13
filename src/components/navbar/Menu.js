import React from "react";
import "./menu.css";
import { Link, animateScroll as scroll } from "react-scroll";
export const Menu = ({ show, setShow }) => {
  return (
    <div hidden={show} className="menu-hamburguesa">
      <div>
        <img
          onClick={() => {
            setShow((e) => !e);
          }}
          src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png"
        />
        <ul>
          <li>
            <Link
              onClick={() => {
                setShow((e) => !e);
              }}
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
              onClick={() => {
                setShow((e) => !e);
              }}
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
              onClick={() => {
                setShow((e) => !e);
              }}
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
      </div>
    </div>
  );
};
