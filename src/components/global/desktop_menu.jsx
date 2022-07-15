import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { menuItems } from "../../menu_itens";

const Div = styled.div`
    width: ${(props) => props.size || "max-content"};
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.jContent || "Center"};
    align-items: center;
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};

    @media (max-width: 1440px) {
      justify-content: ${(props) => props.mjContent || "Center"};
      margin: ${(props) => props.mMargin || "0"};
    }
    @media (max-width: 1200px) {
      padding: ${(props) => props.MPadding || "5px 0"};
      width: ${(props) => props.mSize || "fit-content"};
      justify-content: ${(props) => props.sjContent || "Center"};
    }
  `;
  const Button = styled.button`
    width: 130px;
    height: fit-content;
    background-color: transparent;
    color: #515151;
    font-size: ${(props) => props.fontsize || "17px"};
    font-family: "Inter", sans-serif;
    font-weight: 300;
    transition: cubic-bezier(0.88, 0.15, 0.49, 1.05) 300ms;
    text-decoration: none;
    border: none;
    text-decoration-line: none;
    cursor: pointer;
    &:hover {
      color: #1e547e;
      transition: cubic-bezier(0.88, 0.15, 0.49, 1.05) 300ms;
      font-weight: 700;
      font-size: calc(${(props) => props.fontsize || "17px"} + 5%);
      filter: drop-shadow(-1px 6px 20px #1439556f);
    }
  `;

function DesktopMenu(items) {
  
  const navigate = useNavigate();

  return (
    <Div
      jContent="space-between"
      margin="0"
      sjContent="right"
      size="max-content"
      mSize="80%"
      mMargin="0 -2% 0 0%"
    >
      <ul className="navlist">
        {menuItems.map((menu, index) => {
          return menu.submenu == null ? (
            <li key={index}>
              <Link to={menu.url} className="link">
                {menu.title}
              </Link>
            </li>
          ) : (
            <li key={index}>
              <Button>{menu.title}</Button>

              <ul>
                {menu.submenu.map((subItem, index) => {
                  return (
                    <li
                      // onClick={Navigate(subItem.url)}
                      key={index}
                    >
                      {subItem.submenu != null ? (
                        <button className="nestedSubMenu" onClick={() => navigate(subItem.url, {replace: true})}>
                          {subItem.title}
                          <ul className="lastLevel">
                            {subItem.submenu.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  // onClick={Navigate(item.url)}
                                >
                                  <Link to={item.url} className="link">
                                    {item.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </button>
                      ) : (
                        subItem.title
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}

export default DesktopMenu;
