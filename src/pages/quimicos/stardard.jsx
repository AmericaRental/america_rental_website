import React from "react";
import styled from "styled-components";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/global/footer";
import Header from "../../components/global/header";
import TechnicalVisit from "../../components/global/technical_visit";

import banner1 from "../../images/quimicos/standard/banner1.svg";
import banner2 from "../../images/quimicos/standard/banner2.svg";
import banner3 from "../../images/quimicos/standard/banner3.svg";
import standard from "../../images/quimicos/standard/standard.svg";
import standard2 from "../../images/quimicos/standard/standard2.svg";

import "../../css/cabine_standard.css";
import useWindowChange from "../../components/global/hooks/useWindowWidth";

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
  z-index: 2;
  @media (max-width: 1000px) {
    margin: ${(props) => props.mMargin || "0"};
  }
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
  @media (max-width: 1000px) {
    width: ${(props) => props.mWidth || " 100%"};
    padding: ${(props) => props.mPadding || "0"};
    align-items: center;
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

  @media (max-width: 1000px) {
    width: ${(props) => props.mWidth || "100%"};
    text-align: ${(props) => props.mTxtAlign || "center"};
    margin: ${(props) => props.mMargin || "0"};
    font-size: ${(props) => props.mSize || "2rem"};
  }
`;

const H1 = styled.h1`
  font-size: ${(props) => props.size || "2rem"};
  color: #1e5680;
  font-family: "Inter";
  text-transform: uppercase;
  margin: ${(props) => props.margin || "0"};
  @media screen {
    font-size: ${(props) => props.mSize || "2rem"};
    width: 100%;
    text-align: center;
  }
`;

const UL = styled.ul`
  width: 80%;
  margin: 0 auto;
  text-align: justify;
`;

const Li = styled.li`
  font-family: "Inter";
  font-size: 1.2rem;
  margin: 10px 0;
`;
function Standard() {
  const [width] = useWindowChange();

  return (
    <>
      <Header />
      <Swiper
        centeredSlides={true}
        autoplay={{
          autoplay: 1000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="cabine-swiper"
        id="cabineStd"
      >
        <SwiperSlide>
          <img src={banner1} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="banner" />
        </SwiperSlide>
      </Swiper>

      {width <= 1000 ? (
        <Main>
          <Container margin="15px auto 0px auto" direction="column">
            <Container margin="0 auto">
              <Img
                src={standard}
                alt="cabine standard"
                width={"30%"}
                margin="-2% 0 2% 0"
                mMargin="0px 0 10px 20px"
              />
              <Container direction="column" mPadding="0 8px">
                <P
                  txtTransform="Uppercase"
                  mMargin="15px auto"
                  size="1.2rem"
                  mSize="1.15rem"
                  mTxtAlign="center"
                >
                  Cabines de banheiro químico
                </P>
                <H1 margin="0 auto" size="2.2rem" mSize="1.8rem">
                  modelo standard
                </H1>
              </Container>
            </Container>
            <P
              color="black"
              width={"60%"}
              mWidth="90%"
              mTxtAlign="justify"
              line="25px"
              margin="15px 0"
              mMargin="25px 0 10px 0"
              size="1.25rem"
              mSize="1.33rem"
            >
              <strong>As cabines de modelos Standard são as mais simples.</strong> Sendo o modelo
              de entrada,<strong>{" "}normalmente usada para obras{" "}</strong>em geral, não possuem
              descarga.<br/> Contém um produto químico de tonalidade azul escuro, que
              inibe a visualização dos resíduos, sendo possível ver os resíduos
              no interior do tanque.<br/> A <strong>quantidade de limpezas</strong> é determinada pela <strong>quantidade média de usuários</strong>, sendo o programa mínimo composto por
              1 limpeza por semana, não podendo ser menos pois esta é a validade
              do produto químico usado.<br/>Na manutenção é realizada a reposição
              dos insumos, sucção do tanque e a limpeza e lavagem interna da
              cabine.
            </P>
          </Container>

          <Container direction="column">
            <Container background="#143854" margin="0 0 2% 0" mPadding="10px 0">
              <P color="#fafafa" family="Montserrat">
                Especificação do Produto
              </P>
            </Container>
            <Container direction='column'>
              <Img
                src={standard2}
                alt="cabine standard"
                width="450px"
                margin="0 3.5% 0 0"
              />

              <Container direction="column" width="35%" itemsAlign="left">
                <UL>
                  <Li>Caixa de dejetos com assento</Li>
                  <Li>Mictório</Li>
                  <Li>Suporte para papel Higiênico</Li>
                  <Li>
                    Cobertura Translúcida para aproveitamento de luz externa
                  </Li>
                  <Li>
                    Cobertura com canaletas para impedir a entrada de chuva
                  </Li>
                  <Li>Tubo Respiratório</Li>
                  <Li>Trinco indicador Ocupado e Livre</Li>
                  <Li>Ventilação interna por telas</Li>
                  <Li>Piso Antiderrapante</Li>
                  <Li>Identificação Masculino e Feminino</Li>
                </UL>

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
      ) : (
        <Main>
          <Container width="80%" margin="0 auto">
            <Container width="60%" direction="column" jContent="center">
              <P txtTransform="Uppercase" size="1.1rem">
                cabines de banheiro químico
              </P>
              <H1 margin="10px 0 20px 0" size="2.2rem">
                modelo standard
              </H1>
              <P
                color="black"
                width={"60%"}
                line="25px"
                margin="15px 0"
                size="1.25rem"
              >
                As cabines de <strong>modelo Luxo</strong> possuem um{" "}
                <strong>sistema de descarga,</strong> impedindo a visualização
                dos dejetos no interior do tanque.
              </P>
              <P
                color="black"
                width={"60%"}
                line="25px"
                margin="15px 0"
                size="1.25rem"
              >
                A <strong>quantidade de limpezas</strong> é determinada pela,{" "}
                <strong>quantidade média de usuários,</strong> sendo o programa
                mínimo composto por 1 limpeza por semana, não podendo ser menos
                pois esta é a validade do produto químico usado. .
              </P>
              <P
                color="black"
                width={"60%"}
                line="25px"
                margin="15px 0"
                size="1.25rem"
              >
                Na <strong>manutenção</strong> é realizada a reposição dos
                insumos, sucção do tanque e a limpeza e lavagem interna da
                cabine.
              </P>
            </Container>
            <Img
              src={standard}
              alt="cabine standard"
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
              <Img
                src={standard2}
                alt="cabine standard"
                width="450px"
                margin="0 3.5% 0 0"
              />

              <Container direction="column" width="35%" itemsAlign="left">
                <ul>
                  <Li>Caixa de dejetos com assento</Li>
                  <Li>Mictório</Li>
                  <Li>Suporte para papel Higiênico</Li>
                  <Li>
                    Cobertura Translúcida para aproveitamento de luz externa
                  </Li>
                  <Li>
                    Cobertura com canaletas para impedir a entrada de chuva
                  </Li>
                  <Li>Tubo Respiratório</Li>
                  <Li>Trinco indicador Ocupado e Livre</Li>
                  <Li>Ventilação interna por telas</Li>
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
      )}
      <Footer />
    </>
  );
}

export default Standard;
