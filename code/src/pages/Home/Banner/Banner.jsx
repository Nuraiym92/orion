import "./banner.scss";

import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__inner">
        <h1 className="banner__inner-title">Новый взгляд на ваш бизнес</h1>
        <p className="banner__inner-desc">
          Мы помогаем нашим клиентам выявлять <br></br>
          их проблемы, разрабатывать решения и принимать меры.
        </p>
        <button className="banner__inner-btn btn">
          <NavLink to="/about">Подробнее</NavLink>
        </button>
      </div>

      <div className="banner__img"></div>
    </div>
  );
}

export default Banner;
