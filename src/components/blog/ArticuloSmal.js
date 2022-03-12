import React from "react";
import "./articuloSmall.css";

import reloj from "../../assets/iconos/time.png";
export const ArticuloSmal = ({ img, titulo, tiempo }) => {
  return (
    <div className="articulo-small">
      <img src={img} />
      <div className="descripcion-small">
        <h5>{titulo}</h5>
        <p className="time">
          <img src={reloj} />
          {tiempo}
        </p>
      </div>
    </div>
  );
};
