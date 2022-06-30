import React from "react";
import styled from "styled-components";
import Footer from "../components/global/footer";
import Header from "../components/global/header";

import banner from "../images/quimicos/banner.svg";
import standard from "../images/quimicos/standard.svg";
import luxo from "../images/quimicos/luxo.svg";
import extra_luxo from "../images/quimicos/extra_luxo.svg";
import pne from "../images/quimicos/pne.svg";

import step1 from "../images/quimicos/step1.svg";
import step2 from "../images/quimicos/step2.svg";
import step3 from "../images/quimicos/step3.svg";
import step4 from "../images/quimicos/step4.svg";

import "../css/chemicals_banner_style.css";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Quimicos() {
  const Banner = styled.img`
    width: 100vw;
  `;
  const Produtos = styled.section`
    width: 100vw;
    height: 350px;
    background-color: #ededed;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `;

  const Img = styled.img`
    width: 13%;
    height: auto;
  `;

  const Container = styled.div`
    width: ${(props) => props.width || "100vw"};
    height: ${(props) => props.height || "fit-content"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    display: flex;
    flex-direction: ${(props) => props.direction || "column"};
    align-items: center;
    justify-content: ${(props) => props.jcontent || "center"};
  `;

  const P = styled.p`
    font-size: 1.4rem;
    font-family: "Inter";
    line-height: 23px;
    text-align: justify;
  `;
  return (
    <>
      <Header />
      <Banner src={banner} alt="banner" />
      <Produtos>
        <Container width="83%" jcontent="space-evenly" direction="row">
          <Img src={standard} alt="modelo standard" />
          <Img src={luxo} alt="modelo luxo" />
          <Img src={extra_luxo} alt="modelo extra luxo" />
          <Img src={pne} alt="modelo pne" />
        </Container>
      </Produtos>

      <Container width="82%" jcontent="center" margin='0 auto'>
        <Container
          width="83%"
          direction="row"
          height="max-content"
          jcontent="center"
          margin="0 auto"
        >
          <Container width="45%" direction="row" jcontent="space-evenly" margin='0 0% 0 0'>
            <Swiper
              autoHeight={true}
              centeredSlides={true}
              autoplay={{
                autoplay: 1500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              <SwiperSlide className="bannerSwipe">
                <img src={step1} alt="step1" />
              </SwiperSlide>
              <SwiperSlide className="bannerSwipe">
                <img src={step2} alt="step2" />
              </SwiperSlide>
              <SwiperSlide className="bannerSwipe">
                <img src={step3} alt="step3" />
              </SwiperSlide>
              <SwiperSlide className="bannerSwipe">
                <img src={step4} alt="step4" />
              </SwiperSlide>
            </Swiper>
          </Container>
          <Container width="55%" padding='0 10px 0 0px'>
            <P>
              <strong>
                Como o Banheiro Químico não está ligado na rede de esgoto ele
                precisa ser higienizado, no mínimo, semanalmente (a depender do
                número de usuários).
              </strong>{" "}
              <br />
              <br /> A Higienização do Banheiro Químico é feita por meio de
              <strong> sucção para um caminhão tanque</strong>, após a sucção dos
              dejetos o caminhão faz o descarte e emite o comprovante com a
              SABESP.
              <br />
              <br /> O tanque do
              <strong> banheiro tem capacidade de até 220 litros</strong>,
              dentro desse tanque é colocado um produto químico que evita o mal
              cheiro e degenera os dejetos facilitando a sucção. <br />
              <br /> O produto tem <strong> validade de 7 dias</strong>, sendo
              necessário fazer a manutenção semanalmente para manter o seu
              efeito efetivo.
            </P>
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Quimicos;
