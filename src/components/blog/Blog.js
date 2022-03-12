import React from "react";
import "./blog.css";
import { articulos } from "../info/inforArticulos";
import { ArticuloBig } from "./ArticuloBig";
import { ArticuloSmal } from "./ArticuloSmal";
export const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-float" id="blog">
        <h2>BLOG</h2>
        <div className="articulos">
          <div className="articulos-big">
            {articulos
              .reverse()
              .slice(0, 2)
              .map(({ id, img, categoria, titulo, descripcion, tiempo }) => (
                <ArticuloBig
                  key={id}
                  img={img}
                  categoria={categoria}
                  titulo={titulo}
                  descripcion={descripcion}
                  tiempo={tiempo}
                />
              ))}
          </div>
          <div className="articulos-small">
            {articulos.slice(2, 5).map(({ id, img, titulo, tiempo }) => (
              <ArticuloSmal
                key={id}
                img={img}
                titulo={titulo}
                tiempo={tiempo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
