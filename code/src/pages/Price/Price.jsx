import "./price.scss";

import { PriceCard } from "../../components";
import { users } from "../../db";

function Price() {
  return (
    <div className="journal">
      <div className="journal__inner">
        <h1 className="journal__inner-title">___Цены на услуги</h1>
        <p className="journal__inner-desc">
          Цены пакета на услуги указана за одну типовую должность. При заказе
          разработки норм <br></br> труда более чем на 10 должностей действует
          система скидок.
        </p>
      </div>
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
    </div>
  );
}

export default Price;
