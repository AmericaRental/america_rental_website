import React from "react";
import styled from "styled-components";
import Banner from "../components/banner";
import Header from "../components/header";
import Vitrine from "../components/vitrine";

function Home() {
  const Div = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const P = styled.p`
    font-family: ${(props) => props.family || "Inter"};
    font-size: 26px;
    font-weight: ${(props) => props.weight || "400"};
    letter-spacing: 0.02em;
    margin-top: ${(props) => props.mt || "0px"};
    width: ${(props) => props.width || "fit-content"};
  `;
  const H1 = styled.h1`
    font-family: ${(props) => props.family || "Inter"};
    font-size: 40px;
    text-decoration-line: underline;
    color: #143955;
    line-height: 52px;
    margin-bottom: 31px;
  `;
  const H2 = styled.h2`
    font-family: ${(props) => props.family || "Inter"};
    font-weight: 700;
    font-size: 42px;
    color: #143955;
  `;
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Vitrine />
        <Div>
          <P family="Open Sans">nós somos a</P>
          <H1 family="DM Sans">América Rental</H1>
          <H2>Sobre Nossa Empresa</H2>
          <P mt='8px' width='70%'>
            Com mais de 20 anos de experiência, somos hoje a maior empresa de
            locação de Sanitários Portáteis de São Paulo. Atuando nos mais
            variados setores, como Construção Civil e Eventos Diversos. Trazemos
            conforto e praticidade para você e para seus clientes.
          </P>
        </Div>
      </main>
    </>
  );
}

export default Home;
