import React from "react";
import styled from "styled-components";
import Footer from "../components/global/footer";
import Header from "../components/global/header";

import banner from "../images/pia/banner.svg";

import pia from "../images/pia/pia.svg";
import pia2 from "../images/pia/pia2.svg";

function Pia() {
  const Banner = styled.div`
    width: 100%;
    position: initial;
    height: 50vh;
    display: flex;
    justify-content: left;
    align-items: center;
  `;

  const BannerImg = styled.img`
    width: ${(props) => props.width || "100%"};
    height: auto;
    z-index: ${(props) => props.zindex || "-1"};
    left: 0;
    top: 120px;
    position: ${(props) => props.position || "absolute"};
    margin: ${(props) => props.margin || "0 0 0 0"};
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
  `;
  const Main = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column; 
    margin: 0 auto;
  `;

  const Img = styled.img`
    width: ${(props) => props.width || "50%"};
    height: auto;
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    filter: ${(props) => props.filter || "none"};
  `;

  const Container = styled.div`
    width: ${(props) => props.width || " 100vw"};
    height: auto;
    display: flex;
    margin: ${props => props.margin || '0'};
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.jContent || "center"};
    align-items: ${(props) => props.itemsAlign || "center"};
    background-color: ${props => props.background || 'transparent'};
  `;

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

  return (
    <>
      <Header />
      <Banner>
        <BannerImg src={banner} alt="banner" />
        <Title
          margin={"0 0px 0 2%"}
          size={"3.5rem"}
          width={"40%"}
          family={"Montserrat"}
        >
          Produtos Para Construção Civil
        </Title>
      </Banner>
      <Main>
        <Container width='80%' margin='0 auto'>
          <Container width="60%" direction="column" jContent="center">
            <P txtTransform="Uppercase" size="1.1rem">
              Modelos Portáteis
            </P>
            <H1 margin="10px 0 20px 0" size="2.2rem">
              pia portátil
            </H1>
            <P
              color="black"
              width={"60%"}
              line="25px"
              margin="15px 0"
              size="1.25rem"
            >
              As{" "}
              <strong>
                pias portáteis são ideais para eventos de pequeno e grande porte
                e obras,
              </strong>{" "}
              garantindo a correta higienização das mãos e mantendo os
              protocolos de segurança.
            </P>
            <P
              color="black"
              width={"60%"}
              line="25px"
              margin="15px 0"
              size="1.25rem"
            >
              Com <strong>capacidade de até 65l de água </strong>que pode ser
              reabastecida facilmente, cada torre comporta de 1 a 4 pias com
              capacidade independente.
            </P>
          </Container>
          <Img src={pia} alt="pia portátil" width={"20%"} margin="-2% 0 2% 0" />
        </Container>

        <Container direction='column'>
          <Container background='#143854' margin='0 0 1.8% 0'>
            <P color='#fff' family='Montserrat' margin='7px 0'>Especificação do Produto</P>
          </Container>

          <Container>

          </Container>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Pia;
