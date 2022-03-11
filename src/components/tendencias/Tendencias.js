import React from "react";
import { tendencias } from "../info/info";
import { Tendencia } from "./Tendencia";
import "./tendencias.css";
export const Tendencias = () => {
  return (
    <div className="tendencias" id="tendencias">
      <h2>TENDENCIAS</h2>
      <div>
        {tendencias.map(({ id, img, titulo, descripcion, nuevo }) => (
          <Tendencia
            key={id}
            img={img}
            titulo={titulo}
            descripcion={descripcion}
            nuevo={nuevo}
          />
        ))}
      </div>
    </div>
  );
};
