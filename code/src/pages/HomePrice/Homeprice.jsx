import "./homeprice.scss";
import PriceCard from "../../components/PriceCard/Card";
import React from "react";

// Data Base
import { users } from "../../db";

function Homeprice() {
  return (
    <div className="price-card__wrapper">
      {users.map((user, idx) => {
        return (
          <PriceCard
            userName={user.name}
            userP={user.p}
            userDollar={user.dollar}
            userNumber={user.number}
            userDecimol={user.decimol}
            userItem={user.item1}
            userItem2={user.item2}
            userItem3={user.item3}
            userItem4={user.item4}
            userItem5={user.item5}
            userItem6={user.item6}
            userItem7={user.item7}
            userButton={user.button}
            key={idx + user.button}
          />
        );
      })}
    </div>
  );
}

export default Homeprice;
