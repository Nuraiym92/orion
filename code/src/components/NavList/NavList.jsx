import React from "react";
import { NavLink } from "react-router-dom";

const navList = [
  {
    url: "/",
    name: "Главный",
  },
  {
    url: "about",
    name: "О компании",
  },
  {
    url: "services",
    name: "Услуги",
  },
  {
    url: "price",
    name: "Прайс-лист",
  },
  {
    url: "news",
    name: "Новости",
  },
  {
    url: "contact",
    name: "Контакты",
  },
];

function NavList() {
  return (
    <>
      {navList.map((item, idx) => {
        return (
          <li key={idx + "navlist"}>
            <NavLink to={item.url} key={idx}>
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavList;
