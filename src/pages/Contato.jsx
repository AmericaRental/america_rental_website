import React, { useState } from "react";

import Header from "../components/global/header";
import Footer from "../components/global/footer";
import styled from "styled-components";

import contato from "../images/contato.svg";
import WhatsappButton from "../components/global/whatsapp_button";

import api from "../api/axios";

const Banner = styled.div`
  width: 100%;
  position: initial;
  height: 50vh;
  display: flex;
  justify-content: left;
  align-items: center;
  @media (max-width: 1000px) {
    height: 11vh;
    margin-bottom: 2%;
  }
`;

const BannerImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: auto;
  z-index: ${(props) => props.zindex || "-1"};
  left: 0;
  top: 120px;
  position: ${(props) => props.position || "absolute"};
  margin: ${(props) => props.margin || "0 0 0 0"};
  @media (max-width: 1000px) {
    top: 9.7%;
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
  width: 60vw;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "DM Sans";
  font-size: 1.237rem;
`;

const Button = styled.button`
  width: auto;
  margin: 15px auto;
  padding: 10px 15px;
  border: 3.5px solid #1d436b;
  background-color: #fff;
  border-radius: 20px;
  font-size: 1.2rem;
  color: #1d436b;
  font-family: "Montserrat";
`;

const Form = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  margin: auto;
`;

const Input = styled.input`
  border: ${(props) => props.border};
  border-radius: 14px;
  padding: 0.6rem 1rem;
  transition: 0.5s ease-in-out;
  font-family: "Montserrat";
  outline: none;
  font-size: 1rem;
  margin: 0 10px;
`;

const P = styled.p`
  font-family: "Inter";
  font-size: 1rem;
  margin: 5px 0px 5px 10px;
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
  outline: none;
  font-size: 1rem;
  margin: 0 10px;
  height: 200px;
  resize: vertical;
`;

function Contato() {
  const [border, setBorder] = useState("2px solid rgba(0, 0, 0, 0.51)");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cliente, setCliente] = useState("");
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

      <main>
        <WhatsappButton />
        <Banner>
          <BannerImg src={contato} alt="banner" />
          <Title
            margin={"0 0px 0 2%"}
            size={"3.5rem"}
            width={"40%"}
            family={"Montserrat"}
          >
            Entre em contato
          </Title>
        </Banner>

        <Container>
          <H1>
            Para qualquer informação, dúvida ou comentário preencha o formulário
            abaixo
          </H1>
          <Form>
            <FrmContainer>
              <P>Cliente</P>
              <Input
                alt="cliente"
                inputMode="text"
                border={"2px solid rgba(0, 0, 0, 0.51)"}
                onChange={(c) => {
                  setCliente(c.target.value);
                }}
              />
            </FrmContainer>

            <FrmContainer>
              <P>Nome completo</P>
              <Input
                alt="nome completo"
                inputMode="text"
                border="2px solid rgba(0, 0, 0, 0.51)"
                onChange={(n) => {
                  setNome(n.target.value);
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
                  subject: `América rental - formulário de contato, cliente "${nome} - ${cliente}"`,

                  message: `${mensagem}
                  
                  responder para - ${email}
                  ou ligar para - ${telefone}
                  `,
                  receivers: [
                    "muri157k@gmail.com",
                    "cardoso.murilo2002@gmail.com",
                  ],
                })
                .then(() => alert("E-mail enviado com sucesso!"))
                .catch((e) => alert(e.target.value))
            }
          >
            Enviar
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Contato;
