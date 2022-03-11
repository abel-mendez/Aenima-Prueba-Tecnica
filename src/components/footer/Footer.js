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
        <img src={instagram} />
        <img src={facebook} />
      </div>
    </footer>
  );
};
