import React, { useState } from "react";

import { menuItems } from "../../menu_itens";
import "../../css/hamburger_menu.css";
import * as reactiBi from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  transition: top 500ms ease-in-out;
  padding: 20px 0;
`;

const NdMenu = styled.ul`
  width: 60vw;
  margin-top: 20px;
  margin-left: 15px;
  list-style: none;
  display: ${(props) => props.display || "inline-block"};
`;

const RdMenu = styled.ul`
  width: 60vw;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 25px;
  list-style: none;
  display: ${(props) => props.display || "inline-block"};
`;

const VisibilityButton = styled.button`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  outline: none;
`;

function SmallScreenMenu(props) {
  const [menuopened, setMenuopened] = useState(false);
  const [submenuOpened, setSubmenuopened] = useState(false);
  const [ndsubmenuOpened, setNdSubmenuopened] = useState(false);

  const visible = props.visible;

  function handleVisibility(typeOfState, visible) {
    if (visible !== true) {
      setSubmenuopened(false);
      setMenuopened(false);
      setNdSubmenuopened(false);
    } else {
      switch (typeOfState) {
        case 1:
          menuopened ? setMenuopened(false) : setMenuopened(true);
          break;

        case 2:
          submenuOpened ? setSubmenuopened(false) : setSubmenuopened(true);
          break;

        case 3:
          ndsubmenuOpened
            ? setNdSubmenuopened(false)
            : setNdSubmenuopened(true);
          break;

        default:
          break;
      }
    }
  }
  return (
    <div className={props.visible === true ? "menuContainer" : "hidden"}>
      <Menu>
        <ul className="menuUl">
          {menuItems.map((item, index) => {
            return item.submenu == null ? (
              <li className="menuItem" key={index}>
                <Link to={item.url} className="link">
                  {item.title}
                </Link>
              </li>
            ) : (
              <li className="menuItem" key={index}>
                {item.title}
                <VisibilityButton onClick={() => handleVisibility(1, visible)}>
                  {menuopened ? (
                    <reactiBi.BiChevronUp />
                  ) : (
                    <reactiBi.BiChevronDown />
                  )}
                </VisibilityButton>
                <NdMenu display={menuopened ? "block" : "none"}>
                  {item.submenu.map((subitem, index) => {
                    return subitem.submenu == null ? (
                      <li className="menuItem" key={index}>
                        <Link to={subitem.url} className="link">
                          {subitem.title}
                        </Link>
                      </li>
                    ) : (
                      <li className="menuItem" key={index}>
                        <Link to={subitem.url} className="link">{subitem.title}</Link>
                        <VisibilityButton
                          onClick={() => {
                            handleVisibility(index + 2, visible);
                            console.log(index);
                          }}
                        >
                          {( index + 2 === 2 ? submenuOpened : ndsubmenuOpened )
                          ? (
                          <reactiBi.BiChevronUp />
                          ) : (
                          <reactiBi.BiChevronDown />)}
                        </VisibilityButton>
                        <RdMenu
                          display={
                            index + 2 === 2
                              ? submenuOpened
                                ? "block"
                                : "none"
                              : ndsubmenuOpened
                              ? "block"
                              : "none"
                          }
                        >
                          {subitem.submenu.map((rditem, index) => {
                            return (
                              <li className="menuItem" key={index}>
                                <Link to={rditem.url} className="link">
                                  {rditem.title}
                                </Link>
                              </li>
                            );
                          })}
                        </RdMenu>
                      </li>
                    );
                  })}
                </NdMenu>
              </li>
            );
          })}
        </ul>
      </Menu>
    </div>
  );
}

export default SmallScreenMenu;
