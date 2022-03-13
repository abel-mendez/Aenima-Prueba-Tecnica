import React from "react";
import viaje from "../../assets/logo/logo_02.png";
import facebook from "../../assets/iconos/facebook.png";
import instagram from "../../assets/iconos/instagram.png";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <img src={viaje} />
      <div>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} />
        </a>
      </div>
    </footer>
  );
};
