import React from "react";

import Header from "../components/global/header";
import Footer from "../components/global/footer";
import styled from "styled-components";

import contato from "../images/contato.svg";
import WhatsappButton from "../components/global/whatsapp_button";

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
  margin: 10px auto;
  padding: 10px;
  border: 3.5px solid #1d436b;
  background-color: #fff;
  border-radius: 20px;
  font-size: 1.2rem;
  color: #1d436b;
  font-family: "Montserrat";
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

function Contato() {
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
          {/*<Button
            onClick={() =>
              (window.location = "mailto:vendas@americarental.com.br")
            }
          >
            Enviar E-Mail
          </Button> */}

          <Form></Form>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Contato;
