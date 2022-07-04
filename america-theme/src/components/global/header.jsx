import React from "react";
import styled from "styled-components";

import vetor_logo_america_colorido from "../../images/vetor_logo_america_colorido.svg";
import email from "../../images/email.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import whatsapp from "../../images/whatsapp.svg";
import { menuItems } from "../../menu_itens";
import { Link } from "react-router-dom";

import "../../css/navigation_style.css";

function Header() {
  // let navigate = useNavigate();

  const StyledHeader = styled.header`
    width: 100%;
    height: 89px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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
    @media (max-width: 900px) {
      display: none;
    }
    @media (max-width: 1200px){
      justify-content: space-evenly;
    }
  `;
  const LogoAmerica = styled.img`
    width: 350px;
    height: auto;
    margin: 0px 0% 0px 2%;
  `;
  LogoAmerica.defaultProps = {
    src: vetor_logo_america_colorido,
  };
  const Paragraph = styled.p`
    color: ${(props) => props.cor || "#000000"};
    font-size: ${(props) => props.tamanho || "1.25rem"};
    padding: ${(props) => props.padding || "0px"};
    font-family: ${(props) => props.font || "DM Sans"};
    @media (max-width: 1200px){
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

    @media (max-width: 1440px){
      justify-content: ${(props) => props.mjContent || "Center"};
      margin: ${props => props.mMargin || '0'};
    }
    @media (max-width: 1200px){
      padding: ${props => props.MPadding || '5px 0'};
      width: ${props => props.mSize || 'fit-content'};
      justify-content: ${(props) => props.sjContent || "Center"};
    }
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

  return (
    <>
      {/* mídias sociais acima do header */}
      <SocialHeader>
        <Div padding="3%" MPadding='0' mPadding='5px 0'>
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
        <Div padding="3%" MPadding='0' mPadding='5px 0'>
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
        <Div padding="3%" MPadding='0' mPadding='5px 0'>
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
        <Div padding="3%" MPadding='0' mPadding='5px 0'>
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
        <Div padding="3%" mPadding='5px 0'>
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
        <Div jContent="space-around" size={'88%'} mSize={'95%'}>
          <Div jContent="space-evenly" size="100%" mjContent='space-between' mSize='100%'>
            <LogoAmerica />
            <Div jContent="space-between" margin="0" sjContent='right' size="max-content" mSize='80%' mMargin='0 -2% 0 0%'>
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
                                <button className="nestedSubMenu">
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
          </Div>
        </Div>
      </StyledHeader>
    </>
  );
}

export default Header;
