import { NavLink } from "react-router-dom";

import "./footer.scss";

import Contacts from "./Contacts/Contacts";
import Links from "./Links/Links";
import News from "./News/News";
import Mail from "./Mail/Mail";

function Footer() {
  const newsData = [
    {
      newslink: "https://www.google.ru/",
      newsdescription:
        "Vero hic possimus ratione a dicta architecto sapiente. ",
      newstime: 1,
    },
    {
      newslink: "https://www.google.ru/",
      newsdescription:
        "Velit enim consectetur sit ipsa minima odio labore eveniet delectus. ",
      newstime: 2,
    },
    {
      newslink: "https://www.google.ru/",
      newsdescription: "Systems green Automotive account oregon rest",
      newstime: 4,
    },
  ];

  return (
    <div className="footer">
      <div className="footer__inner-contacts">
        <NavLink className="footer__logo" to="/">
          ORION
        </NavLink>
        <Contacts />
      </div>

      <div className="footer__inner-links">
        <h3 className="links__title">Ссылки</h3>

        <Links />
      </div>

      <div className="footer__inner-news">
        <h3>Новости</h3>
        {newsData.map((item, idx) => {
          return (
            <News
              newsLink={item.newslink}
              newsDesc={item.newsdescription}
              newsTime={item.newstime}
              key={idx + item.newstime}
            />
          );
        })}
      </div>

      <div className="footer__inner-mail">
        <h3>Обновления</h3>
        <p>Подписывайтесь на наши обновления и новости</p>
        <Mail />
      </div>
    </div>
  );
}

export default Footer;
