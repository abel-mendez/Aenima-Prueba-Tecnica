import React from "react";
import { tendencias } from "../info/info";
import { Tendencia } from "./Tendencia";
import "./tendencias.css";
export const Tendencias = () => {
  return (
    <section className="tendencias">
      <h2>TENDENCIAS</h2>
      <div id="tendencias">
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
    </section>
  );
};
