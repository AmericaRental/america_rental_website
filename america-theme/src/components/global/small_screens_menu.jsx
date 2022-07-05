import React from "react";

import { menuItems } from "../../menu_itens";
import "../../css/hamburger_menu.css";

function SmallScreenMenu(props) {
  return (
    <div className={props.visible === true ? "menuContainer" : "hidden"}>
      <section className="menu">
        <ul className="menuUl">
          {menuItems.map((item, index) => {
            return <li className="menuItem">{item.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default SmallScreenMenu;
