import React from "react";
import styled from "styled-components";

import vetor_logo_america_colorido from "../images/vetor_logo_america_colorido.svg";
import email from "../images/email.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import whatsapp from "../images/whatsapp.svg";


const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.75rem 0px;
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
  width: 18%;
  height: auto;
  margin: 0px 6%;
`;
LogoAmerica.defaultProps = {
  src: vetor_logo_america_colorido,
};

const Paragraph = styled.p`
  color: ${(props) => props.cor || "#000000"};
  font-size: ${(props) => props.tamanho || "1.25rem"};
  padding: ${(props) => props.padding || "0px"};
  font-family: ${props => props.font || 'DM Sans'};
`;

const Div = styled.div`
  width: ${
    props => props.size || 'max-content'
  };
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.jContent || 'Center'};
  align-items: center;
  padding: ${props => props.padding || '0px'};
`;

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

const Button = styled.button`
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    color: #515151;
    border: 2px solid transparent;
    font-size: ${props => props.fontsize || '17px'};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    transition: ease-in-out 500ms;
    padding: 5px 10px;
    &:hover { 
      color: #1e547e;
      transition: ease-in-out 250ms;
      border: 2px solid #1e547e;
      border-radius: 0.6rem;
    }
`;


export default class Header extends React.Component {
  render() {
    return (
      <>
        {/* mídias sociais acima do header */}
        <SocialHeader>
          <Div padding='3%'>
            <Img src={email} alt="email" />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px" font='Fira Sans'>
              vendas@americarental.com.br
            </Paragraph>
          </Div>
          <Div padding='3%'>
            <Img src={whatsapp} alt="whatsapp" />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px" font='Fira Sans'>
              (11) 2499-3353
            </Paragraph>
          </Div>
          <Div padding='3%'>
            <Img src={facebook} alt="facebook" />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px" font='Fira Sans'>
              /AmericaRental
            </Paragraph>
          </Div>
          <Div padding='3%'>
            <Img src={instagram} alt="instagram" />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px" font='Fira Sans'>
              @america_rental
            </Paragraph>
          </Div>
          <Div padding='3%'>
            <Img src={linkedin} alt="Linkedin" />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px" font='Fira Sans'>
              /AmericaRental
            </Paragraph>
          </Div>
        </SocialHeader>

        {/* Header  */}
        <StyledHeader>
          <LogoAmerica />
          {/* menu */}
          <Div jContent="space-evenly" size='40%'>
            <Button fontsize='1.25rem'>Home</Button>
            <Button fontsize='1.25rem'>Quem Somos</Button>
            <Button fontsize='1.25rem'>Orçamento</Button>
            <Button fontsize='1.25rem'>Produtos</Button>
            <Button fontsize='1.25rem'>Contato</Button>
          </Div>
        </StyledHeader>
      </>
    );
  }
}
