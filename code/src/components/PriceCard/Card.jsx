import "./card.scss";
import React from "react";

const PriceCard = (props) => {
  return (
    <div className="price-card">
      <div className="price-card__inner">
        <div className="price-card__info">
          <div className="price-card__user">
            <h3 className="price-card__name">{props.userName}</h3>
          </div>

          <p className="price-card__plan">{props.userP}</p>
          <div className="price-card__number">
            <h3 className="price-card__age">{props.userDollar}</h3>
            <h2 className="price-card__age1">{props.userNumber}</h2>
            <h5 className="price-card__age2">{props.userDecimol}</h5>
          </div>

          <div className="price-card__text">
            <p className="price-card__none">{props.userItem1}</p>
            <p className="price-card__item">{props.userItem2}</p>
            <p className="price-card__item">{props.userItem3}</p>
            <p className="price-card__item">{props.userItem4}</p>
            <p className="price-card__item">{props.userItem5}</p>
            <p className="price-card__item">{props.userItem6}</p>
            <p className="price-card__none">{props.userItem7}</p>
          </div>
          <button className="buttonPrice">{props.userButton}</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
