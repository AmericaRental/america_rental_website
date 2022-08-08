import React, { Component } from "react";
import styled from "styled-components";

import bubbles from "../../images/bubbles.png";
export default class Carteira extends Component {
  render() {
    const Section = styled.section`
      width: 90%;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    `;

    const H1 = styled.h1`
      font-size: 40px;
      font-family: "DM Sans";
      font-weight: bold;

      @media (max-width: 1000px) {
        font-size: 2rem;
      }
    `;

    const P = styled.p`
      font-family: "Inter";
      font-size: 29px;
      text-align: center;
      letter-spacing: 0.02em;
      width: 79%;
      margin: 30px 0;
      @media (max-width: 1000px) {
        font-size: 1.25rem;
        width: 95%;
        letter-spacing: .065rem;
        text-align: center;
      }
    `;

    const Strong = styled.strong`
      font-size: 32px;
      font-weight: 600;
      @media (max-width: 1000px) {
        font-size: 1.335rem;
      }
    `;

    const Img = styled.img`
      width: 60vw;
      margin-top: 20px;
      @media (max-width: 1000px) {
        width: 100%;
      }
    `;

    return (
      <Section>
        <H1>Carteira de Clientes</H1>
        <P>
          Nesses mais de 20 anos de mercado,{" "}
          <Strong>consolidamos parcerias</Strong> e
          <Strong> fidelizamos clientes</Strong>,{" "}
          <Strong>realizamos os mais diversos tipos de eventos</Strong> e
          implantamos os nossos equipamentos em{" "}
          <Strong> locais que ninguém imaginaria ser possível</Strong>.<br />
          Temos muito orgulho da nossa história, do nosso trabalho e da nossa
          equipe.
        </P>
        <Img src={bubbles} alt="bolhas" />
      </Section>
    );
  }
}