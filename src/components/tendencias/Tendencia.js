import React from "react";
import "./tendencia.css";
export const Tendencia = ({ img, titulo, descripcion, nuevo }) => {
  return (
    <div className="card">
      <img src={img} />
      <div className="descripcion">
        <div hidden={!nuevo}>NUEVO</div>
        <h5>{titulo}</h5>
        <p dangerouslySetInnerHTML={{ __html: descripcion }}></p>
      </div>
    </div>
  );
};
