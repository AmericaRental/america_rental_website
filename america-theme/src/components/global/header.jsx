import React, { useState, useEffect } from "react";
import styled from "styled-components";

import vetor_logo_america_colorido from "../../images/vetor_logo_america_colorido.svg";
import email from "../../images/email.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import whatsapp from "../../images/whatsapp.svg";
import { menuItems } from "../../menu_itens";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuvisible, setMenuvisible] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setMenuvisible(!menuvisible);
  };
  useEffect(() => {
    menuvisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "overlay");
  }, [menuvisible]);

  const navigate = useNavigate();

  const StyledHeader = styled.header`
    width: 100%;
    height: 89px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 7px 7px -5px #00000088;
  `;

  const SocialHeader = styled.section`
    background-color: #143955;
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
  `;

  const LogoAmerica = styled.img`
    width: 350px;
    height: auto;
    margin: 0px 2.5% 0px 1.5%;
  `;
  LogoAmerica.defaultProps = {
    src: vetor_logo_america_colorido,
  };

  const Paragraph = styled.p`
    color: ${(props) => props.cor || "#000000"};
    font-size: ${(props) => props.tamanho || "1.25rem"};
    padding: ${(props) => props.padding || "0px"};
    font-family: ${(props) => props.font || "DM Sans"};
  `;
  const Div = styled.div`
    width: ${(props) => props.size || "max-content"};
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.jContent || "Center"};
    align-items: center;
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
  `;

  const Img = styled.img`
    width: 18px;
    height: 18px;
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

  const Menu = styled.div`
    position: absolute;
    display: ${menuvisible ? "inline-block" : "none"};
    z-index: 2;
    background-color: #0000008d;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: ease-in-out 400ms;
  `;

  const Content = styled.section`
    display: ${menuvisible ? "block" : "none"};
    background-color: white;
    min-width: 10rem;
    display: flex;
    flex-direction: column;
    margin: 10px 0% 0 67%;
    width: 200px;
    padding: 30px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: ease-in-out 600ms;
  `;

  const HorizontalHR = styled.hr`
    width: 90%;
    height: 1px;
    background-color: black;
    border: none;
    margin: 8px;
  `;
  return (
    <>
      {/* mídias sociais acima do header */}
      <SocialHeader>
        <Div padding="3%">
          <Img src={email} alt="email" />
          <Paragraph
            cor="#FAFAFA"
            tamanho="1.05rem"
            padding="5px"
            font="Fira Sans"
          >
            vendas@americarental.com.br
          </Paragraph>
        </Div>
        <Div padding="3%">
          <Img src={whatsapp} alt="whatsapp" />
          <Paragraph
            cor="#FAFAFA"
            tamanho="1.05rem"
            padding="5px"
            font="Fira Sans"
          >
            (11) 2499-3353
          </Paragraph>
        </Div>
        <Div padding="3%">
          <Img src={facebook} alt="facebook" />
          <Paragraph
            cor="#FAFAFA"
            tamanho="1.05rem"
            padding="5px"
            font="Fira Sans"
          >
            /AmericaRental
          </Paragraph>
        </Div>
        <Div padding="3%">
          <Img src={instagram} alt="instagram" />
          <Paragraph
            cor="#FAFAFA"
            tamanho="1.05rem"
            padding="5px"
            font="Fira Sans"
          >
            @america_rental
          </Paragraph>
        </Div>
        <Div padding="3%">
          <Img src={linkedin} alt="Linkedin" />
          <Paragraph
            cor="#FAFAFA"
            tamanho="1.05rem"
            padding="5px"
            font="Fira Sans"
          >
            /AmericaRental
          </Paragraph>
        </Div>
      </SocialHeader>

      <StyledHeader>
        <Div jContent="space-around" size="85%">
          <LogoAmerica />
          <Div jContent="space-between" margin="0" size="39%">
            {menuItems.map((menu, index) => {
              return menu.submenu == null ? (
                <Button key={index} onClick={menu.url.length > 0 ? () => navigate(menu.url, {replace: true}) : () => console.log('')}>{menu.title}</Button>
              ) : (
                <Button
                  key={index}
                  onClick={handleClick}
                  onho
                  className={menuvisible ? "btn_active" : ""}
                >
                  {menu.title}
                </Button>
              );
            })}
          </Div>
        </Div>
      </StyledHeader>

      <Menu>
          <Content>
            <button onClick={() => navigate('/produtos/quimicos', {replace: true})}> Químicos </button>
            {/* produtos/hidraulicos */}
            <HorizontalHR />
            <button onClick={() => navigate('/produtos/hidraulicos', {replace: true})}>Hidráulicos</button>
            <HorizontalHR />
            <button onClick={() => navigate('/produtos/pia', {replace: true})}>Pia Portátil</button>
            <HorizontalHR />
            <a href="#" target={"_blank"}>item 4</a>
          </Content>
      </Menu>
    </>
  );
}

export default Header;
