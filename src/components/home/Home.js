import React from "react";
import "./home.css";
import pin from "../../assets/iconos/ic_pin.png";
import page from "../../assets/iconos/nav_slider.svg";
import arrow from "../../assets/iconos/arrow.png";
export const Home = () => {
  return (
    <main id="home" className="home">
      <div className="section1">
        <div>
          <h1>
            <img src={pin} /> AMERICA DEL SUR
          </h1>
          <hr />
          <h3>Lugares maravillosos por America del Sur </h3>
          <p>
            Estos son algunos lugares que eligen la mayoría de los turistas que
            visitan America del Sur.
          </p>
        </div>
      </div>
      <div className="section2">
        <div>
          <img src={page} />
          <div className="container">
            <h4>
              PRÓXIMA AVENTURA <img src={arrow} />
            </h4>
            <h5>Europa Meridional</h5>
            <p>Forman parte veinte países, ej. España, Francia, etc.</p>
          </div>
        </div>
      </div>
    </main>
  );
};
