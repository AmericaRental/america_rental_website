import React from "react";

import { menuItems } from "../../menu_itens";
import '../../css/hamburger_menu.css';

function SmallScreenMenu() {
  return (
    <div>
      {/* menu icon */}
      <label htmlFor="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      {/* Menu */}
      <section className="menu">
        <ul className="menuUl">
        {menuItems.map((item, index) => {
            return(
              <li className="menuItem">{item.title}</li>  
            );
        })}
        </ul>
      </section>
    </div>
  );
}

export default SmallScreenMenu;
