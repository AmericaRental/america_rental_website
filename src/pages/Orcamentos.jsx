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
import api from "../api/axios";

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
  display: flex;
  flex-direction: column;
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
  width: ${(props) => props.width || "70%"};
  height: max-content;
  display: flex;
  flex-direction: column;
  margin: 2.5rem auto 5px auto;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.bg || "#fff"};
  padding: ${(props) => props.padding || "0px"};
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const P = styled.p`
  font-size: 1rem;
  font-family: "Nunito";
  font-weight: 600;
  flex: ${(props) => props.flx || "1"};
  text-align: ${(props) => props.txtAlign || "justify"};
  padding: 0 10px;
  @media (max-width: 1000px) {
    flex: ${(props) => props.mFlx || "1"};
  }
`;

const Select = styled.select`
  outline: none;
  font-size: 1.3rem;
  font-family: "Open Sans";
  min-width: ${(props) => props.minWidth || "526px"};
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
    min-width: 0px;
    width: 85%;
    margin-top: 15px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Nunito";
  align-items: flex-start;
  text-align: center;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  width: ${(props) => props.width || "65%"};
  justify-content: ${(props) => props.justify || "center"};
  @media (max-width: 1000px) {
    flex-direction: ${(props) => props.direction || "column"};
    width: 100%;
    margin: 10px auto;
  }
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Nunito";
  align-items: center;
  text-align: center;
  margin: 10px auto;
  width: ${(props) => props.width || "100%"};
  justify-content: ${(props) => props.justify || "center"};
  max-width: ${(props) => props.maxWidth || "100%"};
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    margin: ${(props) => props.margin || "0 auto"};
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
  text-align: center;
  height: auto;
  flex: 0;
  font-size: 1.1rem;
  font-family: "Open Sans";
  outline: none;
  border: 2px solid #c9c9c9;
  padding: 4;
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

const RadioContainer = styled.div`
  width: 15%;
  justify-content: "space-evenly";
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    width: fit-content;
    justify-content: "center";
  }
`;

const Radio = styled.input`
  flex: ${(props) => props.flx || "1"};
`;

const TxtInfoInput = styled.textarea`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  flex: ${(props) => props.flex || "0"};
  font-size: 1.5rem;
  resize: vertical;
`;

const InfoInput = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  flex: ${(props) => props.flex || "0"};
  font-size: 1.5rem;
`;

const InfoContainer = styled.section`
  width: ${(props) => props.width || "max-content"};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto;
`;

const Button = styled.button`
  padding: 3px 15px;
  border: 2px solid #143955d3;
  border-radius: 15px;
  width: 10%;
  margin: 10px auto;
`;

const Container = styled.div`
  width: ${(props) => props.width || "100%"};
  margin: 0 auto;
`;

function Orcamentos() {
  const [plano, setPlano] = useState("");
  const [std, setStd] = useState(0);
  const [luxo, setLuxo] = useState(0);
  const [exLuxo, setExLuxo] = useState(0);
  const [pne, setPne] = useState(0);
  const [hidraulico, setHidraulico] = useState(0);
  const [chuveiro, setChuveiro] = useState(0);
  const [pia, setPia] = useState(0);
  const [kros, setKros] = useState(0);
  const [guarita, setGuarita] = useState(0);
  const [bilheteria, setBilheteria] = useState(0);
  const [qtdManut, setQtdManut] = useState("1x por semana (programa padrão)");
  const [vac, setVac] = useState("");

  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [entrega, setEntrega] = useState("");
  const [retirada, setRetirada] = useState("");
  const [endereco, setEndereco] = useState("");
  const [obs, setObs] = useState("");
  const [tipo, setTipo] = useState("");
  const [conhece, setConhece] = useState("");

  let string = `
  ${plano !== "" ? `Plano -> ${plano}` : ""}
  ${std !== "" ? `Standard -> ${std}` : ""}
  ${luxo !== "" ? `Luxo -> ${luxo}` : ""}
  ${exLuxo !== "" ? `Extra Luxo -> ${exLuxo}` : ""}
  ${pne !== "" ? `PNE -> ${pne}` : ""}
  ${hidraulico !== "" ? `$Hidráulico -> {hidraulico}` : ""}
  ${chuveiro !== "" ? `Chuveiro -> ${chuveiro}` : ""}
  ${pia !== "" ? `Pia -> ${pia}` : ""}
  ${kros !== "" ? `Kros -> ${kros}` : ""}
  ${guarita !== "" ? `Guarita -> ${guarita}` : ""}
  ${bilheteria !== "" ? `Bilheteria -> ${bilheteria}` : ""}
  ${qtdManut !== "" ? `Quantidade manutenção -> ${qtdManut}` : ""}
  ${
    vac !== ""
      ? `Manutenção realizada em pavimento elevado (VAC) -> ${vac}`
      : ""
  }
  ${cliente !== "" ? `Cliente -> ${cliente}` : ""}
  ${telefone !== "" ? `Telefone -> ${telefone}` : ""}
  ${email !== "" ? `E-mail -> ${email}` : ""}
  ${entrega !== "" ? `Retirada -> ${entrega}` : ""}
  ${retirada !== "" ? `Retirada -> ${retirada}` : ""}
  ${endereco !== "" ? `Endereço -> ${endereco}` : ""}
  ${obs !== "" ? `Observação -> ${obs}` : ""}
  ${tipo !== "" ? `Tipo -> ${tipo}` : ""}
  ${conhece !== "" ? `Conhece as cabines -> ${conhece}` : ""}
    `;

  return (
    <>
      <Header />
      <Main>
        <Section mb="20px">
          <Img src={orcamento} />
        </Section>

        <Orcamento>
          <Line width="100%">
            <H1 txtAlign="justify" mWidth="100%" flx="8" mtxtAlign="justify">
              1- Escolha seu plano:
            </H1>
            <Select
              flx="1"
              onChange={(e) => {
                e.target.value === "empty"
                  ? alert("O Valor não pode ser vazio")
                  : setPlano(e.target.value);
              }}
            >
              <option value="empty"></option>
              <option value="Mensal">Mensal-Construção Civíl</option>
              <option value="Compra">Compra</option>
              <option value="Diaria">Diária</option>
              <option value="Quinzenal">Quinzenal</option>
            </Select>
          </Line>

          <Line width="100%">
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
          {/* standard / quimico luxo  */}
          <LineContainer
            mt="10px"
            mb="20px"
            width="100%"
            justify="space-between"
          >
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_standard} />
              <P flx="8" mFlx="4">
                Banheiro Quimico Standard
              </P>
              <NumberSelector
                type="number"
                min="0"
                onChange={(e) => {
                  setStd(e.target.value);
                }}
              />
            </Line>
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_luxo} />
              <P flx="8" mFlx="4">
                Banheiro Quimico Luxo
              </P>
              <NumberSelector
                flex="1"
                type="number"
                min="0"
                onChange={(e) => {
                  setLuxo(e.target.value);
                }}
              />
            </Line>
          </LineContainer>
          {/* extra luxo / PNE  */}
          <LineContainer
            mt="10px"
            mb="20px"
            width="100%"
            justify="space-between"
          >
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_extraluxo} />
              <P flx="8" mFlx="4">
                Banheiro Extra Luxo
              </P>
              <NumberSelector
                type="number"
                min="0"
                onChange={(e) => {
                  setExLuxo(e.target.value);
                }}
              />
            </Line>
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_PNE} />
              <P flx="8" mFlx="4">
                Banheiro Quimico PNE
              </P>
              <NumberSelector
                flex="1"
                type="number"
                min="0"
                onChange={(e) => {
                  setPne(e.target.value);
                }}
              />
            </Line>
          </LineContainer>

          {/* hidraulico / chuveiro portátil  */}
          <LineContainer
            mt="10px"
            mb="20px"
            width="100%"
            justify="space-between"
          >
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_hidraulico} />
              <P flx="8" mFlx="4">
                Sanitário Hidráulico
              </P>
              <NumberSelector
                type="number"
                min="0"
                onChange={(e) => {
                  setHidraulico(e.target.value);
                }}
              />
            </Line>
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_chuveiro} />
              <P flx="8" mFlx="4">
                Chuveiro Portátil
              </P>
              <NumberSelector
                flex="1"
                type="number"
                min="0"
                onChange={(e) => {
                  setChuveiro(e.target.value);
                }}
              />
            </Line>
          </LineContainer>
          {/* pia / kros  */}
          <LineContainer
            mt="10px"
            mb="20px"
            width="100%"
            justify="space-between"
          >
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_pia} />
              <P flx="8" mFlx="4">
                Pia Portátil
              </P>
              <NumberSelector
                type="number"
                min="0"
                onChange={(e) => {
                  setPia(e.target.value);
                }}
              />
            </Line>
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_Mictorio} />
              <P flx="8" mFlx="4">
                Mictório Kros
              </P>
              <NumberSelector
                flex="1"
                type="number"
                min="0"
                onChange={(e) => {
                  setKros(e.target.value);
                }}
              />
            </Line>
          </LineContainer>
          {/* guarita / bilheteria  */}
          <LineContainer
            mt="10px"
            mb="20px"
            width="100%"
            justify="space-between"
          >
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_guarita} />
              <P flx="8" mFlx="4">
                Guarita
              </P>
              <NumberSelector
                type="number"
                min="0"
                onChange={(e) => {
                  setGuarita(e.target.value);
                }}
              />
            </Line>
            <Line width="30%" justify="space-evenly" direction="row">
              <Icon src={icone_bilheteria} />
              <P flx="8" mFlx="4">
                Bilheteria
              </P>
              <NumberSelector
                flex="1"
                type="number"
                min="0"
                onChange={(e) => {
                  setBilheteria(e.target.value);
                }}
              />
            </Line>
          </LineContainer>
          <Line width="100%" mt="50px" mb="50px">
            <H1 txtAlign="justify" mr="0" flx="5" mWidth="100%">
              3 - Quantidade de Manutenções Necessárias:{" "}
            </H1>
            <Select
              flx="2.6"
              onChange={(e) => {
                setQtdManut(e.target.value);
              }}
            >
              <option value="1x">1x por semana (programa padrão)</option>
              <option value="2x">2x por semana</option>
              <option value="3x">3x por semana</option>
              <option value="4x">4x por semana</option>
              <option value="5x">5x por semana</option>
              <option value="6x">6x por semana</option>
              <option value="diaria">Diária</option>
            </Select>
          </Line>

          <Line justify="space-between" width="100%" mt="35px" mb="35px">
            <H1 txtAlign="justify" mWidth="100%">
              4 - Manutenção realizada em pavimento elevado (VAC):
            </H1>
            <RadioContainer>
              <Radio
                name="vac"
                value="sim"
                type="radio"
                onSelect={(e) => {
                  setVac(e.target.value);
                }}
              />
              <P mFlx="0">Sim</P>
              <Radio
                name="vac"
                value="não"
                type="radio"
                onSelect={(e) => {
                  setVac(e.target.value);
                }}
              />
              <P mFlx="0">Não</P>
            </RadioContainer>
          </Line>
        </Orcamento>

        <Orcamento bg="#ededed" width="100%">
          <Container width={"70%"}>
            <LineContainer width="100%" justify="space-between">
              <Line width="50%">
                <InfoContainer width="100%">
                  <P>Cliente *</P>
                  <InfoInput
                    flex="3"
                    onChange={(e) => {
                      setCliente(e.target.value);
                    }}
                  />
                </InfoContainer>
              </Line>

              <Line width="50%">
                <InfoContainer width="100%">
                  <P txtAlign="center">Telefone *</P>
                  <InfoInput
                    flex="3"
                    onChange={(e) => {
                      setTelefone(e.target.value);
                    }}
                  />
                </InfoContainer>
              </Line>
            </LineContainer>

            <LineContainer width="100%" justify="space-between">
              <Line width="45%">
                <InfoContainer width="100%">
                  <P>E-Mail *</P>
                  <InfoInput
                    flex="3"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InfoContainer>
              </Line>

              <Line width="50%">
                <P flx="3">Conhece as Cabines</P>
                <Select
                  minWidth="250px"
                  onChange={(e) => {
                    setConhece(e.target.value);
                  }}
                >
                  <option value={"empty"}></option>
                  <option value={"Sim"}>Sim</option>
                  <option value={"Não"}>Não</option>
                </Select>

                <Radio
                  value="Locação"
                  name="tipo"
                  type="radio"
                  onChange={(e) => {
                    setTipo(e.target.value);
                  }}
                />
                <P>Locação</P>
                <Radio
                  value="Compra"
                  name="tipo"
                  type="radio"
                  onChange={(e) => {
                    setTipo(e.target.value);
                  }}
                />
                <P>Compra</P>
              </Line>
            </LineContainer>

            <LineContainer width="100%" justify="space-between">
              <Line width="50%">
                <InfoContainer width="100%">
                  <P flx="4">Data de entrega</P>
                  <InfoInput
                    flex="7"
                    type={"date"}
                    onChange={(e) => {
                      setEntrega(e.target.value);
                    }}
                  />
                </InfoContainer>
              </Line>

              <Line width="50%">
                <P flx="4">Data de retirada</P>
                <InfoInput
                  flex="7"
                  type={"date"}
                  onChange={(e) => {
                    setRetirada(e.target.value);
                  }}
                />
              </Line>
            </LineContainer>

            <Line width="100%">
              <P>Endereço*</P>
              <InfoInput
                flex="8"
                onChange={(e) => {
                  setEndereco(e.target.value);
                }}
              />
            </Line>

            <Line mt="20px" mb="20px" width="100%">
              <P>Obs.</P>
              <TxtInfoInput
                flex="8"
                onChange={(e) => {
                  setObs(e.target.value);
                }}
              />
            </Line>
          </Container>
        </Orcamento>

        <Button
          onClick={() => {
            api
              .post("/send", {
                subject: `América rental - formulário de orçamento, cliente "${cliente}"`,

                message: string,
                receivers: ["murilo.cardoso@americarental.com.br"],
              })
              .then((_) => alert("E-mail enviado com sucesso!"))
              .catch((e) => alert(e.target.value));
          }}
        >
          Enviar
        </Button>
      </Main>
      <Footer />
    </>
  );
}

export default Orcamentos;
