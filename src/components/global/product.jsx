import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/global/footer";
import Header from "../../components/global/header";
import TechnicalVisit from "../../components/global/technical_visit";

import banner from "../../images/pia/banner.svg";

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

function Product(props) {
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
              {props.prodType}
            </P>
            <H1 margin="10px 0 20px 0" size="2.2rem">
              {props.prodName}
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
            alt={props.descProd}
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
              {props.slideImgs.length > 1 ? (
                props.slideImgs.map((item, index) => {
                  return (
                    <SwiperSlide className="swiperSlideItem">
                      <img src={item} alt={props.slideAlt} />
                    </SwiperSlide>
                  );
                })
              ) : (
                <img src={props.slideImgs} alt={props.slideAlt} />
              )}
            </Swiper>

            <Container direction="column" width="35%" itemsAlign="left">
              <ul>
                {props.specs.map((item, index) => {
                  return <Li key={index}>{item}</Li>;
                })}
              </ul>

              <H1 margin="5% 0">dimensões do produto</H1>
              <P color="#1e5680" size="1.5rem">
                {props.dimensoes}
              </P>
              <P color="#1e5680" size="1.2rem" margin="3% 0 0 0">
                {props.peso}
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

export default Product;
