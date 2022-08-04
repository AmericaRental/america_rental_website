import React, { useState } from "react";
import Footer from "../components/global/footer";
import Header from "../components/global/header";
import styled from "styled-components";

import orcamento from "../images/orcamento.png";
import icone_bilheteria from "../images/icons/Icone_Bilheteria.png";
import icone_chuveiro from "../images/icons/Icone_Chuveiro.png";
import icone_luxo from "../images/icons/Icone_Luxo.png";
import icone_Mictorio from "../images/icons/Icone_Mictorio.png";
import icone_PNE from "../images/icons/Icone_PNE.png";
import icone_extraluxo from "../images/icons/icone-extraluxo.png";
import icone_guarita from "../images/icons/icone-guarita.png";
import icone_hidraulico from "../images/icons/icone-hidraulico.png";
import icone_pia from "../images/icons/icone-pia.png";
import icone_standard from "../images/icons/icone-standard.png";

const Img = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100px;
  top: 119px;
  object-fit: cover;
  @media (max-width: 1000px) {
    object-position: -0.1% 0;
  }
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  flex: 1;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: auto;
  max-height: 400px;
  margin-bottom: ${(props) => props.mb || "15px"};
  display: flex;
  align-items: center;
  min-height: 100px;
`;

const Orcamento = styled.section`
  width: 80%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin: 2.5rem auto 5px auto;
  align-items: center;
  text-align: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const P = styled.p`
  font-size: 1rem;
  font-family: "Nunito";
  font-weight: 600;
  flex: ${(props) => props.flx || "1"};
  text-align: justify;
  padding: 0 10px;
`;

const Select = styled.select`
  outline: none;
  font-size: 1.3rem;
  font-family: "Open Sans";
  width: calc(100% / 2);
  text-align: center;
  border-radius: 12px;
  flex: ${(props) => props.flx || "1"};
  border: 2px solid #aeb0b3;
  transition: 0.2s ease-in-out;
  :hover {
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.5);
  }
  :focus {
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 10px 0px #143955d3;
    border-color: #7199b6;
  }

  @media (max-width: 1000px) {
    width: 55%;
    font-size: 1rem;
  }
`;

const Line = styled.div`
  display: flex;
  flex: ${(props) => props.flex || "1"};
  flex-direction: row;
  font-family: "Nunito";
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  width: ${(props) => props.width || "65%"};
  justify-content: ${(props) => props.justify || "center"};
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Nunito";
  align-items: center;
  text-align: center;
  margin: 10px auto;
  width: ${(props) => props.width || "65%"};
  justify-content: ${(props) => props.justify || "center"};
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 90%;
  }
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-family: "Nunito";
  margin-right: ${(props) => props.mr || "3em"};
  margin-top: ${(props) => props.mt || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};
  text-align: ${(props) => props.txtAlign || "center"};
  flex: ${(props) => props.flx || "1"};
  @media (max-width: 1000px) {
    font-size: 1rem;
    width: ${(props) => props.mWidth || "45%"};
    margin-right: 0;
    text-align: ${(props) => props.mtxtAlign || "justify"};
  }
`;

const NumberSelector = styled.input`
  width: 40px;
  height: auto;
  flex: 1;
  font-size: 1.1rem;
  font-family: "Open Sans";
  outline: none;
  border: 2px solid #c9c9c9;
  padding: 5px;
  border-radius: 10px;
  transition: 0.1s ease-in-out;
  :hover {
    transition: 0.1s ease-in-out;
    border-color: #abafb9;
  }
  :focus {
    border-color: #505663;
    transition: 0.1s ease-in-out;
    box-shadow: 0 0 5px 0 #0000004c;
  }
`;

const Radio = styled.input`
  flex: ${(props) => props.flx || "1"};
`;

function Orcamentos() {
  const [plano, setPlano] = useState("");
  return (
    <>
      <Header />
      <Main>
        <Section mb="20px">
          <Img src={orcamento} />
        </Section>
        <Orcamento>
          <Line>
            <H1 txtAlign="justify" flex="2" mtxtAlign="justify">
              1- Escolha seu plano:
            </H1>
            <Select
              flx="1"
              onChange={(e) => {
                setPlano(e.target.value);
                console.log(plano);
              }}
            >
              <option value="empty"></option>
              <option value="Mensal">Mensal-Construção Civíl</option>
              <option value="Compra">Compra</option>
              <option value="Diaria">Diária</option>
              <option value="Quinzenal">Quinzenal</option>
            </Select>
          </Line>

          <Line>
            <H1
              mt="25px"
              mb="20px"
              mWidth="100%"
              txtAlign="justify"
              mtxtAlign="justify"
            >
              2 - Selecione o(s) modelo(s) e quantidade que deseja:
            </H1>
          </Line>

          <LineContainer
            mt="10px"
            mb="20px"
            width="65%"
            justify="space-between"
          >
            <Line width="40%" justify="space-between">
              <Icon src={icone_standard} />
              <P flx="5">Banheiro Quimico Standard</P>
              <NumberSelector type="number" min="0" />
            </Line>
            <Line width="40%" justify="space-between">
              <Icon src={icone_luxo} />
              <P flx="5">Banheiro Quimico Luxo</P>
              <NumberSelector type="number" min="0" />
            </Line>
          </LineContainer>
          {/* extra-luxo / pne */}
          <LineContainer
            mt="10px"
            mb="10px"
            width="65%"
            justify="space-between"
          >
            <Line width="40%" justify="space-between">
              <Icon src={icone_extraluxo} />
              <P flx="5">Banheiro Quimico Extra Luxo</P>
              <NumberSelector type="number" min="0" />
            </Line>
            <Line width="40%" justify="space-between">
              <Icon src={icone_PNE} />
              <P flx="5">Banheiro Quimico PNE</P>
              <NumberSelector type="number" min="0" />
            </Line>
          </LineContainer>
          {/* Hidráulico / Chuveiro */}
          <LineContainer
            mt="10px"
            mb="10px"
            width="65%"
            justify="space-between"
          >
            <Line width="40%" justify="space-between">
              <Icon src={icone_hidraulico} />
              <P flx="5">Sanitário Hidráulico</P>
              <NumberSelector type="number" min="0" />
            </Line>
            <Line width="40%" justify="space-between">
              <Icon src={icone_chuveiro} />
              <P flx="5">Chuveiro Portátil</P>
              <NumberSelector type="number" min="0" />
            </Line>
          </LineContainer>
          {/* Pia / Mictório */}
          <LineContainer
            mt="10px"
            mb="10px"
            width="65%"
            justify="space-between"
          >
            <Line width="40%" justify="space-between">
              <Icon src={icone_pia} />
              <P flx="5">Pia Portátil</P>
              <NumberSelector type="number" min="0" />
            </Line>
            <Line width="40%" justify="space-between">
              <Icon src={icone_Mictorio} />
              <P flx="5">Mictório Kros</P>
              <NumberSelector type="number" min="0" />
            </Line>
          </LineContainer>
          {/* Guarita/bilheteria */}
          <LineContainer
            mt="10px"
            mb="10px"
            width="65%"
            justify="space-between"
          >
            <Line width="40%" justify="space-between">
              <Icon src={icone_guarita} />
              <P flx="5">Guarita</P>
              <NumberSelector type="number" min="0" />
            </Line>
            <Line width="40%" justify="space-between">
              <Icon src={icone_bilheteria} />
              <P flx="5">Bilheteria</P>
              <NumberSelector type="number" min="0" />
            </Line>
          </LineContainer>

          <Line width="65%">
            <H1 txtAlign="justify" mr="0" flx="3">
              3 - Quantidade de Manutenções Necessárias:{" "}
            </H1>
            <Select flx="2.6">
              <option value="1x">1x por semana (programa padrão)</option>
              <option value="2x">2x por semana</option>
              <option value="3x">3x por semana</option>
              <option value="4x">4x por semana</option>
              <option value="5x">5x por semana</option>
              <option value="6x">6x por semana</option>
              <option value="diaria">Diária</option>
            </Select>
          </Line>

          <LineContainer>
            <H1 txtAlign="justify" flx="8">
              4 - Manutenção Realizada em Pavimento Elevado (VAC)
            </H1>
            <Line flx="1">
              <P>Sim</P>
              <Radio type="radio" name="vacSelector" value="sim" />
            </Line>
            <Line flx="1">
              <P>Não</P>
              <Radio type="radio" name="vacSelector" value="não" />
            </Line>
          </LineContainer>
        </Orcamento>
      </Main>
      <Footer />
    </>
  );
}

export default Orcamentos;
