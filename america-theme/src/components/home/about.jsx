import React from "react";
import styled from "styled-components";
import funcionarios from "../../images/funcionarios.svg";
import useWindowChange from "../global/hooks/useWindowWidth";

function About() {
  const [width] = useWindowChange();

  const scale = ((100 * width) / 1920) * 2.5;

  const Div = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    bottom: auto;
    @media (max-width: 1000px) {
      align-items: ${(props) => props.alignItems || "center"};
    }
  `;

  const P = styled.p`
    font-family: ${(props) => props.family || "DM Sans"};
    font-size: ${(props) => props.size || "26px"};
    font-weight: ${(props) => props.weight || "400"};
    letter-spacing: 0.03em;
    margin-top: ${(props) => props.mt || "0px"};
    width: ${(props) => props.width || "fit-content"};
    text-align: center;
    line-height: 35px;

    @media (max-width: 1000px) {
      width: 90%;
      font-size: ${props => props.mSize || '2rem'};
      line-height: 23px;
    }
  `;

  const H1 = styled.h1`
    font-family: ${(props) => props.family || "Inter"};
    font-size: 40px;
    /* text-decoration-line: underline; */
    color: #143955;
    line-height: 52px;
    margin-bottom: 31px;
    @media (max-width: 1000px) {
      font-size: 2.4rem;
    }
  `;

  const H2 = styled.h2`
    font-family: ${(props) => props.family || "Inter"};
    font-weight: 700;
    font-size: 42px;
    color: #143955;
    @media (max-width: 1000px) {
      font-size: 2.1rem;
    }
  `;

  const Img = styled.img`
    width: 50%;
    margin-top: 1rem;
    filter: grayscale(100%);
    transition: 0.3s ease-in-out;
    &:hover {
      filter: grayscale(0%);
      transition: 0.3s ease-in-out;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  `;

  const Strong = styled.strong`
    font-size: ${(props) => props.size || "26px"};
    font-family: ${(props) => props.family || "DM Sans"};
    letter-spacing: ${(props) => props.spacing || "0.03em"};
    text-transform: ${(props) => props.txtTransform || "none"};
    @media (max-width: 1000px) {
      font-size: 1.2rem;
    }
  `;
  return (
    <Div>
      <P family="Open Sans">Nós somos a</P>
      <H1 family="DM Sans">América Rental</H1>
      <H2>Sobre Nossa Empresa</H2>
      <P mt="8px" width="1010px" size="26px" mSize='20px'>
        Com mais de{" "}
        <Strong
          family="DM Sans"
          txtTransform="capitalize"
          size="1.875rem"
          spacing="0.065em"
        >
          {" "}
          20 anos de experiência
        </Strong>
        , somos hoje a{" "}
        <Strong
          family="Source Sans Pro"
          size="2rem"
          spacing="0.08em"
          txtTransform="uppercase"
        >
          maior
        </Strong>{" "}
        empresa de locação de <Strong>Sanitários Portáteis de São Paulo</Strong>
        . Atuando nos mais variados setores, como{" "}
        <Strong size="28px">Construção Civil </Strong>e{" "}
        <Strong size="28px">Eventos Diversos</Strong>.<br /> Trazemos conforto e
        praticidade para você e para seus clientes.
      </P>

      <Img src={funcionarios} alt="funcionarios da américa rental" />
    </Div>
  );
}

export default About;
