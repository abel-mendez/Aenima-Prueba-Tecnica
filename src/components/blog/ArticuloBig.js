import React from "react";
import reloj from "../../assets/iconos/time.png";
import "./articuloBig.css";
export const ArticuloBig = ({
  img,
  categoria,
  titulo,
  descripcion,
  tiempo,
}) => {
  return (
    <div className="articulo-big">
      <img src={img} />
      <h6>{categoria}</h6>
      <div className="articulo-descripcion">
        <h5>{titulo}</h5>
        <p>{descripcion}</p>
        <p className="time">
          <img src={reloj} />
          {tiempo}
        </p>
      </div>
    </div>
  );
};
