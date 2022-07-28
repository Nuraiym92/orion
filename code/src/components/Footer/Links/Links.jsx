//TODO: Поменять ссылки на NavLink
//TODO: Применить метод map

// import "../../../scss/fonts";
import "./links.scss";

import React from "react";
// import { NavLink } from "react-router-dom";
import { Icon, List } from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";

import NavList from "../../NavList/NavList";

function Links() {
  const linksPage = [
    { url: "about", name: "Проекты" },
    { url: "about", name: "Эксперты" },
    { url: "/#adverdId", name: "Отзывы" },
    { url: "/#partnersId", name: "Проекты" },
  ];

  return (
    <div className="links">
      <ul className="links__list">
        <NavList />
      </ul>

      <List>
        {/* <List.Item as={NavLink} to="about">
          <Icon name="caret right" />
          Проекты
        </List.Item> */}
        {linksPage.map((item, idx) => {
          return (
            <List.Item to={item.url} key={idx}>
              {/* <Icon name="caret right" /> */}
              <Link to={item.url}>
                <Icon name="caret right" />
                {item.name}
              </Link>
              {/* {item.name} */}
            </List.Item>
          );
        })}
      </List>

      {/* <ul className="links__list-2">
        <li>
          <NavLink to="#" className="links__list-link">
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links__list-link">
            Эксперты
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links__list-link">
            Отзывы
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="links__list-link">
            Партнеры
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
}

export default Links;
