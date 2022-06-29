import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

import banner from "../images/whoweare_images/banner.svg";
import bubbles from '../images/whoweare_images/bubbles.svg'
const WhoWeAre = () => {
  const Img = styled.img`
    width: ${ props => props.width || '100%'};
    height: auto;
    z-index: ${props => props.zindex || '-1'};
    left: 0;
    top: 120px;
    position: ${props => props.position ||'absolute'};
    margin: ${props => props.margin ||'0 0 0 0'};
  `;
  const Banner = styled.div`
    width: 100%;
    position: initial;
    height: 50vh;
    display: flex;
    justify-content: left;
    align-items: center;
  `;
  const Title = styled.h1`
    font-family: "Inter";
    color: #fafafa;
    margin-left: 10%;
    font-size: 80px;
    letter-spacing: 0.03em;
  `;

  const NossaEmpresa = styled.article`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `;
  const Welcome = styled.p`
    font-size: 1.22rem;
    color: #969696;
    font-family: "Inter";
    font-weight: 600;
    margin: 15px 0px 10px 0;
  `;

  const TitleOurCompany = styled.h1`
    font-size: 2.2rem;
    color: #1e547e;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    letter-spacing: 0.02em;
  `;

  const P = styled.p`
    width: 80%;
    font-family: 'Inter';
    font-size: 1.4rem;
    letter-spacing: 0.02em; 
    line-height: 33.4px;
  `;

  const Structure = styled.div`
    width: 100%;
    padding: 20%;
    background-color: #f5f5f5;  
  `;

  return (
    <>
      <Header />
      <main>
        <Banner>
          <Title>Quem Somos</Title>
          <Img src={banner} alt="banner" />
        </Banner>
        <NossaEmpresa>
          <Welcome>SEJA MUITO BEM VINDO</Welcome>
          <TitleOurCompany>SOBRE NOSSA EMPRESA</TitleOurCompany>
          <P>
            A <strong>América Rental</strong> é hoje reconhecida como a principal empresa atuante
            no ramo de locação de <strong>Sanitários Portáteis do Estado de São Paulo</strong>. <br />
            Fundada em 1999, oferecemos soluções práticas em <strong>locação de
            equipamentos</strong> para os mais diversos segmentos, tendo como atividade
            principal a locação de <strong>Sanitários Químicos para Obras e Eventos</strong>.
          </P>
          <Img src={bubbles} alt="eventos" width='70%' zindex='0' position='inherit' margin='30px 0'/>
        </NossaEmpresa>
        <Structure></Structure> 
      </main>
      <Footer />
    </>
  );
};

export default WhoWeAre;
