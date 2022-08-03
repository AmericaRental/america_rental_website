import React from "react";
import Footer from "../components/global/footer";
import Header from "../components/global/header";
import styled from "styled-components";

import orcamento from "../images/orcamento.webp";

const Img = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 119px;
  object-fit:contain;
  @media (max-width: 1000px) {
    top: 90px;
  }
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
`;
const H1 = styled.h1`
  font-size: 4rem;
  font-family: "Montserrat";
  color: white;
  margin-left: 2.5rem;
  z-index: 1;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  width: 100%;
  height: 31vh;
  max-height: 400px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    height: 7.2vh;
  }
`;

const Orcamento = styled.section`
  width: 80%;
  height: max-content;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Select = styled.select`
    outline: none;
    font-size: 1rem;
    font-family: "Open Sans";
`;

function Orcamentos() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <H1>Solicite seu orçamento</H1>
          <Img src={orcamento} />
        </Section>
        <Orcamento>
          <div>
            <p>1- Escolha seu plano</p> 
            <Select onChange={(e) => alert(`${e.target.value} selecionado!`)}>
                <option value="Mensal">Mensal-Construção Civíl</option>
                <option value="Compra">Compra</option>
                <option value="Diaria">Diária</option>
                <option value="Quinzenal">Quinzenal</option>
            </Select>
          </div>
        </Orcamento>
      </Main>
      <Footer />
    </>
  );
}

export default Orcamentos;
