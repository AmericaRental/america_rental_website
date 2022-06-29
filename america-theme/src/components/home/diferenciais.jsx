import React, { Component } from "react";
import styled from "styled-components";

import certification from "../../images/certification.svg";
import headset from '../../images/headset.svg';
import environment from '../../images/environment.svg'

export default class Diferenciais extends Component {
  render() {
    const Title = styled.h1`
      font-family: ${props => props.family || "DM Sans"};
      font-style: normal;
      font-weight: 700;
      font-size: ${(props) => props.size || "32px"};
      line-height: 35px;
      color: #fff;
      margin-bottom: ${props=> props.marginb || '0px'};
      letter-spacing: ${props => props.spacing || '0.05em'};

    `;

    const Section = styled.section`
      width: 100%;
      height: fit-content;
      background-color: #143955;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 15px 0;
    `;
    const Div = styled.div`
      width: ${(props) => props.width || "100%"};
      height: fit-content;
      display: flex;
      justify-content: ${(props) => props.content || "center"};
      align-items: center;
      flex-direction: ${(props) => props.direction || "columm"};
      text-align: center;
    `;

    const P = styled.p`
      color: white;
      font-size: 18px;
      font-family: "Open Sans";
      width: 385px;
      line-height: 22px;
      font-weight: 400;
      letter-spacing: ${props => props.spacing || '0px'};
    `;
    return (
      <Section>
        <Title marginb='30px' spacing='0px'>Nossos Diferenciais</Title>

        <Div direction="row" content="space-evenly">
          <Div direction="column" width="400px" >
            <img src={certification} alt="certificações" />
            <Title size="28px" marginb='4px' family='Open Sans'>Licenças e Certificados</Title>
            <P>
              Possuímos licenças de funcionamento para que sua obra e evento
              fiquem sempre protegidos.
            </P>
          </Div>
          <Div direction="column" width="400px">
            <img src={headset} alt="Atendimento" />
            <Title size="28px" marginb='4px' family='Open Sans' >Atendimento de Qualidade</Title>
            <P>
              Equipe eficiente e respostas rápidas. Você em contato diretamente
              com a Logística para maior agilidade.
            </P>
          </Div>
          <Div direction="column" width="400px">
            <img src={environment} alt="Consiência" />
            <Title size="28px" marginb='4px' family='Open Sans' >Descarte Consciente</Title>
            <P>
              O Meio Ambiente precisa da nossa ajuda, realizamos o descarte
              correto junto à SABESP.
            </P>
          </Div>
        </Div>
      </Section>
    );
  }
}
