import React, { useState } from "react";
import styled from "styled-components";

import vetor_logo_america_colorido from "../../images/vetor_logo_america_colorido.svg";
import {ReactComponent as email} from "../../images/email.svg";
import {ReactComponent as facebook} from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import whatsapp from "../../images/whatsapp.svg";
import { menuItems } from "../../menu_itens";

import "../../css/navigation_style.css";
import DesktopMenu from "./desktop_menu";
import useWindowChange from "./hooks/useWindowWidth";
import SmallScreenMenu from "./small_screens_menu";
// import HamburgerButton from "./hamburger_button";

const StyledHeader = styled.header`
    width: 100%;
    height: 89px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 7px 7px -5px #00000088;
    @media (max-width: 1500px) {
      justify-content: space-evenly;
    }
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
    @media (max-width: 900px) {
      display: none;
    }
    @media (max-width: 1200px) {
      justify-content: space-evenly;
    }
  `;
  const LogoAmerica = styled.img`
    width: 350px;
    height: auto;
    margin: 0px 0% 0px 2%;
    @media (max-width: 1000px) {
      width: 50vw;
    }
  `;
  LogoAmerica.defaultProps = {
    src: vetor_logo_america_colorido,
  };
  const Paragraph = styled.p`
    color: ${(props) => props.cor || "#000000"};
    font-size: ${(props) => props.tamanho || "1.25rem"};
    padding: ${(props) => props.padding || "0px"};
    font-family: ${(props) => props.font || "DM Sans"};
    @media (max-width: 1200px) {
      padding: 5px 0;
    }
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

    @media (max-width: 1440px) {
      justify-content: ${(props) => props.mjContent || "Center"};
      margin: ${(props) => props.mMargin || "0"};
    }
    @media (max-width: 1200px) {
      padding: ${(props) => props.MPadding || "5px 0"};
      width: ${(props) => props.mSize || "fit-content"};
      justify-content: ${(props) => props.sjContent || "Center"};
    }

    @media (max-width: 1000px) {
      justify-content: space-between;
    }
  `;
  const Img = styled.img`
    width: 18px;
    height: 18px;
  `;

function Header() {
  const [windowWidth] = useWindowChange();

  const [visibility, setVisibility] = useState(false);

  return (
    <>
      {/* mídias sociais acima do header */}
      <SocialHeader>
        <Div padding="3%" MPadding="0" mPadding="5px 0">
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
        <Div padding="3%" MPadding="0" mPadding="5px 0">
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
        <Div padding="3%" MPadding="0" mPadding="5px 0">
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
        <Div padding="3%" MPadding="0" mPadding="5px 0">
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
        <Div padding="3%" mPadding="5px 0">
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
        <Div jContent="space-around" size={"88%"} mSize={"95%"}>
          <Div
            jContent="space-evenly"
            size="100%"
            mjContent="space-between"
            mSize="100%"
          >
            <LogoAmerica />

            {windowWidth <= 1000 ? (
              <label
                htmlFor="check"
              >
                <input type="checkbox" id="check" onChange={() => visibility ? setVisibility(false) : setVisibility(true)} />
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </label>
            ) : (
              <DesktopMenu items={menuItems} />
            )}
          </Div>
        </Div>
        {windowWidth <= 1000 ? <SmallScreenMenu visible={visibility} /> : <></>}
      </StyledHeader>
    </>
  );
}

export default Header;
