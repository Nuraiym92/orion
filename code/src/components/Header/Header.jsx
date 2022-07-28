import "./header.scss";
import { NavLink } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <NavLink className="header__logo-link" to="/">
            ORION
          </NavLink>
        </div>

        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/about">О компании</NavLink>
            </li>
            <li>
              {/* <NavLink className="header__dropdown" to="/services"> */}
              <Dropdown />
              {/* </NavLink> */}
            </li>
            <li>
              <NavLink to="/price">Прайс-лист</NavLink>
            </li>
            <li>
              <NavLink to="/news">Новости</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
