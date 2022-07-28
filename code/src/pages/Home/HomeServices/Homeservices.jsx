import React from "react";
import "./HomeServices.scss";

const HomeServices = (props) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__inner-img-box">
        <img className="card__inner-img" src={props.cardImg} alt="" />
        </div>
        <div className="card__inner-content">
        <h3 className="card__inner-title">{props.cardTitle}</h3>
        <hr/>
        <div className="card__inner-text">
        <p className="card__inner-descr">{props.cardDescription}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;


