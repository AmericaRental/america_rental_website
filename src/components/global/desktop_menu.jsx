import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: ${(props) => props.size || "max-content"};
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.jContent || "Center"};
  align-items: center;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  transition: cubic-bezier(0.88, 0.15, 0.49, 1.05) 300ms;
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
  font-size: 1.2rem;
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
    font-size: 1.2rem;
    filter: drop-shadow(-1px 6px 20px #1439556f);
  }
`;

function DesktopMenu(items) {

  return (
    <Nav
      jContent="space-between"
      margin="0"
      sjContent="right"
      size="max-content"
      mSize="80%"
      mMargin="0 -2% 0 0%"
    >
      <ul className="navlist">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            Quem somos
          </Link>
        </li>
        <li>
          <Link to="/orcamento" className="link">
            Orçamento
          </Link>
        </li>
        <li>
          <Button>Produtos</Button>
          <ul>
            <li>
              <button className="nestedSubMenu">
                <Link to="/quimicos" className="link">Sanitário Químico</Link>
                <ul className="lastLevel">
                  <li>
                    <Link
                      to="/quimicos/standard"
                      className="link"
                      replace={true}
                    >
                      Modelo Standard
                    </Link>
                  </li>

                  <li className="link">
                    <Link to="/quimicos/luxo" className="link">
                      Modelo Luxo
                    </Link>
                  </li>

                  <li className="link">
                    <Link
                      to="/quimicos/extraluxo"
                      replace="true"
                      className="link"
                    >
                      Modelo Extra Luxo
                    </Link>
                  </li>

                  <li className="link">
                    <Link to={"/quimicos/pne"} className="link">
                      Modelo PNE
                    </Link>
                  </li>
                </ul>
              </button>
            </li>
            <li>
              <button
                className="nestedSubMenu"
              >
                <Link to="/hidraulicos" className="link">Cabines Hidráulicas</Link>
                <ul className="lastLevel">
                  <li className="link">
                    <Link
                      to="/hidraulicos/convencional"
                      className="link"
                    >
                      Modelo Convencional
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      to="/hidraulicos/chuveiro"
                      className="link"
                    >
                      Chuveiro Portátil
                    </Link>
                  </li>
                </ul>
              </button>
            </li>
            <li>
              <Link to={"/pia"} className="link">
                Pia Portátil
              </Link>
            </li>
            <li>
              <Link to={"/kros"} className="link">
                Mictório Kros
              </Link>
            </li>
            <li>
              <Link to={"/bilheteria_individual"} className="link">
                Bilheteria Individual
              </Link>
            </li>
            <li>
              <Link to={"/bilheteria_dupla"} className="link">
                Bilheteria Dupla
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contato"} className="link">
            Contato
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default DesktopMenu;
