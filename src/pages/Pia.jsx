import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/global/footer";
import Header from "../components/global/header";

import banner from "../images/pia/banner.svg";
import "../css/pia_swiper.css";

import pia from "../images/pia/pia.svg";
import pia2 from "../images/pia/pia2.svg";
import pia3 from "../images/pia/pia3.svg";
import TechnicalVisit from "../components/global/technical_visit";
import WhatsappButton from "../components/global/whatsapp_button";

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
    width: ${(props) => props.width || " 100%"};
    height: auto;
    display: flex;
    margin: ${(props) => props.margin || "0"};
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.jContent || "center"};
    align-items: ${(props) => props.itemsAlign || "center"};
    background-color: ${(props) => props.background || "transparent"};
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

  const Li = styled.li`
    font-family: "Inter";
    font-size: 1.2rem;
    margin: 10px 0;
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
          Produtos Para Constru????o Civil
        </Title>
      </Banner>
      <WhatsappButton />
      <Main>
        <Container width="80%" margin="0 auto">
          <Container width="60%" direction="column" jContent="center">
            <P txtTransform="Uppercase" size="1.1rem">
              Modelos Port??teis
            </P>
            <H1 margin="10px 0 20px 0" size="2.2rem">
              pia port??til
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
                pias port??teis s??o ideais para eventos de pequeno e grande porte
                e obras,
              </strong>{" "}
              garantindo a correta higieniza????o das m??os e mantendo os
              protocolos de seguran??a.
            </P>
            <P
              color="black"
              width={"60%"}
              line="25px"
              margin="15px 0"
              size="1.25rem"
            >
              Com <strong>capacidade de at?? 65l de ??gua </strong>que pode ser
              reabastecida facilmente, cada torre comporta de 1 a 4 pias com
              capacidade independente.
            </P>
          </Container>
          <Img src={pia} alt="pia port??til" width={"20%"} margin="-2% 0 2% 0" />
        </Container>

        <Container direction="column">
          <Container background="#143854" margin="0 0 1.8% 0">
            <P color="#fff" family="Montserrat" margin="7px 0">
              Especifica????o do Produto
            </P>
          </Container>

          <Container>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                autoplay: 1000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="swiperpia"
            >
              <SwiperSlide className="swiperSlideItem">
                <img src={pia2} alt="pia" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlideItem">
                <img src={pia3} alt="pia" />
              </SwiperSlide>
            </Swiper>

            <Container direction="column" width="35%" itemsAlign="left">
              <ul>
                <Li>65L de capaciade de armazenamento</Li>
                <Li>Torre com 1 a 4 pias</Li>
                <Li>F??cil reabastecimento de ??gua e insumos</Li>
                <Li>Sistema de bombeamento manual com os p??s</Li>
                <Li>Suporte de papel toalha e sabonete</Li>
                <Li>Reservat??rio de insumos pelo o teto</Li>
                <Li>Tanque de descarte de 260L</Li>
                <Li>Lixeira</Li>
                <Li>Piso antiderrapante</Li>
              </ul>

              <H1 margin="5% 0">dimens??es do produto</H1>
              <P color="#1e5680" size="1.5rem">
                A 1,75m X L 1,15m X P 1,15m
              </P>
              <P color="#1e5680" size="1.2rem" margin="3% 0 0 0">
                50Kg
              </P>
            </Container>
          </Container>
        </Container>

        <TechnicalVisit />
      </Main>
      <Footer />
    </>
  );
}

export default Pia;
