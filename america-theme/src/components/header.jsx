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
  padding: 10px;
`;

const SocialHeader = styled.section`
  background-color: #143955;
  height: 40px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const LogoAmerica = styled.img`
  width: 18%;
  height: auto;
`;
LogoAmerica.defaultProps = {
  src: vetor_logo_america_colorido,
};

const Paragraph = styled.p`
  color: ${(props) => props.cor || "#000000"};
  font-size: ${(props) => props.tamanho || "1.25rem"};
  padding: ${(props) => props.padding || "0px"};
`;

const Div = styled.div`
  width: max-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <>
        {/* mídias sociais acima do header */}
        <SocialHeader>
          <Div>
            <Img src={email} alt="email " />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px">
              vendas@americarental.com.br
            </Paragraph>
          </Div>
          <Div>
            <Img src={email} alt="email " />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px">
              (11) 2499-3353
            </Paragraph>
          </Div>
          <Div>
            <Img src={email} alt="email " />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px">
              /AmericaRental
            </Paragraph>
          </Div>
          <Div>
            <Img src={email} alt="email " />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px">
              @america_rental
            </Paragraph>
          </Div>
          <Div>
            <Img src={email} alt="email " />
            <Paragraph cor="#FAFAFA" tamanho="1.05rem" padding="5px">
              /AmericaRental
            </Paragraph>
          </Div>
        </SocialHeader>

        {/* Header  */}
        <StyledHeader>
          <LogoAmerica />
        </StyledHeader>
      </>
    );
  }
}
