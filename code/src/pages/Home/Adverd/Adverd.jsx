import React from "react";
import { NavLink } from "react-router-dom";

import "./adverd.scss";
function Adverd() {
  return (
    <div className="adverd">
      <div className="adverd__inner">
        <h2>Мы поможем Вашему бизнесу вырасти!</h2>
        <p>
          Проведем аудит Вашего бизнеса и сделаем индивидуальный план развития!
        </p>
        <button>
          <NavLink to="about">Подробнее</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Adverd;
