import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import styled from "styled-components";
import location from '../images/location.png';
import contato from "../images/contato.webp";
import WhatsappButton from "../components/global/whatsapp_button";
import api from "../api/axios";
import "../css/contato.css";

const Banner = styled.div`
  width: 100%;
  position: initial;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 90px;
  @media (max-width: 1000px) {
    height: 5vh;
  }
`;

const BannerImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: 100%;
  object-fit: cover;
  margin: ${(props) => props.margin || "0 0 0 0"};
  @media (max-width: 1000px) {
    object-fit: cover;
  }
`;

const Title = styled.h1`
  width: ${(props) => props.width || "auto"};
  font-family: ${(props) => props.family || "Inter"};
  color: ${(props) => props.color || "#fafafa"};
  font-size: ${(props) => props.size || "80px"};
  letter-spacing: 0.03em;
  margin: ${(props) => props.margin || "0 0 0 0"};
  font-weight: ${(props) => props.weight || "400"};
  text-transform: uppercase;
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 20px;
  }
`;

const Container = styled.section`
  background-color: ${(props) => props.bg || "#FFF"};
  width: 50%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0%;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "DM Sans";
  font-size: 1.4rem;
`;

const Button = styled.button`
  width: auto;
  margin: 15px auto;
  padding: 4px 35px;
  border: 3px solid #1d436b;
  background-color: transparent;
  border-radius: 30px;
  font-size: 1.2rem;
  color: #1d436b;
  background-color: #f2f2f2;
  font-family: "Montserrat";
  transition: 0.2s ease-in-out;
  :hover {
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 5px 0 #00000076;
  }
`;

const Form = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 1000px) {
    width: 85%;
  }
`;

const Input = styled.input`
  border: ${(props) => props.border};
  border-radius: 14px;
  padding: 0.6rem 1rem;
  transition: 0.5s ease-in-out;
  font-family: "Montserrat";
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  margin: 0 10px;
`;

const P = styled.p`
  font-family: ${(props) => props.family || "Inter"};
  font-size: ${(props) => props.size || "1rem"};
  margin: ${(props) => props.margin || "5px 0px 5px 10px"};
  letter-spacing: ${(props) => props.spacing || "0px"};
  align-items: center;
  display: flex;
  color: ${(props) => props.color || "#000"};
  font-weight: 400;
`;

const FrmContainer = styled.article`
  display: flex;
  /* width: ${(props) => props.width}; */
  flex-direction: column;
  flex: 1;
  flex-basis: 50%;
  margin: 10px 0;
`;

const Textarea = styled.textarea`
  border: ${(props) => props.border};
  border-radius: 14px;
  padding: 0.6rem 1rem;
  transition: 0.5s ease-in-out;
  font-family: "Montserrat";
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  margin: 0 10px;
  height: 200px;
  resize: vertical;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "space-between"};
  margin: ${(props) => props.margin || "0"};
`;

const InformationsContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: "Inter";
  background-color: #143753;
  padding: 15px 0;
`;

const InformationItem = styled.div`
  width: ${(props) => props.width || "50%"};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: center;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img `
  margin: 10px auto;
  width: ${props => props.width || '80%'};
  height: ${props => props.height || '400px'};
  object-fit: cover;
`

function Contato() {
  const [border, setBorder] = useState("2px solid rgba(0, 0, 0, 0.51)");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const emailValidator = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,63}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );

  const emailValidatorFn = (email) => {
    console.log(`before -> ${border}`);
    if (!emailValidator.test(email) && email.length > 1) {
      setBorder("2px solid red");
    } else {
      email.length > 1
        ? setBorder("2px solid rgba(0, 0, 0, 1)")
        : setBorder("2px solid rgba(0, 0, 0, 0.51)");
    }
  };
  return (
    <>
      <Header />
      <WhatsappButton />
      <Banner>
        <BannerImg src={contato} alt="banner" />
      </Banner>
      <Main>
        <Container bg="#f2f2f2">
          <H1>
            Para qualquer informação, dúvida ou comentário preencha o formulário
            abaixo
          </H1>
          <Form>
            <FrmContainer>
              <P>Nome</P>
              <Input
                alt="cliente"
                inputMode="text"
                border={"2px solid rgba(0, 0, 0, 0.51)"}
                onChange={(c) => {
                  setNome(c.target.value);
                }}
              />
            </FrmContainer>

            <FrmContainer>
              <P>E-mail</P>
              <Input
                alt="email"
                inputMode="text"
                border={border}
                onChange={(e) => {
                  emailValidatorFn(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </FrmContainer>

            <FrmContainer>
              <P>Telefone</P>
              <Input
                alt="Telefone"
                inputMode="text"
                border="2px solid rgba(0, 0, 0, 0.51)"
                onChange={(t) => {
                  setTelefone(t.target.value);
                }}
              />
            </FrmContainer>

            <FrmContainer>
              <P>Mensagem</P>
              <Textarea
                alt="Mensagem"
                inputMode="text"
                border="2px solid rgba(0, 0, 0, 0.51)"
                onChange={(m) => {
                  setMensagem(m.target.value);
                }}
              />
            </FrmContainer>
          </Form>
          <Button
            onClick={() =>
              api
                .post("/send", {
                  subject: `América rental - formulário de contato, cliente "${nome}"`,

                  message: `${mensagem}
                  
                  responder para - ${email}
                  ou ligar para - ${telefone}
                  `,
                  receivers: ["contato@americarental.com"],
                })
                .then((_) => alert("E-mail enviado com sucesso!"))
                .catch((e) => alert(e.target.value))
            }
          >
            Enviar
          </Button>
        </Container>

        <Container>
          <Title size="2rem" color="#143753" weight="600" margin="0 auto">
            Informações de Contato
          </Title>
          <Line justify="center">
            <AiOutlineMail color="#143753" className="contactsIcon" />
            <P color="#686868" size="1.4rem">
              contato@americarental.com.br
            </P>
          </Line>

          <InformationsContainer>
            <Line>
              <InformationItem>
                <ImWhatsapp
                  color="#fff"
                  size={"50px"}
                  className="contactsIcon"
                />
                <P size="1.5rem" color="#fafafa">
                  11 9 9104-2685
                </P>
              </InformationItem>
              <InformationItem>
                <FiPhoneCall
                  color="#fff"
                  size={"50px"}
                  className="contactsIcon"
                />
                <P size="1.5rem" color="#fafafa">
                  11 2499-3353
                </P>
              </InformationItem>
            </Line>
            <Line>
              <Title size="1.8rem" margin="10px auto" weight="bold">
                Horário de Atendimento
              </Title>
            </Line>
            <Line>
              <P
                spacing="3px"
                family="Open Sans"
                size="1.5rem"
                margin="5px auto"
                color="white"
              >
                Segunda à Sexta das 08h as 17h30
              </P>
            </Line>
          </InformationsContainer>
          <Img src={location}/>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Contato;
