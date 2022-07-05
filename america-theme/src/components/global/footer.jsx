import React from "react";
import styled from "styled-components";

import email from "../../images/email.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import whatsapp from "../../images/whatsapp.svg";
import useWindowChange from "./hooks/useWindowWidth";

const Foo = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: #143955;
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  padding: ${(props) => props.padding || "0 0 0 0"};
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  height: 250px;
`;

const Title = styled.p`
  font-family: ${(props) => props.family || "Inter"};
  color: white;
  padding-bottom: 15px;
  font-weight: 400px;
  font-size: ${(props) => props.size || "20px"};
  letter-spacing: 0.1rem;
  line-height: 37px;
  align-items: center;
`;

const Article = styled.article`
  width: 90%;
  height: max-content;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const HR = styled.hr`
  width: 1px;
  height: 300px;
  background-color: #fff;
`;

const P = styled.p`
  font-size: ${(props) => props.size || "16px"};
  letter-spacing: 0.05em;
  color: #fff;
  font-family: ${(props) => props.family || "Open Sans"};
  padding-bottom: 8px;
  letter-spacing: ${(props) => props.spacing || "0"};
`;

const Input = styled.input`
  border-radius: 8px;
  padding: 5px 10px;
  background-color: transparent;
  border: 1.5px solid white;
  outline: none;
  caret-color: white;
  font-size: 20px;
  color: white;
`;

const Button = styled.button`
  width: 120px;
  border: 2px solid white;
  padding: 8px 10px;
  color: white;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 10px;
  font-family: "Open Sans";
`;

const Img = styled.img`
  width: 37px;
  height: 50px;
  margin: 0.6rem 2rem;
`;
function Footer() {
  const [width] = useWindowChange();

  return (
    <Foo>
      <Article>
        <Section>
          <Title family="Unna" size="32px">
            Newsletter
          </Title>
          <P>
            Assine para ficar por dentro das noticias e descontos exclusivos.
          </P>
          <Input />
          <Button>Enviar</Button>
        </Section>
        {width <= 1000 ? <></> : <HR />}
        <Section>
          <Title family="Nunito" size="32px">
            Menu
          </Title>
          <Div padding="0 0 0 20px">
            <P family="Inter" size="20px" spacing="0.1em">
              Home
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Quem Somos
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Produtos
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Contato
            </P>
          </Div>
        </Section>
        {width <= 1000 ? <></> : <HR />}
        <Section>
          <Title family="Nunito" size="32px">
            Produtos
          </Title>
          <Div padding="0 0 0 20px">
            <P family="Inter" size="20px" spacing="0.1em">
              Sanitário Portátil
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Sanitário Hidráulico
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Chuveiros Portáteis
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Pias Portáteis
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Mictórios Portáteis
            </P>
            <P family="Inter" size="20px" spacing="0.1em">
              Guaritas
            </P>
          </Div>
        </Section>
        {width <= 1000 ? <></> : <HR />}
        <Section>
          <Title family="Nunito" size="32px">
            Mídias Sociais
          </Title>
          <Grid>
            <Img src={email} alt="email" />
            <Img src={whatsapp} alt="email" />
            <Img src={facebook} alt="email" />
            <Img src={instagram} alt="email" />
            <Img src={linkedin} alt="email" />
          </Grid>
        </Section>
      </Article>
    </Foo>
  );
}

export default Footer;
