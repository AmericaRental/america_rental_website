import React from "react";
import styled from "styled-components";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowChange from "../../components/global/hooks/useWindowWidth";
import "../../css/cabine_standard.css";
import Footer from "./footer";
import Header from "./header";
import TechnicalVisit from "./technical_visit";

const Banner = styled.div`
  width: 100%;
  position: initial;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 90px;
  @media (max-width: 1000px) {
  object-fit: cover;
    height: 12vh;
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
    width: ${(props) => props.mWidth || "100%"};
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

function Product(props) {
  const [width] = useWindowChange();

  return (
    <>
      <Header />

      {props.banner.length >= 2 ? (
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
          {props.banner.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="banner" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Banner>
          <BannerImg src={props.banner} alt="banner" />
        </Banner>
      )}

      {width <= 1000 ? (
        <Main>
          <Container margin="15px auto 0px auto" direction="column">
            <Container margin="0 auto">
              <Img
                src={props.prodImg}
                alt="cabine standard"
                mWidth={"30%"}
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
                  {props.type}
                </P>
                <H1 margin="0 auto" size="2.2rem" mSize="1.8rem">
                  {props.name}
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
              {props.description}
            </P>
          </Container>

          <Container direction="column">
            <Container background="#143854" margin="0 0 2% 0" mPadding="10px 0">
              <P color="#fafafa" family="Montserrat">
                Especificação do Produto
              </P>
            </Container>
            <Container direction="column">
            {props.imgs.length > 1 ? (
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
                  {props.imgs.map((item, index) => {
                    return (
                      <SwiperSlide className="swiperSlideItem" key={index}>
                        <img src={item} alt="slider" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <Img
                  src={props.imgs}
                  alt="cabine standard"
                  width="450px"
                  margin="0 3.5% 0 0"
                />
              )}

              <Container direction="column" width="35%" itemsAlign="left">
                <UL>
                  {props.specs.map((item, index) => {
                    return <Li key={index}>{item}</Li>;
                  })}
                </UL>

                <H1 margin="5% 0">dimensões do produto</H1>
                <P color="#1e5680" size="1.5rem">
                  {props.prodDimension}
                </P>
                <P color="#1e5680" size="1.2rem" margin="3% 0 0 0">
                  {props.prodWeight}
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
                {props.type}
              </P>
              <H1 margin="10px 0 20px 0" size="2.2rem">
                {props.name}
              </H1>
              <P
                color="black"
                width={"60%"}
                line="25px"
                margin="15px 0"
                size="1.25rem"
              >
                {props.description}
              </P>
            </Container>
            <Img
              src={props.prodImg}
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
              {props.imgs.length > 1 ? (
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
                  {props.imgs.map((item, index) => {
                    return (
                      <SwiperSlide className="swiperSlideItem">
                        <img src={item} alt="slider" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <Img
                  src={props.imgs}
                  alt="cabine standard"
                  width="450px"
                  margin="0 3.5% 0 0"
                />
              )}

              <Container direction="column" width="35%" itemsAlign="left">
                <ul>
                  {props.specs.map((item, index) => {
                    return <Li key={index}>{item}</Li>;
                  })}
                </ul>

                <H1 margin="5% 0">dimensões do produto</H1>
                <P color="#1e5680" size="1.5rem">
                  {props.prodDimension}
                </P>
                <P color="#1e5680" size="1.2rem" margin="3% 0 0 0">
                  {props.prodWeight}
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

export default Product;
