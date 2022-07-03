import React from "react";
import styled from "styled-components";

import bubble1 from "../../images/pia/bubble1.svg";
import bubble2 from "../../images/pia/bubble2.svg";
import bubble3 from "../../images/pia/bubble3.svg";

function TechnicalVisit() {
  const P = styled.p`
    text-transform: ${(props) => props.txtTransform || "none"};
    margin: ${(props) => props.margin || "0"};
    font-family: ${(props) => props.family || "Inter"};
    color: ${(props) => props.color || "#9c9c9c"};
    width: ${(props) => props.width || "auto"};
    font-size: ${(props) => props.size || "2rem"};
    line-height: ${(props) => props.line || "auto"};
  `;

  const H1 = styled.h1`
    font-size: ${(props) => props.size || "2rem"};
    color: #1e5680;
    font-family: "Inter";
    text-transform: uppercase;
    margin: ${(props) => props.margin || "0"};
  `;

  const Container = styled.div`
    width: ${(props) => props.width || " 100vw"};
    height: auto;
    display: flex;
    margin: ${(props) => props.margin || "0"};
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.jContent || "center"};
    align-items: ${(props) => props.itemsAlign || "center"};
    background-color: ${(props) => props.background || "transparent"};
  `;

  const Img = styled.img`
    width: ${(props) => props.width || "50%"};
    height: auto;
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    filter: ${(props) => props.filter || "none"};
  `;
  return (
    <>
      <Container background="#f2f2f2" direction="column">
        <H1 size="3.2rem" margin="1.5% 0">
          Visita Técnica
        </H1>

        <P size="1.3rem" width="73%" color="#6C6C6C" line="2rem">
          Em casos específicos pode ser realizado o agendamento de uma
          <strong> visita técnica, sem custo</strong>, para a verificação da
          possibilidade de instalação de determinados equipamentos.
        </P>

        <P
          size="1.3rem"
          width="73%"
          margin="1.5% 0 "
          color="#6C6C6C"
          line="2rem"
        >
          Se você tiver alguma dúvida sobre a sua instalação, entre em contato e
          agende agora mesmo.
        </P>
        <Container jContent="space-evenly">
          <Img src={bubble1} alt="bolha 1" width="18%" margin="0 0 1.5% 0" />
          <Img src={bubble2} alt="bolha 2" width="18%" margin="0 0 1.5% 0" />
          <Img src={bubble3} alt="bolha 3" width="18%" margin="0 0 1.5% 0" />
        </Container>
      </Container>
    </>
  );
}

export default TechnicalVisit;
