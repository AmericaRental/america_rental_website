import React from "react";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/global/footer";
import Header from "../components/global/header";

import banner from "../images/hidraulicos/banner.svg";
import prod1 from "../images/hidraulicos/prod1.svg";
import prod2 from "../images/hidraulicos/prod2.svg";

import step1 from "../images/hidraulicos/step1.svg";
import step2 from "../images/hidraulicos/step2.svg";
import step3 from "../images/hidraulicos/step3.svg";
import step4 from "../images/hidraulicos/step4.svg";
import step5 from "../images/hidraulicos/step5.svg";
import step6 from "../images/hidraulicos/step6.svg";

import img1 from "../images/hidraulicos/img1.svg";
import img2 from "../images/hidraulicos/img2.svg";
import img3 from "../images/hidraulicos/img3.svg";
import img4 from "../images/hidraulicos/img4.svg";
import img5 from "../images/hidraulicos/img5.svg";
import img6 from "../images/hidraulicos/img6.svg";

import "../css/chemicals_banner_style.css";
function Hidraulicos() {
  const Main = styled.main`
    width: 100vw;
  `;

  const Banner = styled.img`
    width: 100vw;
  `;

  const Produtos = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: #dedede;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-evenly;
    margin-top: -5px;
  `;

  const Img = styled.img`
    width: ${(props) => props.width || "150px"};
    height: ${(props) => props.width || "150px"};
  `;

  const Container = styled.section`
    width: ${props => props.width || '80vw'};
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
  `;

  const P = styled.p`
    font-family: "Inter";
    width: 800px;
    height: fit-content;
    margin: auto 6%;
    font-size: 1.5rem;
    line-height: 33px;
  `;

  const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const GridItem = styled.div`
    flex-basis: 30%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 20px;

  `;

  return (
    <>
      <Header />
      <Main>
        <Banner src={banner} alt="banner" />

        <Produtos>
          <Img src={prod1} alt="prod 1" width={"10%"} />
          <Img src={prod2} alt="prod 2" width={"10%"} />
        </Produtos>

        <Container>
          <Swiper
            autoHeight={true}
            centeredSlides={true}
            autoplay={{
              autoplay: 200,
              disableOnInteraction: false,
            }}
            className="SwiperChemical"
            modules={[Autoplay]}
          >
            <SwiperSlide className="bannerSwipe">
              <img src={step1} />
            </SwiperSlide>
            <SwiperSlide className="bannerSwipe">
              <img src={step2} />
            </SwiperSlide>
            <SwiperSlide className="bannerSwipe">
              <img src={step3} />
            </SwiperSlide>
            <SwiperSlide className="bannerSwipe">
              <img src={step4} />
            </SwiperSlide>
            <SwiperSlide className="bannerSwipe">
              <img src={step5} />
            </SwiperSlide>
            <SwiperSlide className="bannerSwipe">
              <img src={step6} />
            </SwiperSlide>
          </Swiper>

          <P>
            Os <strong>Sanitários Hidráulicos ou Convencionais</strong>{" "}
            dispensam o serviço de manutenção,{" "}
            <strong>sendo a opção mais econômica.</strong>
            <br /> Por esses modelos já serem ligados diretamente à rede de
            esgoto,
            <strong>
              {" "}
              não existe a necessidade de sucção e reposição de produtos
              químicos
            </strong>
            .<br /> Os equipamentos já vem prontos pra o engate de entrada e
            saída de água e no caso do chuveiro, vem também pronto para a
            ligação elétrica.
          </P>
        </Container>
        <Container width='70vw'>
          <Grid>
            <GridItem>
              <Img src={img1} width={'100%'}/>
            </GridItem>
            <GridItem>
              <Img src={img2} width={'100%'}/>
            </GridItem>
            <GridItem>
              <Img src={img3} width={'100%'}/>
            </GridItem>
            <GridItem>
              <Img src={img4} width={'100%'}/>
            </GridItem>
            <GridItem>
              <Img src={img5} width={'100%'}/>
            </GridItem>
            <GridItem>
              <Img src={img6} width={'100%'}/>
            </GridItem>
          </Grid>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Hidraulicos;
