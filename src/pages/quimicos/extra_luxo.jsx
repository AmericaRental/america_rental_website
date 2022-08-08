import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/global/footer";
import Header from "../../components/global/header";
import TechnicalVisit from "../../components/global/technical_visit";

import banner from "../../images/pia/banner.svg";
import cabine1 from "../../images/quimicos/extra_luxo/cabine1.svg";
import slide1 from "../../images/quimicos/extra_luxo/slide1.svg";
import slide2 from "../../images/quimicos/extra_luxo/slide2.svg";
import slide3 from "../../images/quimicos/extra_luxo/slide3.svg";
import slide4 from "../../images/quimicos/extra_luxo/slide4.svg";
import slide5 from "../../images/quimicos/extra_luxo/slide5.svg";


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
    width: 100%;
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
    justify-content: ${(props) => props.jContent || "center"};
    align-items: ${(props) => props.itemsAlign || "center"};
    background-color: ${(props) => props.background || "transparent"};
    @media (max-width: 1000px) {
      flex-direction: ${(props) => props.mdirection || "row"};
      
    }
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

function ExtraLuxo() {
  
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
        <Container width="80%" margin="0 auto">
          <Container width="60%" direction="column" jContent="center">
            <P txtTransform="Uppercase" size="1.1rem">
              cabines de banheiro portátil
            </P>
            <H1 margin="10px 0 20px 0" size="2.2rem">
              modelo extra luxo
            </H1>
            <P
              color="black"
              width={"60%"}
              line="25px"
              margin="15px 0"
              size="1.25rem"
            >
              As cabines de <strong>modelo Extra Luxo</strong> são as mais
              completas. Possuem um <strong>sistema de descarga,</strong>{" "}
              impedindo a visualização dos dejetos no interior do tanque e{" "}
              <strong>pia para lavar as mãos</strong>
            </P>
            <P
              color="black"
              width={"60%"}
              line="25px"
              margin="15px 0"
              size="1.25rem"
            >
              A quantidade de limpezas é determinada pela <strong>quantidade média de usuários</strong>, sendo o programa mínimo composto por 1 limpeza por semana, não podendo ser menos pois esta é a validade do produto químico usado. Nessa manutenção é realizada a troca dos insumos, <strong>sucção do tanque e a limpeza e lavagem interna da cabine</strong>.
            </P>
          </Container>
          <Img
            src={cabine1}
            alt="pia portátil"
            width={"20%"}
            margin="-2% 0 2% 0"
          />
        </Container>

        <Container direction="column">
          <Container background="#143854" margin="0 0 1.8% 0">
            <P color="#fff" family="Montserrat" margin="7px 0">
              Especificação do Produto
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
                <img src={slide1} alt="cabine" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlideItem">
                <img src={slide2} alt="cabine" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlideItem">
                <img src={slide3} alt="cabine" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlideItem">
                <img src={slide4} alt="cabine" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlideItem">
                <img src={slide5} alt="cabine" />
              </SwiperSlide>
            </Swiper>

            <Container direction="column" width="35%" itemsAlign="left">
              <ul>
                <Li>
                  Caixa de dejetos com descarga, impedindo a visualização do
                  interior
                </Li>
                <Li>Pia para lavar as mãos</Li>
                <Li>Mictório</Li>
                <Li>Suporte para papel Higiênico, Papel toalha e Sabonete</Li>
                <Li>Cobertura translúcida para luz externa</Li>
                <Li>Trinco indicador Ocupado e livre</Li>
                <Li>Ventilaçao interna por telas</Li>
                <Li>Piso Antiderrapante</Li>
                <Li>Identificação Masculino e Feminino</Li>
              </ul>

              <H1 margin="5% 0">dimensões do produto</H1>
              <P color="#1e5680" size="1.5rem">
                A 2,24m X L 1,22m X P 1,16m
              </P>
              <P color="#1e5680" size="1.2rem" margin="3% 0 0 0">
                74Kg
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

export default ExtraLuxo;
