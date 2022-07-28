import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import React from "react";
import { NavLink } from "react-router-dom";

import "./dropdown.scss";

function Dropdown() {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);

  return (
    <div className="dropdown">
      <NavLink to="services">
        <button {...buttonProps}>Услуги</button>
      </NavLink>

      <div className={isOpen ? "visible" : ""} role="menu">
        {/* <a {...itemProps[0]} href="https://example.com"> */}
        <NavLink {...itemProps[0]} to="/">
          Главная
        </NavLink>
        {/* </a> */}
        <a {...itemProps[1]}>With click handler</a>
        <a {...itemProps[2]}>link 3</a>
      </div>
    </div>
  );
}

export default Dropdown;
